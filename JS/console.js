$(document).ready(function() {
// Credit Value JS start
const consoleMenu = document.querySelector("#console-menu");
const sidebarConsole = document.querySelector(".console-sidebar");
const consoleMenuCloseBtn = document.querySelector("#console-menu-close-btn");
var git_zip_link_switch = 0;
var git_repo_switch = 0;

consoleMenu.addEventListener("click",function(){
  if(!sidebarConsole.classList.contains("activeConsoleMenu")){
    sidebarConsole.classList.add("activeConsoleMenu");
  }
});
consoleMenuCloseBtn.addEventListener("click",function(){
  if(sidebarConsole.classList.contains("activeConsoleMenu")){
    sidebarConsole.classList.remove("activeConsoleMenu");
  }
});

let credits_number = document.querySelector('#creditValue'),
    per_credit_price = document.getElementById("per_credit_price");
    total_price = document.querySelector('#total_price'),
    buy_creditsBtn = document.querySelector('#buyCredits'),
    increaseBtn = document.querySelector('#creaditAdd'),
    decreaseBtn = document.querySelector('#creaditSub');

// Default value
let currentValue = 0;
total_price.innerText = 0;
buy_creditsBtn.disabled = true;

increaseBtn.addEventListener('click', () => {
    currentValue++;
    updateValueAndTotal();
});

decreaseBtn.addEventListener('click', () => {
    if (currentValue > 0) {
        currentValue--;
        updateValueAndTotal();
    }
});

function updateValueAndTotal() {

    credits_number.value = currentValue;

    total_price.innerText = currentValue * per_credit_price.value;

    buy_creditsBtn.disabled = false;

    if(currentValue < 1)

    {

        buy_creditsBtn.disabled = true;

    }

}

// credit filters
// Function to filter the list items
function filterItems() {
    const creditModeValue = document.getElementById("credit_mode").value;
    const userRoleValue = document.getElementById("user_role").value;

    // Get all list items
    const listItems = document.querySelectorAll("#credit_history_list li");
    // const credit_history = document.querySelector("#credit_history_list");
    let anyVisible = false;
    // Loop through each list item
    listItems.forEach(function (item) {
        const itemCreditMode = item.getAttribute("data-credit-mode");
        const itemRole = item.getAttribute("data-role");

        // Map select values to data attribute values
        const creditModeMatch =  creditModeValue === "all" || (creditModeValue === "purchased" && itemCreditMode === "purchased") || (creditModeValue === "earned" && itemCreditMode === "earned") || (creditModeValue === "spent" && itemCreditMode === "spent");

        const roleMatch =  userRoleValue === "all" || (userRoleValue === "customization" && itemRole === "customization") ||(userRoleValue === "hosting" && itemRole === "hosting") ||(userRoleValue === "review" && itemRole === "review");

        // Show or hide the item based on the matches
        if (creditModeMatch && roleMatch) {
            item.style.display = "block"; // Show the item
            anyVisible = true; // At least one item is visible
        } else {
            item.style.display = "none"; // Show the item
        }
    });
    const noRecordsMessage = document.getElementById("no_records_message");
    if (!anyVisible) {
        noRecordsMessage.classList.remove("d-none");
    } else {
        noRecordsMessage.classList.add("d-none");
    }

}

// Event listener for the select elements
document.getElementById("credit_mode").addEventListener("change", filterItems);
document.getElementById("user_role").addEventListener("change", filterItems);

// Call the function initially to filter based on the default selections
filterItems();

  
// Credit Value JS end

// ***Ensure proper active class handling for nav-tabs (start)
const consoleNavLinks = document.querySelectorAll('.console-tab-link');
const consoleTabPanes = document.querySelectorAll('.console-tab-pane');
const consoleDropdownLinks = document.querySelectorAll('.collapse .console-tab-link');

// Function to handle tab activation
function activateTab(targetId) {
  // Loop through all nav links and remove active class
  consoleNavLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to the clicked nav link
  const activeLink = document.querySelector(`[href="${targetId}"]`);
  if(!activeLink.classList.contains('nav-dropdown')){
    if (activeLink){
      activeLink.classList.add('active');
    }
  
    // Loop through all tab panes and deactivate them
    consoleTabPanes.forEach(tab => {
      tab.classList.remove('show', 'active');
    });
  
    // Activate the target tab pane
    const activePane = document.querySelector(targetId);
    if (activePane) {
      activePane.classList.add('show', 'active');
    }
  }
}

// Add event listeners to main nav links
consoleNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior

    const targetId = link.getAttribute('href');
    if(!link.classList.contains('nav-dropdown')){
      activateTab(targetId);
    }
  });
});

// Add event listeners to dropdown links
consoleDropdownLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute('href');
    activateTab(targetId);
  });
});

// ***nav-tabs (end)

// Add new Project JS start
    
// multi-select Technologies

new MultiSelectTag('add_new_project_technologies',{

    placeholder: 'Search',

    tagColor: {

        textColor: 'var(--bs-primary-100)',

        borderColor: 'var(--bs-primary-100)',

        bgColor: 'var(--bs-primary-800)',

    },

    onChange: function(values) {

    const hiddenTechInput = document.getElementById("project_technologies_input");

        hiddenTechInput.setAttribute("value",getValuesInString(values));

        validateField("#project_technologies_input", /.*/, "Technologies are required.");

    }

});
  let slider_count = 0;
  const nextBtn = document.querySelector("#btn_next");
  const prevBtn = document.querySelector("#btn_prev");
//   const formWindow = document.querySelector("#formWindow");
//   const slide = document.querySelector("#slide");
  const addNewProjectForm = $("#addNewProjectForm");
  const submitBtn = document.querySelector("#btn_submit");
  const addProjectProgressBar = document.querySelector(".console-progress-bar");
  const console_tab_panes = document.querySelector("#console-tab-panes");
  let steps = document.querySelectorAll(".step-container");
  let stepsCount = steps.length;

  // Function to update active and deactive classes for steps
  function updateActiveStep(slider_count) {
      steps.forEach((step, index) => {
          if (index === slider_count) {
              step.classList.add("stepActive");
              step.classList.remove("stepDeactive");
          } else {
              step.classList.remove("stepActive");
              step.classList.add("stepDeactive");
          }
      });
  }

  // Function to check and update previous button visibility
  function checkWForPrev(slider_count) {
      if (slider_count <= 0) { 
          prevBtn.style.cssText = `opacity:0; transition:opacity 0.3s; cursor:initial;`;
      } else { 
          prevBtn.style.cssText = `opacity:1; transition:opacity 0.3s`;
      } 
  }

  // Function to check and update next/submit button visibility
  function checkWForNext(slider_count) {
      if (slider_count === (stepsCount - 1)) {
          nextBtn.setAttribute("hidden", "");
          submitBtn.removeAttribute("hidden");
      } else {
          submitBtn.setAttribute("hidden", "");
          nextBtn.removeAttribute("hidden");
      }
  }
  if(slider_count != 4){
      document.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        });
  }
  // Move to the next step
  function nextStep() {
    console_tab_panes.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
    // console.log(slider_count);
    if (slider_count < (stepsCount - 1) && addNewProjectForm.valid()) {
        slider_count += 1;
    //   formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
        addProjectProgressBar.style.width = `${20 * (slider_count+1)}%`;
        updateActiveStep(slider_count);
    }
    
    checkWForNext(slider_count);
    checkWForPrev(slider_count);
  }

  // Move to the previous step
  function prevStep() {
    console_tab_panes.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
      if (slider_count > 0) {
          slider_count -= 1;
        //   formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
          addProjectProgressBar.style.width = `${20* (slider_count+1)}%`;
          updateActiveStep(slider_count);
      }
      checkWForNext(slider_count);
      checkWForPrev(slider_count);
  }

  nextBtn.addEventListener('click', () => nextStep());
  prevBtn.addEventListener('click', () => prevStep());

  // Initial setup
  updateActiveStep(slider_count);
  checkWForPrev(slider_count);
  checkWForNext(slider_count);

    // Source Website JS Start
    const update_git_link_public = document.getElementById("update_git_link_public");
    function showAlert(type, message) {
        $('#alertBox').html(`<div class="alert alert-${type}" role="alert">${message}</div>`);
        setTimeout(() => { $('#alertBox').html(''); }, 5000);
    }

    function toggleSections() {
        const type = $('#repoType').val();
        $('#publicSection, #privateSection').addClass('hidden');
        if (type === 'public') {
            $('#publicSection').removeClass('hidden');
        } else if (type === 'private') {
            $('#privateSection').removeClass('hidden');
        }
        resetButtons();
    }

    function resetButtons() {
        $('#checkPublic, #checkPrivate').each(function () {
            $(this)
            .removeClass('btn-success')
            .addClass('btn-primary')
            .find('.btn-text').text('Check');
            $(this).find('.spinner-border').addClass('d-none');
        });
    }

    $('#repoType').change(toggleSections);

    $('#isOrg').change(function () {
    if ($(this).val() === 'yes') {
        $('#orgNameDiv').removeClass('hidden');
        $('#usernameDiv').addClass('hidden');
    } else {
        $('#orgNameDiv').addClass('hidden');
        $('#usernameDiv').removeClass('hidden');
    }
    resetButtons();
    });

    $('#checkPublic').on('input', resetButtons);
    $('#checkPrivate').on('input', resetButtons);

    function setButtonSuccess(btn) {
        btn.removeClass('btn-primary').addClass('btn-success');
        btn.find('.btn-text').html('<i class="bi bi-check-circle"></i> Checked');
    }
    
    // Reset private check button on input/select change
    $('#privateSection input, #privateSection select').on('input change', function () {
        const btn = $('#checkPrivate');
        btn.removeClass('btn-success').addClass('btn-primary');
        btn.find('.btn-text').text('Check');
    }); 
    $('#zipLink').on('input', function () {
        const btn = $('#checkPublic');
        btn.removeClass('btn-success').addClass('btn-primary');
        btn.find('.btn-text').text('Check');
    });
    
    $('#checkPublic').click(function () {
    if ($('#zipLink').valid()) {
        const btn = $(this);
        btn.find('.spinner-border').removeClass('d-none');

        setTimeout(() => {
        const zipLink = $('#zipLink').val();
        // temp Code Start
        if(zipLink === "https://github.com/username/project-name/archive/refs/heads/main.zip"){
            setButtonSuccess(btn);
            showAlert('success', 'Git zip link is valid.');
            $('#zipLink').prop("disabled",true); 
            git_zip_link_switch = 1;   // link available
        }else{
             git_zip_link_switch = 0;   // link not available
             $('#zipLink').prop("disabled",false); 
             showAlert('danger', 'Git zip link is invalid.');
        }
        // temp Code End

        // $.ajax({
        //     url: '/check-git-zip-link/',  // 🔁 Update to your actual Django URL endpoint
        //     method: 'POST',
        //     data: JSON.stringify({ zip_link: zipLink }), // 🔁 Send as JSON
        //     contentType: 'application/json',
        //     headers: {
        //     'X-CSRFToken': getCSRFToken() // CSRF is required for Django POST
        //     },
        //     success: (response) => {
        //     btn.find('.spinner-border').addClass('d-none');

        //     if (response.git_link_status === true) {
        //         setButtonSuccess(btn);
        //         showAlert('success', 'Git zip link is valid.');
        //         $('#zipLink').prop("disabled",true); 
        //         git_zip_link_switch = 1;   
        //     } else {
        //         git_zip_link_switch = 0;   
        //         $('#zipLink').prop("disabled",false); 
        //         showAlert('danger', 'Git zip link is invalid.');
        //     }
        //     },
        //     error: () => {
        //     btn.find('.spinner-border').addClass('d-none');
        //     showAlert('danger', 'Error while checking Git zip link.');
        //     }
        // });
        }, 3000);
    }
    });
    
    $('#checkPrivate').click(function () {
    if ($('#orgName').valid() && $('#username').valid() && $('#repoName').valid() && $('#branchName').valid() && $('#pat').valid()) {
        const btn = $(this);
        btn.find('.spinner-border').removeClass('d-none');

        setTimeout(() => {
        const isOrg = $('#isOrg').val();
        const orgName = $('#orgName').val();
        const username = $('#username').val();
        const repo = $('#repoName').val();
        const branch = $('#branchName').val();
        const token = $('#pat').val();

        const dataToSend = {
            is_org: isOrg,
            org_name: orgName,
            username: username,
            repo_name: repo,
            branch_name: branch,
            pat: token
        };

        $.ajax({
            url: '/check-private-repo/',  // 🔁 Update to your Django backend URL
            method: 'POST',
            data: JSON.stringify(dataToSend),
            contentType: 'application/json',
            headers: {
            'X-CSRFToken': getCSRFToken()
            },
            success: (response) => {
            btn.find('.spinner-border').addClass('d-none');

            if (response.repo_status === true) {
                setButtonSuccess(btn);
                showAlert('success', 'Repo details are correct.');
            } else {
                showAlert('danger', 'Please enter valid repo details.');
            }
            },
            error: () => {
            btn.find('.spinner-border').addClass('d-none');
            showAlert('danger', 'Error while checking repo details.');
            }
        });
        }, 3000);
    }
    });
    // CSRF token getter
    function getCSRFToken() {
    return document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    }
    var x = git_zip_link_switch;
    update_git_link_public.addEventListener("click",function(x){
        console.log(x);
        if(x == 1){
            console.log("checked in if condition");
            git_zip_link_switch = 0;
            $('#zipLink').prop("disabled",false); 
        }
        else{
            console.log("checked out if condition");

        }
    });
    // Source Website JS End

  // source code file 
  function initializeFileUpload(dropArea, filePreviewContainer, fileInput) {
    let uploadedFile = null;

    // Handle file selection via upload button
    fileInput.addEventListener('change', handleFileSelect);

    // Handle drag & drop
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('dragover');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    });

    function handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    }

    function handleFile(file) {
        // Check for valid file types
        const validTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg',
            'image/png',
            'application/zip'
        ];

        const validExtensions = ['pdf', 'doc', 'docx', 'jpeg', 'jpg', 'png', 'zip'];

        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
            console.error('Invalid file type. Please select a valid file.');
            return;
        }

        // Remove existing file if any
        if (uploadedFile) {
            removeFile();
        }

        uploadedFile = file;
        displayFile(file);
        fileInput.files = createFileList(file);
    }

    function displayFile(file) {
        const filePreview = document.createElement('div');
        filePreview.className = 'file-preview';

        filePreview.innerHTML = `
            <span>${file.name}</span>
            <span class="close-btn material-icons text-primary fs-5">close</span>
        `;

        filePreview.querySelector('.close-btn').addEventListener('click', removeFile);
        filePreviewContainer.appendChild(filePreview);
    }

    function removeFile() {
        uploadedFile = null;
        fileInput.value = ''; // Clear the input field
        filePreviewContainer.innerHTML = ''; // Clear the preview
    }

    function createFileList(file) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        return dataTransfer.files;
    }
}

// const sourceCodeDropArea = document.getElementById('sourceCodeDropArea');
// const sourceCodeZip = document.getElementById('sourceCodeZip');
// const sourceFilePreviewContainer = document.getElementById('sourceFilePreviewContainer');
// initializeFileUpload(sourceCodeDropArea, sourceFilePreviewContainer, sourceCodeZip);

const sourceDocDropArea = document.getElementById('sourceDocDropArea');
const sourceDocFile = document.getElementById('sourceDocFile');
const sourceDocPreviewContainer = document.getElementById('sourceDocPreviewContainer');
initializeFileUpload(sourceDocDropArea, sourceDocPreviewContainer, sourceDocFile);

// if website is hosted then remove hosting plan

const webHostedUrl = document.querySelector("#websiteUrl");
const hosting_plan_form = document.querySelector("#hosting_plan_form");
const hosted_web_card = document.querySelector("#hosted_card");
const hosted_web_link = document.querySelector("#hosted_web_link");
webHostedUrl.addEventListener("input",()=>{
    if(webHostedUrl.value != ""){
        hosting_plan_form.classList.add("d-none");
        hosted_web_card.classList.remove("d-none");
        hosted_web_link.setAttribute("href",webHostedUrl.value);
        hosted_web_link.innerHTML = webHostedUrl.value;

    }else{
        hosting_plan_form.classList.remove("d-none");
        hosted_web_card.classList.add("d-none");
        hosted_web_link.setAttribute("href","website_link");
        hosted_web_link.innerHTML = "website_link";

    }
})
// video link js
// Video link JavaScript
const demoVideoLinkInput = document.getElementById('project_demo_video_link');
const submitVideoBtn = document.getElementById('submit-video-btn');
const videoInputField = document.getElementById('project_video_link');
const videoContainer = document.getElementById('videoContainer');
const removeVideoBtn = document.getElementById('remove_video_btn');
var videoModal = new bootstrap.Modal(document.getElementById('projectVideoLink'), {
  keyboard: false
});

// Function to convert YouTube link to embeddable format
function getEmbeddableYouTubeLink(url) {
    const urlPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
    const match = url.match(urlPattern);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

// Update video preview on input
demoVideoLinkInput.addEventListener('input', function () {
    // Clear existing video content
    videoContainer.innerHTML = '';

    const userInput = demoVideoLinkInput.value.trim();
    const embedLink = getEmbeddableYouTubeLink(userInput);

    if (embedLink) {
        // Create iframe for video
        let iframe = document.createElement('iframe');
        iframe.src = embedLink;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        iframe.frameBorder = "0";
        iframe.style.borderRadius = "8px";

        // Append iframe to video container
        videoContainer.appendChild(iframe);
    } else {
        // Show a placeholder or an error message for invalid input
        videoContainer.innerHTML = `<div class="text-danger d-flex align-items-center h-100 fs-5 fw-500 justify-content-center">
                                        <p>Please Enter Valid Link</p></div>`;
    }
});

// Update hidden input field and show remove button on submit
submitVideoBtn.addEventListener("click", () => {
    const embedLink = getEmbeddableYouTubeLink(demoVideoLinkInput.value.trim());
    if (embedLink) {
        videoInputField.setAttribute('value', embedLink);
        videoModal.hide();

        // Show the remove button
        removeVideoBtn.classList.remove('d-none');
    }
});

// Remove video iframe and reset input field on remove button click
removeVideoBtn.addEventListener("click", () => {
    // Clear the iframe content
    videoContainer.innerHTML = `<div class="text-dark-100 d-flex align-items-center h-100 fs-5 fw-500 justify-content-center">
                                    <p>Video preview will appear here</p>
                                </div>`;

    // Reset the input field and hidden field
    demoVideoLinkInput.value = '';
    videoInputField.setAttribute('value', '');

    // Hide the remove button
    removeVideoBtn.classList.add('d-none');
});


// step-2 preview image js
// show Image before submit the form. (function written at common.js)
// setupImagePreview parameters : inputId, previewImageId, removeButtonId, dummyImageSrc 
setupImagePreview('banner_image','preview_banner','remove_banner_btn','assets/dummyBanner.png'); // banner
setupImagePreview('web_logo','preview_web_logo','remove_web_logo_btn','assets/Dummylogo.png'); // web logo
setupImagePreview('project_thumbnail','preview_card_image','remove_card_image_btn','assets/cardDummy.png'); // card image
setupImagePreview('gallary_image_1','preview_gallary_image_1','remove_gallary_img1_btn','assets/gallaryImgDummy.png'); // gallary image 1
setupImagePreview('gallary_image_2','preview_gallary_image_2','remove_gallary_img2_btn','assets/gallaryImgDummy.png'); // gallary image 2
setupImagePreview('gallary_image_3','preview_gallary_image_3','remove_gallary_img3_btn','assets/gallaryImgDummy.png'); // gallary image 3
setupImagePreview('gallary_image_4','preview_gallary_image_4','remove_gallary_img4_btn','assets/gallaryImgDummy.png'); // gallary image 4

// document.querySelectorAll(".media_input").forEach((inputField) => {
//     inputField.addEventListener("input", () => {
//         if (inputField.value !== "") {
//             inputField.parentNode.classList.remove("btn-outline-primary-100", "border-primary-100");
//             inputField.parentNode.classList.add("border-success-100", "btn-success-100", "text-white");
//         } else {
//             inputField.parentNode.classList.add("btn-outline-primary-100", "border-primary-100");
//             inputField.parentNode.classList.remove("border-success-100", "btn-success-100", "text-white");
//         }
//     });
// });

// hosting provider field shown or not.
// const chooseHostingProvider = document.querySelector('#web_hoster_choice');

// chooseHostingProvider.addEventListener("change", function() {
//     const hosting_provider_field = document.querySelector("#hosting_provider_field");
//     if (chooseHostingProvider.value == 1) {
//         hosting_provider_field.classList.remove("d-none");
//     } else {
//         hosting_provider_field.classList.add("d-none");
//     }
// });
const get_reviewer_select = document.querySelector("#get_reviewer");
const review_plan_fields = document.querySelectorAll(".get_reviewer_or_not");
get_reviewer_select.addEventListener("change",function(){
    if(get_reviewer_select.value == "2"){
        review_plan_fields.forEach((field)=>{
            field.classList.add("d-none");
        });
    }else{
        review_plan_fields.forEach((field)=>{
            field.classList.remove("d-none");
        });
    }
});
const get_hoster_select = document.querySelector("#get_hoster");
const hosting_plan_fields = document.querySelectorAll(".get_hoster_or_not");
get_hoster_select.addEventListener("change",function(){
    if(get_hoster_select.value == "2"){
        hosting_plan_fields.forEach((field)=>{
            field.classList.add("d-none");
        });
    }else{
        hosting_plan_fields.forEach((field)=>{
            field.classList.remove("d-none");
        });
    }
});
const reviewer_preference_select = document.querySelector("#reviewer_preference");
const reviewer_preference_solvify = document.querySelector("#reviewer_preference_solvify");
const reviewer_preference_freelancer = document.querySelector("#reviewer_preference_freelancer");
reviewer_preference_select.addEventListener("change",function(){
    if(reviewer_preference_select.value == "1"){
        if(!reviewer_preference_freelancer.classList.contains("d-none")){
            reviewer_preference_freelancer.classList.add("d-none");
        }
        if(reviewer_preference_solvify.classList.contains("d-none")){
            reviewer_preference_solvify.classList.remove("d-none");
        }
    }else{
        if(reviewer_preference_freelancer.classList.contains("d-none")){
            reviewer_preference_freelancer.classList.remove("d-none");
        }
        if(!reviewer_preference_solvify.classList.contains("d-none")){
            reviewer_preference_solvify.classList.add("d-none");
        }
    }
})
const hoster_preference_select = document.querySelector("#hoster_preference");
const hoster_preference_solvify = document.querySelector("#hoster_preference_solvify");
const hoster_preference_freelancer = document.querySelector("#hoster_preference_freelancer");
hoster_preference_select.addEventListener("change",function(){
    if(hoster_preference_select.value == "1"){
        if(!hoster_preference_freelancer.classList.contains("d-none")){
            hoster_preference_freelancer.classList.add("d-none");
        }
        if(hoster_preference_solvify.classList.contains("d-none")){
            hoster_preference_solvify.classList.remove("d-none");
        }
    }else{
        if(hoster_preference_freelancer.classList.contains("d-none")){
            hoster_preference_freelancer.classList.remove("d-none");
        }
        if(!hoster_preference_solvify.classList.contains("d-none")){
            hoster_preference_solvify.classList.add("d-none");
        }
    }
})
// Add new Project JS end

    // Approve sweetalert for reviewer
    // var reviewer_response_modal = new bootstrap.Modal(document.getElementById('reviewer_response_modal'), {
    //     keyboard: false
    // });
    document.getElementById("reviewer_approve_btn").addEventListener('click',function() {
        Swal.fire({
            title: 'Are you sure you want to approve this project? ',
            text: 'Once approved, it will be marked as completed, and the payment will be released to the reviewer.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                // reviewer_response_modal.hide();
                Swal.fire({
                    title: 'Success!',
                    text: 'Approve Successfully',
                    icon: 'success'
                }).then(() => {
                   
                });
            }
        });
    });

    // Approve sweetalert for reviewer
    // var hoster_response_modal = new bootstrap.Modal(document.getElementById('hoster_response_modal'), {
    //     keyboard: false
    // });
    document.getElementById("hoster_approve_btn").addEventListener('click',function() {
        Swal.fire({
            title: 'Are you sure you want to approve this project? ',
            text: 'Once approved, it will be marked as completed, and the payment will be released to the hoster.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                // hoster_response_modal.hide();
                Swal.fire({
                    title: 'Success!',
                    text: 'Approve Successfully',
                    icon: 'success'
                }).then(() => {
                   
                });
            }
        });
    });

    // success alert for reviewer and developer after modal form submission
    document.querySelectorAll('[id^="make_as_completed_form_"]').forEach((form)=>{
        const indentifier = form.id.split("_")[4];
        var Modal = new bootstrap.Modal(document.getElementById(`project_complete_modal_${indentifier}`), {
            keyboard: false
          });
        form.addEventListener("submit",function(event){
            event.preventDefault();
            if($(form).valid()){
                Modal.hide();
                Swal.fire({
                    title: 'Success!',
                    text: 'Project Uploaded Successfully! Please wait for the client response',
                    icon: 'success'
                }).then(() => { 
                    form.reset();
                 });
                
            }
        })
    })

    // success alert for hoster after modal form submission
    document.querySelectorAll('[id^="hosting_as_completed_form_"]').forEach((form)=>{
        const indentifier = form.id.split("_")[4];
        var Modal = new bootstrap.Modal(document.getElementById(`hosting_complete_modal_${indentifier}`), {
            keyboard: false
          });
        form.addEventListener("submit",function(event){
            event.preventDefault();
            if($(form).valid()){
                Modal.hide();
                Swal.fire({
                    title: 'Success!',
                    text: 'Project Uploaded Successfully! Please wait for the client response',
                    icon: 'success'
                }).then(() => { 
                   
                 });
                
            }
        })
    });

    // success alert for reviewer after modal form submission
    document.querySelectorAll('[id^="reviewing_as_completed_form_"]').forEach((form)=>{
        const indentifier = form.id.split("_")[4];
        var Modal = new bootstrap.Modal(document.getElementById(`reviewing_complete_modal_${indentifier}`), {
            keyboard: false
          });
        form.addEventListener("submit",function(event){
            event.preventDefault();
            if($(form).valid()){
                Modal.hide();
                Swal.fire({
                    title: 'Success!',
                    text: 'Project Uploaded Successfully! Please wait for the client response',
                    icon: 'success'
                }).then(() => { 
                   
                 });
                
            }
        })
    });

    // Developer Accepted Project - Ongoing Jobs
    document.querySelectorAll('[id^="development_accept_btn_"]').forEach((e)=>{
        e.addEventListener("click",()=>{
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to Accept or Reject this project?',
                icon: 'question',
                showCancelButton: true,
                showDenyButton: true,
                confirmButtonText: 'Accept',
                denyButtonText: 'Reject',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
    
                    Swal.fire({
                        title: 'Success!',
                        title: 'Congratulations ! You got this project.',
                        text: 'We are in the process of collecting the fees from the client. Once everything is confirmed, we will notify you to begin the project.',
                        icon: 'success'
                    })
                }
            });
        });
    });
    // Reviewing Accepted Project - Ongoing Jobs
    document.querySelectorAll('[id^="reviewing_accept_btn_"]').forEach((e)=>{
        e.addEventListener("click",()=>{
            Swal.fire({
                title: 'Are you sure ?',
                text: 'You want to Accept this project.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                denyButtonText: 'Reject',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
    
                    Swal.fire({
                        title: 'Success!',
                        title: 'Congratulations ! You got this project.',
                        text: 'We are in the process of collecting the fees from the client. Once everything is confirmed, we will notify you to begin the project.',
                        icon: 'success'
                    }).then(() => {
                       
                    });
                }
            });
        });
    });
    // Hosting Accepted Project - Ongoing Jobs
    document.querySelectorAll('[id^="hosting_accept_btn_"]').forEach((e)=>{
        e.addEventListener("click",()=>{
            Swal.fire({
                title: 'Are you sure ?',
                text: 'You want to Accept this project.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                denyButtonText: 'Reject',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
    
                    Swal.fire({
                        title: 'Success!',
                        title: 'Congratulations ! You got this project.',
                        text: 'We are in the process of collecting the fees from the client. Once everything is confirmed, we will notify you to begin the project.',
                        icon: 'success'
                    }).then(() => {
                       
                    });
                }
            });
        });
    });

    if(document.getElementById("qp_developer_assign_form")){
        const qpDeveloperAssignForm = document.getElementById("qp_developer_assign_form");
        const qpDeveloperAssignSelect = document.getElementById("qp_developer_assign");
        qpDeveloperAssignSelect.addEventListener("change",()=>{
            Swal.fire({
                title: "Are You Sure ?",
                text: "You want to assign a developer .",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    qpDeveloperAssignForm.submit();
                }
            });
        })
    }
    if(document.getElementById("np_developer_assign_form")){
        const npDeveloperAssignForm = document.getElementById("np_developer_assign_form");
        const npDeveloperAssignSelect = document.getElementById("np_developer_assign");
        npDeveloperAssignSelect.addEventListener("change",()=>{
            Swal.fire({
                title: "Are You Sure ?",
                text: "You want to assign a developer .",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    npDeveloperAssignForm.submit();
                }
            });
        })
    }
    if(document.getElementById("np_reviewer_assign_form")){
        const npReviewerAssignForm = document.getElementById("np_reviewer_assign_form");
        const npReviewerAssignSelect = document.getElementById("np_reviewer_assign");
        npReviewerAssignSelect.addEventListener("change",()=>{
            Swal.fire({
                title: "Are You Sure ?",
                text: "You want to assign a Reviewer .",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    npReviewerAssignForm.submit();
                }
            });
        })
    }
    if(document.getElementById("np_hoster_assign_form")){
        const npHosterAssignForm = document.getElementById("np_hoster_assign_form");
        const npHosterAssignSelect = document.getElementById("np_hoster_assign");
        npHosterAssignSelect.addEventListener("change",()=>{
            Swal.fire({
                title: "Are You Sure ?",
                text: "You want to assign a Hoster .",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    npHosterAssignForm.submit();
                }
            });
        })
    }
    // copy to clipboard
    if(document.getElementById("copyIcon") && document.getElementById("linkInput") &&  document.getElementById("copyMessage")){

        const copyIcon = document.getElementById("copyIcon");
        const linkInput = document.getElementById("linkInput");
        const copyMessage = document.getElementById("copyMessage");
    
        copyIcon.addEventListener("click", () => {
            linkInput.select();
            document.execCommand("copy");
            copyMessage.style.display = "block";
            setTimeout(() => {
                copyMessage.style.display = "none";
            }, 2000);
        });
    }


    // Edit Bid Form Modal
    // var bidModal = new bootstrap.Modal(document.getElementById('editBidModal'), {
    //     keyboard: false
    // });
    // const bidForm = document.getElementById("editBidPlacedForm");
    // bidForm.addEventListener("submit",function(event){
    //     event.preventDefault();
    //     if($(bidForm).valid()){
    //         bidModal.hide();
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Bid Updated Successfully',
    //             icon: 'success'
    //         }).then(()=>{
    //             bidForm.reset();
    //         });
    //     }
    // });

    // Quotation Approve Modal
    var quotationFromClientModal = new bootstrap.Modal(document.getElementById('quotationFromClientModal'), {
        keyboard: false
    });
    const quotation_approve_btn = document.getElementById("quotation_approve_btn");
    const quotation_decline_btn = document.getElementById("quotation_decline_btn");
    const quotationFromClientBtn = document.getElementById("quotationFromClientBtn");
    // Quotation Approve sweetalert
    quotation_approve_btn.addEventListener("click",function(){
        Swal.fire({
            title: 'Are you sure , you want to approve ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Approve',
            cancelButtonText: ' Cancel ',
        }).then((result)=>{
            if (result.isConfirmed) {
                if(!quotation_approve_btn.classList.contains("d-none")){
                    quotation_approve_btn.classList.add("d-none");
                }
                if(!quotation_decline_btn.classList.contains("d-none")){
                    quotation_decline_btn.classList.add("d-none");
                }
                quotationFromClientModal.hide();
                Swal.fire({
                    title: 'Approve Successfully! ',
                    icon: 'success'
                });
            }
        });
    });

    // Quotation Decline sweetalert
    quotation_decline_btn.addEventListener("click",function(){
        Swal.fire({
            title: 'Are you sure , you want to Decline ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Decline',
            cancelButtonText: ' Cancel ',
        }).then((result)=>{
            if (result.isConfirmed) {
                if(!quotationFromClientBtn.classList.contains("d-none")){
                    quotationFromClientBtn.classList.add("d-none");
                }
                quotationFromClientModal.hide();
                Swal.fire({
                    title: 'Decline Successfully! ',
                    icon: 'success'
                });
            }
        });
    });
    

    // End Negotiation
    if(document.querySelector('[data-bs-target="#np_complete_negotiation_modal"]')){
        const np_complete_negotiation_icon_btn = document.querySelector('[data-bs-target="#np_complete_negotiation_modal"]');
        const np_negotiation_project_field = document.querySelector("#np_negotiation_project_id");
        const np_negotiation_client_field = document.querySelector("#np_negotiation_client_id");
        np_complete_negotiation_icon_btn.addEventListener("click",function(){
            let project_id = np_complete_negotiation_icon_btn.getAttribute("data-project-id");
            let client_id = np_complete_negotiation_icon_btn.getAttribute("data-client-id");
            np_negotiation_project_field.setAttribute("value",project_id);
            np_negotiation_client_field.setAttribute("value",client_id);
        });
    }
    // End Analysis
    const np_complete_analysis_form = document.getElementById("np_complete_analysis_form");
    if(document.querySelector('[data-bs-target="#np_complete_analysis_modal"]')){
        const np_complete_analysis_icon_btn = document.querySelector('[data-bs-target="#np_complete_analysis_modal"]');
        const np_analysis_project_field = document.querySelector("#np_analysis_project_id");
        const np_analysis_client_field = document.querySelector("#np_analysis_client_id");
        const project_decision = document.querySelector("#project_decision");
        np_complete_analysis_icon_btn.addEventListener("click",function(){
            let project_id = np_complete_analysis_icon_btn.getAttribute("data-project-id");
            let client_id = np_complete_analysis_icon_btn.getAttribute("data-client-id");
            np_analysis_project_field.setAttribute("value",project_id);
            np_analysis_client_field.setAttribute("value",client_id);
            project_decision.setAttribute("value","1");
        });
    }
    // End Analysis reject btn
    if(document.getElementById("np_project_reject_btn")){
        const np_project_reject_btn = document.getElementById("np_project_reject_btn");
        const project_decision = document.getElementById("project_decision");
        np_project_reject_btn.addEventListener("click",()=>{
            project_decision.setAttribute("value","0");
            np_complete_analysis_form.submit();
        })
    }
    // Call Attended
    if(document.querySelector('[data-bs-target="#callRequestModal"]')){
        document.querySelectorAll('[data-bs-target="#callRequestModal"]').forEach((element)=>{
            const caller_client_name = document.getElementById("caller_client_name");
            const caller_uname = document.getElementById("caller_uname");
            const caller_email = document.getElementById("caller_email");
            const caller_phone_no = document.getElementById("caller_phone_no");
            const caller_age = document.getElementById("caller_age");
            const caller_gender = document.getElementById("caller_gender");
            // const caller_profile_pic = document.getElementById("caller_profile_pic");
            const project_workflow_id_input = document.getElementById("project_workflow_id");
            element.addEventListener("click",function(){
                let caller_details = element.getAttribute("data-client-info").split(",");
                let project_workflow_id = element.getAttribute("data-project-workflow-id");
                caller_client_name.innerHTML = caller_details[0];
                caller_uname.innerHTML = caller_details[1];
                caller_email.innerHTML = caller_details[2];
                caller_phone_no.innerHTML = caller_details[3];
                caller_age.innerHTML = caller_details[4];
                caller_gender.innerHTML = caller_details[5];
                // caller_profile_pic.setAttribute("src",caller_details[6]); // `{% path '${caller_details[6]}' %}`
                project_workflow_id_input.setAttribute("value",project_workflow_id);
            });
        });
    }

    // End Negotiation For Quoted Projects
    if(document.querySelector('[data-bs-target="#qp_complete_negotiation_modal"]')){
        const qp_complete_negotiation_btn = document.querySelectorAll('[data-bs-target="#qp_complete_negotiation_modal"]');
        qp_complete_negotiation_btn.forEach((element)=>{
            const qp_negotiation_quote_id = document.querySelector("#qp_negotiation_quote_id");
            element.addEventListener("click",function(){
                let qp_id = element.getAttribute("data-quote-id");
                qp_negotiation_quote_id.setAttribute("value",qp_id);
            });
        });
    }

    // End Quotation Phase in Quoted Project
    if(document.querySelector('[data-bs-target="#quotationUploadModal"]')){
        const quotationUploadBtn = document.querySelectorAll('[data-bs-target="#quotationUploadModal"]');
        quotationUploadBtn.forEach((element)=>{
            const qp_quotation_id = document.querySelector("#qp_quotation_id");
            element.addEventListener("click",function(){
                let quotation_id = element.getAttribute("data-quote-id");
                qp_quotation_id.setAttribute("value",quotation_id);
            });
        });
    }

    // End Quotation From Client Phase in Quoted Project
    if(document.querySelector('[data-bs-target="#quotationFromClientModal"]')){
        const quotationFromClientBtn = document.querySelectorAll('[data-bs-target="#quotationFromClientModal"]');
        quotationFromClientBtn.forEach((element)=>{
            const quotation_form_client_id = document.querySelector("#quotation_form_client_id");
            const qp_quotation_project_name = document.querySelector("#qp_quotation_project_name");
            const signed_quotation_download = document.querySelector("#signed_quotation_download");
            element.addEventListener("click",function(){
                let quotation_client_id = element.getAttribute("data-quote-id");
                let quotation_project_name = element.getAttribute("data-project-name");
                let signed_quotation_download_URL = element.getAttribute("data-download-url");
                quotation_form_client_id.setAttribute("value",quotation_client_id);
                signed_quotation_download.setAttribute("href",signed_quotation_download_URL);
                qp_quotation_project_name.innerHTML = quotation_project_name;
            });
        });
    }
    if (document.querySelector("#quotation_approve_btn") &&
    document.querySelector("#quotation_form_client_status") &&
    document.querySelector("#quotation_decline_btn") &&
    document.querySelector("#quotation_from_client_form")) {

    const qp_quotation_approve_btn = document.querySelector("#quotation_approve_btn");
    const quotation_form_client_status = document.querySelector("#quotation_form_client_status");
    const qp_quotation_decline_btn = document.querySelector("#quotation_decline_btn");
    const quotation_from_client_form = document.querySelector("#quotation_from_client_form");

    qp_quotation_approve_btn.addEventListener("click", function () {
        quotation_form_client_status.setAttribute("value", "1");
        quotation_from_client_form.submit();
    });

    qp_quotation_decline_btn.addEventListener("click", function () {
        quotation_form_client_status.setAttribute("value", "0");
        quotation_from_client_form.submit();
    });
}

// Quoted Project Developer Dileverables Id transfer from <a></a>
if(document.querySelector('[data-bs-target="#qp_development_deliverables_modal"]')){
    const qp_dev_deliverables_btn = document.querySelectorAll('[data-bs-target="#qp_development_deliverables_modal"]');
    qp_dev_deliverables_btn.forEach((element)=>{
        const qp_dev_deliverables_id = document.querySelector("#qp_dev_deliverables");
        element.addEventListener("click",function(){
            let qp_dev_deliverables_btn_id = element.getAttribute("data-quote-id");
            qp_dev_deliverables_id.setAttribute("value",qp_dev_deliverables_btn_id);
        });
    });
}
    // <script>
    // document.addEventListener("DOMContentLoaded", function () {
    //     var rejectModal = document.getElementById("np_development_reject_modal");

    //     rejectModal.addEventListener("show.bs.modal", function (event) {
    //         var button = event.relatedTarget;  // The button that triggered the modal
    //         var rejectionReason = button.getAttribute("data-rejection-reason");  // Get the reason from data attribute

    //         var modalBody = document.getElementById("cust_modal_rejection_reason");
    //         modalBody.textContent = rejectionReason ? rejectionReason : "No reason provided.";
    //     });
    // });
// </script>

    // End Analysis Sweetalert for quoted projects
    if(document.getElementById("qp_complete_analysis_modal")){
        const qp_complete_analysis_btn = document.getElementById("qp_complete_analysis_modal");
        qp_complete_analysis_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Are you sure ?, you want accept this project.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: ' No ',
            }).then((result)=>{
                if (result.isConfirmed) {
                    if(!qp_complete_analysis_btn.classList.contains("d-none")){
                        qp_complete_analysis_btn.classList.add("d-none");
                    }
                    Swal.fire({
                        title: 'Analysis End Successfully! ',
                        icon: 'success'
                    });
                }
            });
        });
    }
    // End Negotiation Sweetalert for quoted projects
    if(document.getElementById("qp_complete_negotiation_modal")){
        const qp_complete_negotiation_btn = document.getElementById("qp_complete_negotiation_modal");
        qp_complete_negotiation_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Are you sure , you want to end Negotiation ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: ' No ',
            }).then((result)=>{
                if (result.isConfirmed) {
                    if(!qp_complete_negotiation_btn.classList.contains("d-none")){
                        qp_complete_negotiation_btn.classList.add("d-none");
                    }
                    Swal.fire({
                        title: 'Negotiation End Successfully! ',
                        icon: 'success'
                    });
                }
            });
        });
    }

     // Approve hoster project - console / projects
     if(document.getElementById("cp_hoster_deliverables_approve_btn")){
        const cp_hoster_deliverables_approve_btn = document.getElementById("cp_hoster_deliverables_approve_btn");
        var clientDeliverablesFromHosterModal = new bootstrap.Modal(document.getElementById('clientDeliverablesFromHoster'), {
            keyboard: false
        });
        cp_hoster_deliverables_approve_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Approved Successfully',
                icon: 'success',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton:true,
                timer: 5000,
                timerProgressBar: true,
                backdrop:false,
                customClass: {
                    popup: 'no-blur-popup'
                }
            });
            clientDeliverablesFromHosterModal.hide();
        });
    }
    // Decline hoster project - console / projects
    if(document.getElementById("cp_hoster_deliverables_decline_btn")){
        // const clientDeliverablesFromHosterModal = new bootstrap.Modal(document.getElementById('clientDeliverablesFromHoster'), {
        //     keyboard: false
        // });
        const cp_hoster_deliverables_decline_btn = document.getElementById("cp_hoster_deliverables_decline_btn");
        cp_hoster_deliverables_decline_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Decline Successfully',
                icon: 'success',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton:true,
                timer: 5000,
                timerProgressBar: true,
                backdrop:false,
                customClass: {
                    popup: 'no-blur-popup'
                }
            })
            clientDeliverablesFromHosterModal.hide();
        });
    }
     // Approve reviewer project - console / projects
     if(document.getElementById("cp_reviewer_deliverables_approve_btn")){
        var clientDeliverablesFromReviewerModal = new bootstrap.Modal(document.getElementById('clientDeliverablesFromReviewer'), {
            keyboard: false
        });
        const cp_reviewer_deliverables_approve_btn = document.getElementById("cp_reviewer_deliverables_approve_btn");
        cp_reviewer_deliverables_approve_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Approved Successfully',
                icon: 'success',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton:true,
                timer: 5000,
                timerProgressBar: true,
                backdrop:false,
                customClass: {
                    popup: 'no-blur-popup'
                }
            })
            clientDeliverablesFromReviewerModal.hide();
        });
    }
    // Decline reviewer project - console / projects
    if(document.getElementById("cp_reviewer_deliverables_decline_btn")){
        const cp_reviewer_deliverables_decline_btn = document.getElementById("cp_reviewer_deliverables_decline_btn");
        // const clientDeliverablesFromReviewerModal = new bootstrap.Modal(document.getElementById('clientDeliverablesFromReviewer'), {
        //     keyboard: false
        // });
        cp_reviewer_deliverables_decline_btn.addEventListener("click",function(){
            Swal.fire({
                title: 'Decline Successfully',
                icon: 'success',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton:true,
                timer: 5000,
                timerProgressBar: true,
                backdrop:false,
                customClass: {
                    popup: 'no-blur-popup'
                }
            });
            clientDeliverablesFromReviewerModal.hide();
        });
    }

    // Development Deliverables
    if(document.querySelector('[data-bs-target="#np_development_deliverables_modal"]')){
        const np_development_deliverables_icon_btn = document.querySelector('[data-bs-target="#np_development_deliverables_modal"]');
        const np_development_client_project_field = document.querySelector("#np_development_client_project_id");
        // data-client-project-id
        np_development_deliverables_icon_btn.addEventListener("click",function(){
            let client_project_id = np_development_deliverables_icon_btn.getAttribute("data-client-project-id");
            np_development_client_project_field.setAttribute("value",client_project_id);
        });
    }

    // Project Type change based on tabs - start
   function updateCardValuesBasedOnTab() {
        // Get all the tab systems on the page
        const tabSystems = document.querySelectorAll(".tab_system");

        tabSystems.forEach(tabSystem => {
            // Add event listeners to each tab link
            const tabs = tabSystem.querySelectorAll(".nav-link");
            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    let projectType = "";

                    if(tab.classList.contains("active")){
                    const tabId = tab.getAttribute("href").substring(1);
                    const tabPane = document.querySelector(`#${tabId}`);
                    if(tab.classList.contains("developerTabScreen")){
                        projectType = "development";
                    }
                    else if(tab.classList.contains("reviewerTabScreen")){
                        projectType = "review";
                    }
                    else if(tab.classList.contains("hosterTabScreen")){
                        projectType = "hosting";
                    }
                    // console.log(tabPane);
                    if(tabPane){
                        const cards = tabPane.querySelectorAll(".card");
                        cards.forEach(card => {
                            const projectTypeInput = card.querySelector("input[name='project_type']");
                            if (projectTypeInput) {
                                projectTypeInput.setAttribute("value",projectType);  // Set the value dynamically
                            }
                        });
                    }
                    }
                });
            });
        });
    }
    // // Call the function to initialize the logic
    // document.addEventListener("DOMContentLoaded", () => {
    //     // Call the function when the page has finished loading
        updateCardValuesBasedOnTab();
    // });
    
    // Project Type change based on tabs - end
});
