function setupImagePreview(inputId, previewImageId, removeButtonId, dummyImageSrc) {
    const imageInput = document.getElementById(inputId);
    const previewImage = document.getElementById(previewImageId);
    const removeImgBtn = document.getElementById(removeButtonId);

    if (!imageInput || !previewImage || !removeImgBtn) {
        console.error('One or more required elements are missing. Please check the IDs provided.');
        return;
    }

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            
            if (fileExtension === 'pdf') {
                previewImage.src = 'assets/DummyPdf.png';
                removeImgBtn.classList.remove("d-none");
            } else {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    removeImgBtn.classList.remove("d-none");
                };
                reader.readAsDataURL(file);
            }
        }
    });

    removeImgBtn.addEventListener('click', function() {
        previewImage.src = dummyImageSrc;
        imageInput.value = '';
        removeImgBtn.classList.add("d-none");
    });
}

// Expose the function to the global scope
window.setupImagePreview = setupImagePreview;


const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
const bookmarkIcons = document.querySelectorAll(".bookmark-icon");
if (bookmarkButtons.length && bookmarkIcons.length) {
    bookmarkButtons.forEach((bookmarkBtn, index) => {
        const bookmarkIcon = bookmarkIcons[index]; // Assuming buttons and icons are paired by index
        bookmarkBtn.addEventListener("click", () => {
            bookmarkIcon.innerHTML = bookmarkIcon.innerHTML === "bookmark_border" ? "bookmark" : "bookmark_border";
        });
    });
}



// Freelancer JS
// Freelancer JS
// hoster Sweetalert JS
function showHosterComponents(){
    // Show the second card and hide the first card
    if(document.querySelector('.hoster-join') && document.querySelector('.hoster-board')){
        document.querySelectorAll('.hoster-board').forEach((hostBoard)=>{
            hostBoard.classList.remove('section-hidden');
        });
            document.querySelectorAll('.hoster-join').forEach((hostJoin)=>{
            hostJoin.classList.add('section-hidden');
        });
    }
}
if(document.querySelector(".join-hoster-btn")){

    document.querySelectorAll('.join-hoster-btn').forEach((hostJoinBtn)=>{
        hostJoinBtn.addEventListener('click', function() {
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you really want to join as a hoster?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Join',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have joined successfully as a hoster.',
                        icon: 'success'
                    }).then(() => {
                        showHosterComponents();
                    });
                }
            });
        });
    });
}

// Developer Sweetalert JS
function showDeveloperComponents(){
    // Show the second card and hide the first card
    if(document.querySelector('.developer-join') && document.querySelector('.developer-board')){
      document.querySelectorAll('.developer-board').forEach((devBoard)=>{
        devBoard.classList.remove('section-hidden');
      });
      document.querySelectorAll('.developer-join').forEach((devJoin)=>{
        devJoin.classList.add('section-hidden');
      });
      
    }
}

if(document.querySelector(".join-developer-btn")){

    document.querySelectorAll('.join-developer-btn').forEach((devJoinBtn)=>{devJoinBtn.addEventListener('click', function() {
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you really want to join as a developer?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Join',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have joined successfully as a developer.',
                        icon: 'success'
                    }).then(() => {
                        showDeveloperComponents();
                    });
                }
            });
        }); 
    });
}

// Reviwer Sweetalert JS
function showReviewerComponents(){
    // Show the second card and hide the first card
    if(document.querySelector('.reviewer-join') && document.querySelector('.reviewer-board')){
      // Show the second card and hide the first card
      document.querySelectorAll('.reviewer-board').forEach((reviewBoard)=>{
        reviewBoard.classList.remove('section-hidden');
      });
      document.querySelectorAll('.reviewer-join').forEach((reviewJoin)=>{
        reviewJoin.classList.add('section-hidden');
      });
    }
}

if(document.querySelector(".join-reviewer-btn")){

    document.querySelectorAll('.join-reviewer-btn').forEach((reviewJoinBtn)=>{reviewJoinBtn.addEventListener('click', function() {
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you really want to join as a reviewer?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Join',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have joined successfully as a reviewer.',
                        icon: 'success'
                    }).then(() => {
                        showReviewerComponents();
                    
                    });
                }
            });
        }); 
    });
}

// popover
document.addEventListener("DOMContentLoaded", function () {
    // Initialize all popovers on the page
    if(document.querySelectorAll('[data-bs-toggle="popover"]')){
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.forEach(function (popoverTriggerEl) {
          new bootstrap.Popover(popoverTriggerEl, {
            container: 'body', // Ensures the popover is appended to the body
            trigger: 'hover focus', // Triggers on hover and focus
            placement: 'auto', // Adjust the placement (top, bottom, left, right) as needed
            html: true, // Allows HTML content inside the popover
          });
        });
    }
  });
  
  // Initialize tooltips for all elements with a data-bs-toggle="tooltip" attribute
document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// withdraw js
if(document.getElementById("withdraw-btn")){
    const withdrawBtn = document.getElementById("withdraw-btn");
    const withdrawAmount = document.getElementById("withdraw-amount");
    withdrawBtn.addEventListener("click",function(){
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to withdraw ₹ ${withdrawAmount.value}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `₹ ${withdrawAmount.value}`,
                    text:'Your money will be withdrawn within 2-3 working days.',
                    icon: 'success'
                }).then(() => {
                    // code 
                });
            }
        });
    });
}

// Simple text message function.
// pass on 3 elements in simpleTextChat Function : chatBox , chatForm , chatInput 

function simpleTextChat(chatBox, chatForm , chatInput){
    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const chatMessage = chatInput.value.trim();
        if (chatMessage !== "") {
            // Create a container for the chat message
            const chatMessageElement = document.createElement("div");
            chatMessageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
            chatMessageElement.innerHTML = `
                <div class="">
                    <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                </div>
                <div class="ps-2 w-100">
                    <div class="text-dark-100 fw-bold">Tony Stark</div>
                    <div class="text-dark-400 fs-6">12min ago</div>
                    <div class="mt-1">
                        <div class="p-1 rounded">
                            <div class="text-dark-100">${chatMessage}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append the new message to the chat box
            chatBox.appendChild(chatMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
    
            // Reset file input and close modal
            chatInput.value = "";
        }
    });
}

function textAndImageChat(chatBox, chatForm, chatImageInput, chatDescription, ImageUploadModalId){
    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const file = chatImageInput.files[0];
        const description = chatDescription.value.trim();
        if (file) {
            const messageImage = `Image uploaded: ${file.name}`;
            const descriptionMessage = description ? `${description}` : "";
            const validTypes = [
                'image/jpeg',
                'image/png',
                'image/jpg',
            ]
            const modal = bootstrap.Modal.getInstance(ImageUploadModalId);
            
            if(validTypes.includes(file.type)) {
                // Create a container for the chat message
                const messageElement = document.createElement("div");
                messageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
                messageElement.innerHTML = `
                    <div class="">
                        <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                    </div>
                    <div class="ps-2 w-100">
                        <div class="text-dark-100 fw-bold">Tony Stark</div>
                        <div class="text-dark-400 fs-6">12min ago</div>
                        <div class="mt-1">
                            <div class="p-1 rounded">
                                <div class="bg-primary-800 text-primary fw-500 p-1 rounded">${messageImage}</div>
                                <div class="text-dark-100">${descriptionMessage}</div>
                            </div>
                        </div>
                    </div>
                `;
                
                // Append the new message to the chat box
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
        
                // Reset file input and close modal
                imageInput.value = "";
                descriptionInput.value = "";
                modal.hide();
            }
        }
    });
}

if(document.querySelector(".chat-messages-area")){
    document.querySelectorAll(".chat-messages-area").forEach((Element)=>{
        Element.scrollTop = Element.scrollHeight;
    });
}

// This function is used where skill or technologies fields are present. ---- start
// Function give technologies in the form of comma seperated string.
 function getValuesInString(dataArray) {
    // Check if dataArray is an array and contains objects
    if (Array.isArray(dataArray) && dataArray.every(item => typeof item === "object" && item !== null)) {
        // Extract 'value' from each object and join into a string
        return dataArray.map(item => (item.value).toLowerCase()).join(",");
    }
    return ""; // Return empty string if it's not a valid array of objects
}
// Function to show error message
function showError(fieldSelector, message) {
    // Remove any existing error message first
    $(fieldSelector).next(".error-message").remove();

    // Append new error message
    const errorMessage = `<div class="error-message" style="color: red;">${message}</div>`;
    $(fieldSelector).after(errorMessage);
}

// Function to remove error message
function removeError(fieldSelector) {
    $(fieldSelector).next(".error-message").remove();
}
// Function to validate individual field
function validateField(fieldSelector, regex, errorMessage) {
    const value = $(fieldSelector).val();
    if (!value || !regex.test(value)) {
        showError(fieldSelector, errorMessage);
    } else {
        removeError(fieldSelector);
    }
}
// This function is used where skill or technologies fields are present. ---- End