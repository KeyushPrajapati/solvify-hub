// show Image before submit the form. (function written at common.js)
// setupImagePreview parameters : inputId, previewImageId, removeButtonId, dummyImageSrc 
setupImagePreview('userDoc','documentPreviewImage','remove-doc-img-btn','assets/only-doc.png');
setupImagePreview('userDocFace','documentWithFacePreviewImage','remove-doc-face-img-btn','assets/doc-with-face.png');

const identityVerifyBtn = document.querySelector("#identity-verification-btn");

// Step form js
document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', () => {
        const targetSectionId = button.getAttribute('data-target');

        // Hide all sections
        document.querySelectorAll('section').forEach(section => section.classList.add('sectionONxOFF'));

        // Show the targeted section
        document.getElementById(targetSectionId).classList.remove('sectionONxOFF');
    });
});

// Back button functionality
document.querySelectorAll('.info-back-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Hide all sections except the main one
        document.querySelectorAll('section').forEach(section => section.classList.add('sectionONxOFF'));
        document.getElementById('all-details-verify').classList.remove('sectionONxOFF');
    });
});


// OTP JS
document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-input');
    const hiddenOtpInput = document.getElementById('hiddenOtp');

    // Initially enable only the first input
    otpInputs.forEach((input, index) => {
        input.disabled = index !== 0;
    });

    otpInputs.forEach((input, index, inputs) => {
        input.addEventListener('input', (e) => {
            if (/\D/.test(e.target.value)) {
                e.target.value = ''; // Remove non-digit characters
                return;
            }

            // Update the hidden input with the current OTP
            updateHiddenOtp(inputs);

            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].disabled = false;
                inputs[index + 1].focus(); // Move focus to next input
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (!e.target.value && index > 0) {
                    inputs[index - 1].focus();
                    inputs[index - 1].value = ''; // Clear previous input
                    inputs[index].disabled = true;
                }
            }
        });
    });

    // Function to update the hidden input field with the full OTP
    function updateHiddenOtp(inputs) {
        let val = Array.from(inputs).map(input => input.value).join('');
        hiddenOtpInput.setAttribute("value",val);
        if(hiddenOtp.value.length == 6){
            otp_error_message.innerHTML = "";
        }
        if(hiddenOtp.value != "" && hiddenOtp.value.length >= 1){
            otp_error_message.innerHTML = "";
        }
        if(hiddenOtp.value.length < 6 && hiddenOtp.value != ""){
            otp_error_message.innerHTML = "OTP must be 6 digits.";
        }
        if(hiddenOtp.value.length == 0 && hiddenOtp.value != ""){
            otp_error_message.innerHTML = "OTP is required.";
        }
    }
});


// form validate
// Correct the validation. pending...
if(document.getElementById("userDocFace")){
    const docWithFace = document.getElementById("userDocFace");
    docWithFace.addEventListener("input",()=>{
        $("#identity-verify-form").valid();
    });
}
if(document.getElementById("userDocFace")){
    const userDoc = document.getElementById("userDoc");
    userDoc.addEventListener("input",()=>{
        $("#identity-verify-form").valid();
    });
}

// hidden otp
const hiddenOtp = document.getElementById("hiddenOtp");
const otp_error_message = document.querySelector(".otp-error");
const otpForm = document.querySelector("#otpForm");

otpForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(hiddenOtp.value === ""){
        otp_error_message.innerHTML = "OTP is required";
    }
    else if(hiddenOtp.value.length < 6 && hiddenOtp.value != ""){
        otp_error_message.innerHTML = "OTP must be 6 digits.";
    }
    else if(hiddenOtp.value != "" && hiddenOtp.value.length == 6){
        otpForm.submit();
    }
});