const editPersonalDetailForm = $("#editPersonalDetailsForm");
const editPersonalInfoButton = document.getElementById("update-personal-info-btn");

editPersonalInfoButton.addEventListener("click",()=>{
    if(editPersonalDetailForm.valid()){
        editPersonalDetailForm.submit();
    }
});

// show Image before submit the form. (function written at common.js)
// setupImagePreview parameters : inputId, previewImageId, removeButtonId, dummyImageSrc 
setupImagePreview('editProfileImage','editProfilePreviewImage','remove-profile-img-btn','assets/dummy-profile.jpg');


