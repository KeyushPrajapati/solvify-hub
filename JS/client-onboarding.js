$(document).ready(function() {

    // Do not submit form on enter
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
    });

    let slider_count = 0;
    const nextBtn = document.querySelector("#btn_next");
    const prevBtn = document.querySelector("#btn_prev");
    const formWindow = document.querySelector("#formWindow");
    const slide = document.querySelector("#slide");
    const progressLine = document.querySelector("#progress-line");
    const stepIndicator = document.querySelector("#step-indicator");
    const onboardingForm = $("#onboarding-form");
    const submitBtn = document.querySelector("#btn_submit");
    const onboardingHeader = document.querySelector("#onboarding-header");
    const freelancerRoleSlide = document.querySelector("#freelancer-role-slide");
    const freelancerCheckBox = document.querySelector("#freelancer_checkbox");
    const clientCheckBox = document.querySelector("#client_checkbox");
    const hostingServicesInputField = document.querySelector("#hostingServicesInputField");
    const developer_checkbox = document.querySelector("#developer_checkbox");
    const reviewer_checkbox = document.querySelector("#reviewer_checkbox");
    const hoster_checkbox = document.querySelector("#hoster_checkbox");
    const dev_working_exp_step = document.querySelector("#dev_working_exp");
    const hoster_working_exp_step = document.querySelector("#hoster_working_exp");
    const review_working_exp_step = document.querySelector("#review_working_exp");
    let steps = document.querySelectorAll(".step-container");
    let stepsCount = steps.length;

    // Default titles set for client
    let onboardingAllSlideTitles = {
        1 : "Join as a client or freelancer.",
        2 : "Great! Now, let's move on to some basic information.",
        3 : "Now, let's talk about your professional background.",
        4 : "Next, let's update your address details.",
        5 : "Almost done! Let's add your social media links.",
    };

    let onboardingAllSlideTitlesForFreelancer = {
        1 : "Join as a client or freelancer.",
        2 : "Choose Your Freelancer Role.",
        3 : "Great! Now, let's move on to some basic information.",
        4 : "Now, let's talk about your professional background.",
        5 : "Next, let's update your address details.",
        6 : "Almost done! Let's add your social media links.",
    };

    let onboardingAllSlideTitlesWorkExp = {
        1 : "Join as a client or freelancer.",
        2 : "Choose Your Freelancer Role.",
        3 : "Great! Now, let's move on to some basic information.",
        4 : "Now, let's talk about your professional background.",
        5 : "let's Fill your past experience.",
        6 : "Next, let's update your address details.",
        7 : "Almost done! Let's add your social media links.",
    };

    

    function updateSlideFreelancerRoleWise(){
        if(developer_checkbox.checked){
            // remove hoster work exp if added
            hoster_working_exp_step.firstElementChild.classList.remove("step-container");
            hoster_working_exp_step.classList.add("d-none");
            // remove reviewer work exp if added
            review_working_exp_step.firstElementChild.classList.remove("step-container");
            review_working_exp_step.classList.add("d-none");
            // Show dev work exp slide
            dev_working_exp_step.classList.remove("d-none");
            dev_working_exp_step.firstElementChild.classList.add("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length;
            onboardingAllSlideTitles = onboardingAllSlideTitlesWorkExp;
            //Remove Hosting Service field visible
            hostingServicesInputField.classList.add("d-none");
        }else if(hoster_checkbox.checked){
            // remove dev work exp if added
            dev_working_exp_step.firstElementChild.classList.remove("step-container");
            dev_working_exp_step.classList.add("d-none");
            // remove reviewer work exp if added
            review_working_exp_step.firstElementChild.classList.remove("step-container");
            review_working_exp_step.classList.add("d-none");
            // show hoster work exp slide
            hoster_working_exp_step.classList.remove("d-none");
            hoster_working_exp_step.firstElementChild.classList.add("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length;
            onboardingAllSlideTitles = onboardingAllSlideTitlesWorkExp;
            // Hosting Service field visible
            hostingServicesInputField.classList.remove("d-none");

        }else if(reviewer_checkbox.checked){
            // remove dev work exp if added
            dev_working_exp_step.firstElementChild.classList.remove("step-container");
            dev_working_exp_step.classList.add("d-none");
            // remove hoster work exp if added
            hoster_working_exp_step.firstElementChild.classList.remove("step-container");
            hoster_working_exp_step.classList.add("d-none");
            // show reviewer work exp slide
            review_working_exp_step.classList.remove("d-none");
            review_working_exp_step.firstElementChild.classList.add("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length;
            onboardingAllSlideTitles = onboardingAllSlideTitlesWorkExp;
            //Remove Hosting Service field visible
            hostingServicesInputField.classList.add("d-none");
        }else{
            // hide dev work exp slide
            dev_working_exp_step.firstElementChild.classList.remove("step-container");
            dev_working_exp_step.classList.add("d-none");
            // hide hoster work exp slide
            hoster_working_exp_step.firstElementChild.classList.remove("step-container");
            hoster_working_exp_step.classList.add("d-none");
            // remove reviewer work exp if added
            review_working_exp_step.firstElementChild.classList.remove("step-container");
            review_working_exp_step.classList.add("d-none");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length;
            onboardingAllSlideTitles = {
                1 : "Join as a client or freelancer.",
                2 : "Let's fill some basic sign up details.",
                3 : "Great! Now, let's move on to some basic information.",
                4 : "Now, let's talk about your professional background.",
                5 : "Next, let's update your address details.",
                6 : "Almost done! Let's add your social media links.",
            };
            //Remove Hosting Service field visible
            hostingServicesInputField.classList.add("d-none");
        }
        updateProgressLine(slider_count);
        updateStepIndicator(slider_count);
        updateActiveStep(slider_count)
    }

    // Function to update slide titles and steps count based on freelancer checkbox
    function updateSlidesForFreelancer() {
        if (freelancerCheckBox.checked) {
            freelancerRoleSlide.firstElementChild.classList.add("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length; // Adding the freelancer slide
            onboardingAllSlideTitles = onboardingAllSlideTitlesForFreelancer;
            
        } else {
            freelancerRoleSlide.classList.add("d-none");
            freelancerRoleSlide.firstElementChild.classList.remove("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length; // Reverting back to client steps
            onboardingAllSlideTitles = {
                1 : "Join as a client or freelancer.",
                2 : "Let's fill some basic sign up details.",
                3 : "Great! Now, let's move on to some basic information.",
                4 : "Now, let's talk about your professional background.",
                5 : "Next, let's update your address details.",
                6 : "Almost done! Let's add your social media links.",
            };
        }
        updateProgressLine(slider_count);
        updateStepIndicator(slider_count);
    }

    function updateSlidesForClient() {
        if (clientCheckBox.checked) {
            if(!freelancerRoleSlide.classList.contains("d-none")){
                freelancerRoleSlide.classList.add("d-none");
            }
            if(!hostingServicesInputField.classList.contains("d-none")){
                hostingServicesInputField.classList.add("d-none");
            }
            freelancerRoleSlide.firstElementChild.classList.remove("step-container");
            steps = document.querySelectorAll(".step-container");
            stepsCount = steps.length; // Reverting back to client steps
            onboardingAllSlideTitles = {
                1 : "Join as a client or freelancer.",
                2 : "Let's fill some basic sign up details.",
                3 : "Great! Now, let's move on to some basic information.",
                4 : "Now, let's talk about your professional background.",
                5 : "Next, let's update your address details.",
                6 : "Almost done! Let's add your social media links.",
            };
        } 
        updateProgressLine(slider_count);
        updateStepIndicator(slider_count);
    }

    // Add an event listener to the freelancer checkbox to toggle slides dynamically
    freelancerCheckBox.addEventListener('change', updateSlidesForFreelancer);
    // Add an event listener to the client checkbox to toggle slides dynamically
    clientCheckBox.addEventListener('change', updateSlidesForClient);
    
    developer_checkbox.addEventListener('change', updateSlideFreelancerRoleWise);
    reviewer_checkbox.addEventListener('change', updateSlideFreelancerRoleWise);
    hoster_checkbox.addEventListener('change', updateSlideFreelancerRoleWise);

    // Function to update the width of the progress line based on the step
    function updateProgressLine(step) {
        const progressPercentage = ((step + 1) / stepsCount) * 100;
        progressLine.style.width = `${progressPercentage}%`;
    }

    // Function to update the step indicator
    function updateStepIndicator(step) {
        stepIndicator.innerHTML = `STEP ${step + 1}/${stepsCount}`;
    }

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

    // Move to the next step
    function nextStep() {
        if (slider_count < (stepsCount - 1) && onboardingForm.valid()) {
            if(freelancerCheckBox.checked){
                freelancerRoleSlide.classList.remove("d-none");
            }
            slider_count += 1;
            formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
            onboardingHeader.innerHTML = onboardingAllSlideTitles[slider_count + 1];
            updateProgressLine(slider_count);
            updateStepIndicator(slider_count);
            updateActiveStep(slider_count);
        }
        checkWForNext(slider_count);
        checkWForPrev(slider_count);
    }

    // Move to the previous step
    function prevStep() {
        if (slider_count > 0) {
            slider_count -= 1;
            formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
            onboardingHeader.innerHTML = onboardingAllSlideTitles[slider_count + 1];
            updateProgressLine(slider_count);
            updateStepIndicator(slider_count);
            updateActiveStep(slider_count);
        }
        checkWForNext(slider_count);
        checkWForPrev(slider_count);
    }

    nextBtn.addEventListener('click', () => nextStep());
    prevBtn.addEventListener('click', () => prevStep());

    // Initial setup
    updateProgressLine(slider_count);
    updateStepIndicator(slider_count);
    updateActiveStep(slider_count);
    checkWForPrev(slider_count);
    checkWForNext(slider_count);

    // *** Image Upload ***
    // show Image before submit the form. (function written at common.js)
    // setupImagePreview parameters : inputId, previewImageId, removeButtonId, dummyImageSrc 
    setupImagePreview('profileImage','previewImage','remove-img-btn','assets/dummy-profile.jpg');

    
    if(document.querySelector("#profileImage")){
        const profileImageField = document.querySelector("#profileImage");
        profileImageField.addEventListener("input",function(){
            $("#profileImage").valid();
        });
    }
    if(document.querySelector("#dateOfBirth")){
        const dateOfBirthField = document.querySelector("#dateOfBirth");
        dateOfBirthField.addEventListener("input",function(){
            $("#dateOfBirth").valid();
        });
    }



    function getValuesInString(dataArray) {
        // Check if dataArray is an array and contains objects
        if (Array.isArray(dataArray) && dataArray.every(item => typeof item === "object" && item !== null)) {
            // Extract 'value' from each object and join into a string
            return dataArray.map(item => (item.value).toLowerCase()).join(",");
        }
        return ""; // Return empty string if it's not a valid array of objects
    }
   
    $(document).ready(function () {

        const other_services = document.getElementById("other_services");

        const new_service_field_btn = document.getElementById("new_service_field_btn");

        $.validator.addMethod("commaSeparatedWords", function(value, element) {

            // Only allow alphabets separated by commas. No spaces or symbols.

            return this.optional(element) || /^([a-zA-Z]+)(,[a-zA-Z]+)*$/.test(value);

        }, "Please enter only comma-separated words (no spaces or symbols).");

        // Disable the field if "other" is present, else enable it

        new_service_field_btn.addEventListener("click",function(){

            other_services.parentElement.classList.remove("d-none");

            new_service_field_btn.disabled = true;

            new_service_field_btn.style.opacity = "0.6";

        });

        // Skills - Select Field - NOTE some function are in common.js related to multi-select

        new MultiSelectTag('user_skills',{

            placeholder: 'Search',

            tagColor: {

                textColor: 'var(--bs-primary-100)',

                borderColor: 'var(--bs-primary-100)',

                bgColor: 'var(--bs-primary-800)',

            },

            onChange: function(values) {

                const hiddenTechInput = document.getElementById("user_skills_hidden_input");

                hiddenTechInput.setAttribute("value",getValuesInString(values)); // getValuesInString function is in common.js 

                // validateField("#user_skills_hidden_input", /.*/, "Skills  are required.");

                $("#user_skills_hidden_input").valid();

            }

        });

        // Hosting Servieces - Select Field

        new MultiSelectTag('hosting_services',{

            placeholder: 'Search',

            tagColor: {

                textColor: 'var(--bs-primary-100)',

                borderColor: 'var(--bs-primary-100)',   

                bgColor: 'var(--bs-primary-800)',

            },

            onChange: function(values) {

                const hiddenTechInput = document.getElementById("hosting_services_hidden_input");

                hiddenTechInput.setAttribute("value",getValuesInString(values));

                // validateField("#hosting_services_hidden_input", /.*/, "Hosting Services are required.");

                $("#hosting_services_hidden_input").valid();

            }

        });

    }); 
    













    

    // const hosting_services_field = document.getElementById("hosting_services");
    // hosting_services_field.addEventListener("change",function(val){
    //     console.log(hosting_services_field.value)
    // })
    // // Developer add new project start
    // const dev_add_new_project_btn = document.getElementById("dev_add_new_project");
    // const dev_project_count = document.getElementById("dev_project_count");
    // const more_projects = document.getElementById("more_projects");
    // const total_project = document.getElementById("total_project");
    // var project_count = dev_project_count.value;
    // let count = 1;

    // function techMultiSelect(){
    //     // For all Technology select Field which are inside the more_projects
    //     const techSelectCount = more_projects.querySelectorAll('[id^="projectTechSelect_"]').length;
    //     more_projects.querySelectorAll('[id^="projectTechSelect_"]').forEach((selectField) => {
    //         const fieldIdNo = selectField.id.split('_')[1];
    //         let selectID = "#projectTechSelect_"+fieldIdNo;
    //         let selectOptionID = "#projectTechOptions_"+fieldIdNo;
    //         let selectBadgeContainerID = "#projectTechBadgeContainer_"+fieldIdNo;
    //         let inputID = "#projectTechInput_"+fieldIdNo;
    //         new MultiSelectDropdown(selectID, selectOptionID, selectBadgeContainerID, inputID);
    //     }); 
    // }

    // // New Project Add
    // dev_add_new_project_btn.addEventListener("click",function(event){
    //     event.preventDefault();
    //     const allProjectCount = document.querySelectorAll(".remove-project").length;
    //     project_count = (allProjectCount + 1); // get All project acount.
    //     project_count++; // increase final count value.
    //     count++; // increase final count value.
    //     dev_project_count.setAttribute("value",project_count);
    //     total_project.innerHTML = project_count;
    //     const newProjectForm = `
    //         <div class=" border border-primary-600 border-radius-10 w-100 mb-3">
    //         <div class="d-flex bg-primary-800 border-radius-10">
    //             <button class="bg-transparent border-radius-10 border-0 w-100 p-3 text-start text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#project_collapse_${count}" aria-expanded="true" aria-controls="project_collapse_${count}">
    //                 Project ${count}
    //             </button>
    //             <button class="p-3 text-danger d-flex justify-content-center align-items-center bg-transparent border-0 fw-500">
    //                 <span class="ms-1 fw-bold fs-6 remove-project">Remove</span>  
    //             </button>
    //         </div>
    //         <div class="collapse show" id="project_collapse_${count}">
    //             <div class="card card-body border-0 border-top border-dark-500">
    //                 <div class="row m-0">
    //                     <div class="col-12 col-lg-6 ps-0 pe-0 pe-lg-3">
    //                         <div class=" my-2 w-100">
    //                             <label for="dev_project_name_${count}" class="text-primary-100 fs-6 fw-bold">Project Name *</label>
    //                             <input class="form-control w-100 " type="text" name="project_name[]" maxlength="40" id="dev_project_name_${count}" placeholder="Project Name">
    //                         </div>
    //                         <div class=" my-2">
    //                             <label class="text-primary-100 fs-6 fw-bold">Technologies *</label>
    //                             <div class="custom-select-container w-100">
    //                                 <div class="custom-select text-dark-400" id="projectTechSelect_${count}">Tech used in this project</div>
    //                                 <ul class="select-options" id="projectTechOptions_${count}">
    //                                     <li data-value="HTML">HTML</li>
    //                                     <li data-value="CSS">CSS</li>
    //                                     <li data-value="JavaScript">JavaScript</li>
    //                                     <li data-value="Djan">Django</li>
    //                                 </ul>
    //                             </div>
    //                             <div id="projectTechBadgeContainer_${count}" class="badge-container d-flex"></div>
    //                             <input type="text" validation="true" class="hidden-select-field" name="technology[]" id="projectTechInput_${count}" required>
    //                         </div>
    //                         <div class=" my-2 ">
    //                             <label for="dev_project_demo_video_link_${count}" class="text-primary-100 fs-6 fw-bold">Project Demo Video Link</label>
    //                             <input class="form-control w-100" type="text" name="video_link[]" maxlength="200" id="dev_project_demo_video_link_${count}" placeholder="Demo Link">
    //                         </div>
    //                     </div>
    //                     <div class="col-12 col-lg-6 pe-0 ps-0 ps-lg-3">
    //                         <div class=" my-2 ">
    //                             <label for="dev_project_description_${count}" class="text-primary-100 fs-6 fw-bold">Description *</label>
    //                             <textarea class="form-control w-100" name="description[]" maxlength="500" id="dev_project_description_${count}" placeholder="Describe your project and share your experiences while working on it." rows="7"></textarea>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>`;
    //         more_projects.innerHTML += newProjectForm;
    //         techMultiSelect();
    // });

    // // Remove New Projects
    // more_projects.addEventListener("click",(event)=>{
    //     event.preventDefault();
    //     if(event.target.classList.contains('remove-project')){
    //         const projectItem = event.target.parentElement.parentElement.parentElement;
    //         projectItem.remove();
    //         techMultiSelect();
    //         const allProjectCount = document.querySelectorAll(".remove-project").length;
    //         project_count = (allProjectCount + 1);
    //         dev_project_count.setAttribute("value",project_count);
    //         total_project.innerHTML = project_count;
    //     }
    // });
    // // Developer add new project end

    // // Hoster add new project start
    // const hoster_add_new_project_btn = document.getElementById("hoster_add_new_project");
    // const hoster_project_count = document.getElementById("hoster_project_count");
    // const hoster_more_projects = document.getElementById("hoster_more_projects");
    // const hoster_total_project = document.getElementById("hoster_total_project");
    // var project_count_for_hoster = hoster_project_count.value;
    // let host_count = 1;

    // function hostTechMultiSelect(){
    //     // For all Technology select Field which are inside the more_projects
    //     const hostTechSelectCount = hoster_more_projects.querySelectorAll('[id^="hostProjectTechSelect_"]').length;
    //     hoster_more_projects.querySelectorAll('[id^="hostProjectTechSelect_"]').forEach((selectField) => {
    //         const fieldIdNo = selectField.id.split('_')[1];
    //         let selectID = "#hostProjectTechSelect_"+fieldIdNo;
    //         let selectOptionID = "#hostProjectTechOptions_"+fieldIdNo;
    //         let selectBadgeContainerID = "#hostProjectTechBadgeContainer_"+fieldIdNo;
    //         let inputID = "#hostProjectTechInput_"+fieldIdNo;
    //         new MultiSelectDropdown(selectID, selectOptionID, selectBadgeContainerID, inputID);
    //     }); 
    // }

    // // New Project Add
    // hoster_add_new_project_btn.addEventListener("click",function(event){
    //     event.preventDefault();
    //     const allHostProjectCount = document.querySelectorAll(".remove-project").length;
    //     project_count_for_hoster = (allHostProjectCount + 1); // get All project acount.
    //     project_count_for_hoster++; // increase final count value.
    //     host_count++; // increase final count value.
    //     hoster_project_count.setAttribute("value",project_count_for_hoster);
    //     hoster_total_project.innerHTML = project_count_for_hoster;
    //     const newProjectForm = `
    //         <div class=" border border-primary-600 border-radius-10 w-100 mb-3">
    //         <div class="d-flex bg-primary-800 border-radius-10">
    //             <button class="bg-transparent border-radius-10 border-0 w-100 p-3 text-start text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#hoster_project_collapse_${host_count}" aria-expanded="true" aria-controls="hoster_project_collapse_${host_count}">
    //                 Project ${host_count}
    //             </button>
    //             <button class="p-3 text-danger d-flex justify-content-center align-items-center bg-transparent border-0 fw-500">
    //                 <span class="ms-1 fw-bold fs-6 remove-project">Remove</span>  
    //             </button>
    //         </div>
    //         <div class="collapse show" id="hoster_project_collapse_${host_count}">
    //             <div class="card card-body border-0 border-top border-dark-500">
    //                 <div class="row m-0">
    //                     <div class="col-12 col-lg-6 ps-0 pe-0 pe-lg-3">
    //                         <div class=" my-2 w-100">
    //                             <label for="host_project_name_${host_count}" class="text-primary-100 fs-6 fw-bold">Project Name *</label>
    //                             <input class="form-control w-100 " type="text" name="project_name[]" maxlength="40" id="host_project_name_${host_count}" placeholder="Project Name">
    //                         </div>
    //                         <div class=" my-2">
    //                             <label class="text-primary-100 fs-6 fw-bold">Technologies *</label>
    //                             <div class="custom-select-container w-100">
    //                                 <div class="custom-select text-dark-400" id="hostProjectTechSelect_${host_count}">Tech used in this project</div>
    //                                 <ul class="select-options" id="hostProjectTechOptions_${host_count}">
    //                                     <li data-value="HTML">HTML</li>
    //                                     <li data-value="CSS">CSS</li>
    //                                     <li data-value="JavaScript">JavaScript</li>
    //                                     <li data-value="Djan">Django</li>
    //                                 </ul>
    //                             </div>
    //                             <div id="hostProjectTechBadgeContainer_${host_count}" class="badge-container d-flex"></div>
    //                             <input type="text" validation="true" class="hidden-select-field" name="technology[]" id="hostProjectTechInput_${host_count}" required>
    //                         </div>
    //                         <div class=" my-2 ">
    //                             <label for="host_project_demo_video_link_${host_count}" class="text-primary-100 fs-6 fw-bold">Project Demo Video Link</label>
    //                             <input class="form-control w-100" type="text" name="video_link[]" maxlength="200" id="host_project_demo_video_link_${host_count}" placeholder="Demo Link">
    //                         </div>
    //                     </div>
    //                     <div class="col-12 col-lg-6 pe-0 ps-0 ps-lg-3">
    //                         <div class="my-2">
    //                             <label for="hosting_platform_${host_count}" class="text-primary-100 fs-6 fw-bold">Hosting services used in this project.</label>
    //                             <select name="hosting_platform" id="hosting_platform_${host_count}" class="form-control form-select">
    //                             <option value="" disabled selected>Select Platform</option>
    //                             <option value="aws">Amazon Web Services (AWS)</option>
    //                             <option value="azure">Microsoft Azure</option>
    //                             <option value="gcp">Google Cloud Platform (GCP)</option>
    //                             <option value="digitalocean">DigitalOcean</option>
    //                             <option value="linode">Linode</option>
    //                             <option value="vultr">Vultr</option>
    //                             <option value="heroku">Heroku</option>
    //                             <option value="netlify">Netlify</option>
    //                             <option value="vercel">Vercel</option>
    //                             <option value="bluehost">Bluehost</option>
    //                             <option value="siteground">SiteGround</option>
    //                             <option value="hostgator">HostGator</option>
    //                             <option value="dreamhost">DreamHost</option>
    //                             <option value="godaddy">GoDaddy</option>
    //                             <option value="cloudways">Cloudways</option>
    //                             <option value="kinsta">Kinsta</option>
    //                             <option value="wpengine">WP Engine</option>
    //                             <option value="namecheap">Namecheap</option>
    //                             <option value="a2hosting">A2 Hosting</option>
    //                             <option value="greengeeks">GreenGeeks</option>
    //                             <option value="ionos">IONOS</option>
    //                             <option value="interserver">InterServer</option>
    //                             </select>
    //                         </div>
    //                         <div class=" my-2 ">
    //                             <label for="host_project_description_${host_count}" class="text-primary-100 fs-6 fw-bold">Description *</label>
    //                             <textarea class="form-control w-100" name="description[]" maxlength="500" id="host_project_description_${host_count}" placeholder="Describe your project and share your experiences while working on it." rows="7"></textarea>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>`;
    //         hoster_more_projects.innerHTML += newProjectForm;
    //         hostTechMultiSelect();
    // });

    // // Remove New Projects
    // hoster_more_projects.addEventListener("click",(event)=>{
    //     event.preventDefault();
    //     if(event.target.classList.contains('remove-project')){
    //         const projectItem = event.target.parentElement.parentElement.parentElement;
    //         projectItem.remove();
    //         hostTechMultiSelect();
    //         const allHostProjectCount = document.querySelectorAll(".remove-project").length;
    //         project_count_for_hoster = (allHostProjectCount + 1);
    //         hoster_project_count.setAttribute("value",project_count_for_hoster);
    //         hoster_total_project.innerHTML = project_count_for_hoster;
    //     }
    // });
    // // Hoster add new project end

    // // Reviewer add new project start
    // const review_add_new_project_btn = document.getElementById("review_add_new_project");
    // const review_project_count = document.getElementById("review_project_count");
    // const review_more_projects = document.getElementById("review_more_projects");
    // const review_total_project = document.getElementById("review_total_project");
    // var project_count_for_review = review_project_count.value;
    // let review_count = 1;

    // function reviewTechMultiSelect(){
    //     // For all Technology select Field which are inside the more_projects
    //     const reviewTechSelectCount = review_more_projects.querySelectorAll('[id^="reviewProjectTechSelect_"]').length;
    //     review_more_projects.querySelectorAll('[id^="reviewProjectTechSelect_"]').forEach((selectField) => {
    //         const fieldIdNo = selectField.id.split('_')[1];
    //         let selectID = "#reviewProjectTechSelect_"+fieldIdNo;
    //         let selectOptionID = "#reviewProjectTechOptions_"+fieldIdNo;
    //         let selectBadgeContainerID = "#reviewProjectTechBadgeContainer_"+fieldIdNo;
    //         let inputID = "#reviewProjectTechInput_"+fieldIdNo;
    //         new MultiSelectDropdown(selectID, selectOptionID, selectBadgeContainerID, inputID);
    //     }); 
    // }

    // // New Project Add
    // review_add_new_project_btn.addEventListener("click",function(event){
    //     event.preventDefault();
    //     const allReviewProjectCount = document.querySelectorAll(".remove-project").length;
    //     project_count_for_review = (allReviewProjectCount + 1); // get All project acount.
    //     project_count_for_review++; // increase final count value.
    //     review_count++; // increase final count value.
    //     review_project_count.setAttribute("value",project_count_for_review);
    //     review_total_project.innerHTML = project_count_for_review;
    //     const newProjectForm = `
    //         <div class=" border border-primary-600 border-radius-10 w-100 mb-3">
    //         <div class="d-flex bg-primary-800 border-radius-10">
    //             <button class="bg-transparent border-radius-10 border-0 w-100 p-3 text-start text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#review_project_collapse_${review_count}" aria-expanded="true" aria-controls="review_project_collapse_${review_count}">
    //                 Project ${review_count}
    //             </button>
    //             <button class="p-3 text-danger d-flex justify-content-center align-items-center bg-transparent border-0 fw-500">
    //                 <span class="ms-1 fw-bold fs-6 remove-project">Remove</span>  
    //             </button>
    //         </div>
    //         <div class="collapse show" id="review_project_collapse_${review_count}">
    //             <div class="card card-body border-0 border-top border-dark-500">
    //                 <div class="row m-0">
    //                     <div class="col-12 col-lg-6 ps-0 pe-0 pe-lg-3">
    //                         <div class=" my-2 w-100">
    //                             <label for="review_project_name_${review_count}" class="text-primary-100 fs-6 fw-bold">Project Name </label>
    //                             <input class="form-control w-100 " type="text" name="project_name[]" maxlength="40" id="review_project_name_${review_count}" placeholder="Project Name">
    //                         </div>
    //                         <div class=" my-2">
    //                             <label class="text-primary-100 fs-6 fw-bold">Technologies </label>
    //                             <div class="custom-select-container w-100">
    //                                 <div class="custom-select text-dark-400" id="reviewProjectTechSelect_${review_count}">Tech used in this project</div>
    //                                 <ul class="select-options" id="reviewProjectTechOptions_${review_count}">
    //                                     <li data-value="HTML">HTML</li>
    //                                     <li data-value="CSS">CSS</li>
    //                                     <li data-value="JavaScript">JavaScript</li>
    //                                     <li data-value="Djan">Django</li>
    //                                 </ul>
    //                             </div>
    //                             <div id="reviewProjectTechBadgeContainer_${review_count}" class="badge-container d-flex"></div>
    //                             <input type="text" validation="true" class="hidden-select-field" name="technology[]" id="reviewProjectTechInput_${review_count}" required>
    //                         </div>
    //                         <div class=" my-2 ">
    //                             <label for="review_project_demo_video_link_${review_count}" class="text-primary-100 fs-6 fw-bold">Project Demo Video Link</label>
    //                             <input class="form-control w-100" type="text" name="video_link[]" maxlength="200" id="review_project_demo_video_link_${review_count}" placeholder="Demo Link">
    //                         </div>
    //                     </div>
    //                     <div class="col-12 col-lg-6 pe-0 ps-0 ps-lg-3">
    //                         <div class=" my-2 ">
    //                             <label for="review_project_description_${review_count}" class="text-primary-100 fs-6 fw-bold">Description *</label>
    //                             <textarea class="form-control w-100" name="description[]" maxlength="500" id="review_project_description_${review_count}" placeholder="Describe your project and share your experiences while working on it." rows="7"></textarea>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>`;
    //         review_more_projects.innerHTML += newProjectForm;
    //         reviewTechMultiSelect();
    // });

    // // Remove New Projects
    // review_more_projects.addEventListener("click",(event)=>{
    //     event.preventDefault();
    //     if(event.target.classList.contains('remove-project')){
    //         const projectItem = event.target.parentElement.parentElement.parentElement;
    //         projectItem.remove();
    //         reviewTechMultiSelect();
    //         const allReviewProjectCount = document.querySelectorAll(".remove-project").length;
    //         project_count_for_review = (allReviewProjectCount + 1);
    //         review_project_count.setAttribute("value",project_count_for_review);
    //         review_total_project.innerHTML = project_count_for_review;
    //     }
    // });
    // Reviewer add new project end
});










// OLD CODE %%%%%%%
// $(document).ready(function() {
//     let slider_count = 0;
//     const nextBtn = document.querySelector("#btn_next");
//     const prevBtn = document.querySelector("#btn_prev");
//     const formWindow = document.querySelector("#formWindow");
//     const slide = document.querySelector("#slide");
//     const steps = document.querySelectorAll(".step-container");
//     const progressLine = document.querySelector("#progress-line");
//     const stepIndicator = document.querySelector("#step-indicator");
//     const onboardingForm = $("#onboarding-form");
//     const submitBtn = document.querySelector("#btn_submit");
//     const onboardingHeader = document.querySelector("#onboarding-header");
//     const freelancerRoleSlide = document.querySelector("#freelancer-role-slide");
//     const freelancerCheckBox = document.querySelector("#freelancer_checkbox");
//     let stepsCount = steps.length;
//     // let stepsCount = formWindow.childElementCount;
//     let onboardingAllSlideTitlesForClient = {
//         1 : "Join as a client or freelancer.",
//         2 : "Let's fill some basic sign up details.",
//         3 : "Great! Now, let's move on to some basic information.",
//         4 : "Now, let's talk about your professional background.",
//         5 : "Next, let's update your address details.",
//         6 : "Almost done! Let's add your social media links.",
//     };
   

//     // Function to update the width of the progress line based on the step
//     function updateProgressLine(step) {
//         const progressPercentage = ((step + 1) / stepsCount) * 100;
//         progressLine.style.width = `${progressPercentage}%`;
//     }

//     // Function to update the step indicator
//     function updateStepIndicator(step) {
        
//         stepIndicator.innerHTML = `STEP ${step + 1}/${stepsCount}`; // Display step as 1-based index
//     }

//     // Function to update active and deactive classes for steps
//     function updateActiveStep(slider_count) {
//         steps.forEach((step, index) => {
//             if (index === slider_count) {
//                 step.classList.add("stepActive");
//                 step.classList.remove("stepDeactive");
//             } else {
//                 step.classList.remove("stepActive");
//                 step.classList.add("stepDeactive");
//             }
//         });
//     }

//     // Function to check and update previous button visibility
//     function checkWForPrev(slider_count) {
//         if (slider_count <= 0) { 
//             prevBtn.style.cssText = `opacity:0; transition:opacity 0.3s; cursor:initial;`;
//         } else { 
//             prevBtn.style.cssText = `opacity:1; transition:opacity 0.3s`;
//         } 
//     }

//     // Function to check and update next/submit button visibility
//     function checkWForNext(slider_count) {
//         if (slider_count === (stepsCount - 1)) {
//             nextBtn.setAttribute("hidden", "");
//             submitBtn.removeAttribute("hidden");
//         } else {
//             submitBtn.setAttribute("hidden", "");
//             nextBtn.removeAttribute("hidden");
//         }

//     }

//     // Move to the next step
//     function nextStep() {
//         if (slider_count < (stepsCount - 1) ) {
//                 slider_count += 1;
//                 formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
//                 onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
//                 updateProgressLine(slider_count);
//                 updateStepIndicator(slider_count);
//                 updateActiveStep(slider_count); // Update active and deactive steps
//         }
//         checkWForNext(slider_count);
//         checkWForPrev(slider_count);
//     }

//     // Move to the previous step
//     function prevStep() {
//         if (slider_count > 0) {
//             slider_count -= 1;
//             formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
//             onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
//             updateProgressLine(slider_count);
//             updateStepIndicator(slider_count);
//             updateActiveStep(slider_count); // Update active and deactive steps
//         }
//         checkWForNext(slider_count);
//         checkWForPrev(slider_count);
//     }

//     nextBtn.addEventListener('click', () => nextStep());
//     prevBtn.addEventListener('click', () => prevStep());

//     // Initial setup
//     updateProgressLine(slider_count);
//     updateStepIndicator(slider_count);
//     updateActiveStep(slider_count); // Set initial active/deactive state
//     checkWForPrev(slider_count);
//     checkWForNext(slider_count);

//     // Image Upload 
//     const imageInput = document.getElementById('profileImage');
//     const imagePreview = document.getElementById('imagePreview');
//     const previewImage = document.getElementById('previewImage');
//     const removeImgBtn = document.getElementById('remove-img-btn');

//     // When user uploads an image
//     imageInput.addEventListener('change', function(event) {
//         const file = event.target.files[0];

//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 previewImage.src = e.target.result;
//                 removeImgBtn.classList.remove("d-none");
//                 // removeImgBtn.style.display = 'block';
//             }
//             reader.readAsDataURL(file);
//         }
//     }); 

//     // When user clicks on the close button, reset the image to the dummy image
//     removeImgBtn.addEventListener('click', function() {
//         previewImage.src = 'assets/dummy-profile.jpg';  // Set dummy image back
//         imageInput.value = '';  // Clear the input file
//         removeImgBtn.classList.add("d-none");
//         // removeImgBtn.style.display = 'none';  
//     });
// });