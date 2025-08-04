
$(document).ready(function() {
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
    let steps = document.querySelectorAll(".step-container");
    let stepsCount = steps.length;

    let onboardingAllSlideTitlesForClient = {
        1 : "Join as a client or freelancer.",
        2 : "Let's fill some basic sign up details.",
        3 : "Great! Now, let's move on to some basic information.",
        4 : "Now, let's talk about your professional background.",
        5 : "Next, let's update your address details.",
        6 : "Almost done! Let's add your social media links.",
    };

    let onboardingAllSlideTitlesForFreelancer = {
        1 : "Join as a client or freelancer.",
        2 : "Choose Your Freelancer Role.",
        3 : "Let's fill some basic sign up details.",
        4 : "Great! Now, let's move on to some basic information.",
        5 : "Now, let's talk about your professional background.",
        6 : "Next, let's update your address details.",
        7 : "Almost done! Let's add your social media links.",
    };

    // Function to update slide titles and steps count based on freelancer checkbox
    function updateSlidesForFreelancer() {
        if (freelancerCheckBox.checked) {
            console.log(steps.length);
            freelancerRoleSlide.classList.remove("d-none");
            freelancerRoleSlide.firstElementChild.classList.add("step-container");
            stepsCount = steps.length + 1; // Adding the freelancer slide
            onboardingAllSlideTitlesForClient = onboardingAllSlideTitlesForFreelancer;
        } else {
            freelancerRoleSlide.classList.add("d-none");
            freelancerRoleSlide.firstElementChild.classList.remove("step-container");
            stepsCount = steps.length; // Reverting back to client steps
            onboardingAllSlideTitlesForClient = {
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
            slider_count += 1;
            formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
            onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
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
            onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
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

    // Image Upload 
    const imageInput = document.getElementById('profileImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const removeImgBtn = document.getElementById('remove-img-btn');

    // When user uploads an image
    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                removeImgBtn.classList.remove("d-none");
                // removeImgBtn.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    }); 

    // When user clicks on the close button, reset the image to the dummy image
    removeImgBtn.addEventListener('click', function() {
        previewImage.src = 'assets/dummy-profile.jpg';  // Set dummy image back
        imageInput.value = '';  // Clear the input file
        removeImgBtn.classList.add("d-none");
        // removeImgBtn.style.display = 'none';  
    });
});










// my updated js -----------------------------------------------------------------------------------------
$(document).ready(function() {
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
   let steps = document.querySelectorAll(".step-container");
   let stepsCount = steps.length;

   let onboardingAllSlideTitlesForClient = {
       1 : "Join as a client or freelancer.",
       2 : "Let's fill some basic sign up details.",
       3 : "Great! Now, let's move on to some basic information.",
       4 : "Now, let's talk about your professional background.",
       5 : "Next, let's update your address details.",
       6 : "Almost done! Let's add your social media links.",
   };

   let onboardingAllSlideTitlesForFreelancer = {
       1 : "Join as a client or freelancer.",
       2 : "Choose Your Freelancer Role.",
       3 : "Let's fill some basic sign up details.",
       4 : "Great! Now, let's move on to some basic information.",
       5 : "Now, let's talk about your professional background.",
       6 : "Next, let's update your address details.",
       7 : "Almost done! Let's add your social media links.",
   };

   // Function to update slide titles and steps count based on freelancer checkbox
   function updateSlidesForFreelancer() {
       if (freelancerCheckBox.checked) {
           freelancerRoleSlide.classList.remove("d-none");
           freelancerRoleSlide.firstElementChild.classList.add("step-container");
           stepsCount = steps.length + 1; // Adding the freelancer slide
           onboardingAllSlideTitlesForClient = onboardingAllSlideTitlesForFreelancer;
       } else {
           freelancerRoleSlide.classList.add("d-none");
           freelancerRoleSlide.firstElementChild.classList.remove("step-container");
           stepsCount = steps.length; // Reverting back to client steps
           onboardingAllSlideTitlesForClient = {
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
       if (slider_count < (stepsCount - 1)) {
           slider_count += 1;
           formWindow.style.transform = `translateX(-${slide.offsetWidth * slider_count}px)`;
           onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
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
           onboardingHeader.innerHTML = onboardingAllSlideTitlesForClient[slider_count + 1];
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

   // Image Upload 
   const imageInput = document.getElementById('profileImage');
   const imagePreview = document.getElementById('imagePreview');
   const previewImage = document.getElementById('previewImage');
   const removeImgBtn = document.getElementById('remove-img-btn');

   // When user uploads an image
   imageInput.addEventListener('change', function(event) {
       const file = event.target.files[0];

       if (file) {
           const reader = new FileReader();
           reader.onload = function(e) {
               previewImage.src = e.target.result;
               removeImgBtn.classList.remove("d-none");
               // removeImgBtn.style.display = 'block';
           }
           reader.readAsDataURL(file);
       }
   }); 

   // When user clicks on the close button, reset the image to the dummy image
   removeImgBtn.addEventListener('click', function() {
       previewImage.src = 'assets/dummy-profile.jpg';  // Set dummy image back
       imageInput.value = '';  // Clear the input file
       removeImgBtn.classList.add("d-none");
       // removeImgBtn.style.display = 'none';  
   });
});