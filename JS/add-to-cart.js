const project_service_form = document.getElementById("cart_form");
// Function to handle showing and hiding steps
function showStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.add('d-none');
    document.getElementById(nextStep).classList.remove('d-none');
  }
  
  // Event listeners for Step 1 to Step 2 navigation
  document.getElementById('cart_continue_btn').addEventListener('click', function () {
    showStep('cart_section', 'product_service_section');
  });
  
  // Event listeners for Step 2 to Step 3 navigation
  document.getElementById('service_choice_continue_btn').addEventListener('click', function () {
    if($("#project_service_form").valid()){
      showStep('product_service_section', 'preview_section');
    }
  });
  
  // Event listeners for Step 2 to Step 1 navigation
  document.getElementById('service_choice_previous_btn').addEventListener('click', function () {
    showStep('product_service_section', 'cart_section');
  });
  
  // Event listeners for Step 3 to Step 2 navigation
  document.getElementById('preview_previous_btn').addEventListener('click', function () {
    showStep('preview_section', 'product_service_section');
  });

   // Event submit form
   document.getElementById('preview_paynow_btn').addEventListener('click', function () {
    if(!project_service_form.classList.contains("d-none")){
      $("#cart_form").submit();
    }
  });


const service_message = document.getElementById("service_message");
// Add event listeners for customization and hosting checkboxes
const allCustomizationCheckBox = document.querySelectorAll('[id^="customization_checkbox_"]');
const allHostingCheckBox = document.querySelectorAll('[id^="hosting_checkbox_"]');

// Function to update visibility of project_service_form
function updateProjectServiceFormVisibility() {
  const anyCustomizationChecked = Array.from(allCustomizationCheckBox).some((checkbox) => checkbox.checked);
  const anyHostingChecked = Array.from(allHostingCheckBox).some((checkbox) => checkbox.checked);

  if (anyCustomizationChecked || anyHostingChecked) {
    project_service_form.classList.remove("d-none");
    service_message.classList.add("d-none");
  } else {
    project_service_form.classList.add("d-none");
    service_message.classList.remove("d-none");
  }
}

// Function to update visibility of individual project cards
function updateProjectCardVisibility(projectId) {
  const customizationCheckbox = document.getElementById(`customization_checkbox_${projectId}`);
  const hostingCheckbox = document.getElementById(`hosting_checkbox_${projectId}`);
  const projectCard = document.getElementById(`project_${projectId}`);

  if (customizationCheckbox.checked || hostingCheckbox.checked) {
    projectCard.classList.remove("d-none");
  } else {
    projectCard.classList.add("d-none");
  }
}

// Initialize event listeners for customization checkboxes
allCustomizationCheckBox.forEach((checkbox) => {
  const btnIdNo = checkbox.id.split('_')[2];
  const customization_service_form = document.getElementById(`customization_service_form_${btnIdNo}`);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      customization_service_form.classList.remove("d-none");
    } else {
      customization_service_form.classList.add("d-none");
    }
    updateProjectServiceFormVisibility();
    updateProjectCardVisibility(btnIdNo);
  });
});

// Initialize event listeners for hosting checkboxes
allHostingCheckBox.forEach((checkbox) => {
  const btnIdNo = checkbox.id.split('_')[2];
  const hosting_service_form = document.getElementById(`hosting_service_form_${btnIdNo}`);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      hosting_service_form.classList.remove("d-none");
    } else {
      hosting_service_form.classList.add("d-none");
    }
    updateProjectServiceFormVisibility();
    updateProjectCardVisibility(btnIdNo);
  });
});

// Initial check to ensure the visibility state is correct on page load
updateProjectServiceFormVisibility();
allCustomizationCheckBox.forEach((checkbox) => {
  const btnIdNo = checkbox.id.split('_')[2];
  updateProjectCardVisibility(btnIdNo);
});

  
// // hosting provider field shown or not.
document.querySelectorAll('[id^="hostingChoice_"]').forEach((selectField) => {
    const fieldIdNo = selectField.id.split('_')[1];
    selectField.addEventListener("change",()=>{
        const hostingProvider = document.getElementById(`hosting_provider_field_${fieldIdNo}`);
        if(selectField.value === "1"){
            hostingProvider.classList.remove("d-none");
        }else{
            hostingProvider.classList.add("d-none");
        }
    })
});  











// Add event listeners for hosting checkboxes
// document.querySelectorAll('[id^="hosting_checkbox_"]').forEach((checkbox) => {
//     const btnIdNo = checkbox.id.split('_')[2];
//     const hosting_service_btn = document.getElementById(`hosting_service_btn_${btnIdNo}`);
//     const hpForm = $("#hp_form_"+btnIdNo);
//     checkbox.addEventListener('change', () => {
//         if(checkbox.checked){
//             hosting_service_btn.disabled = false;
//             if(hpForm.valid()){
//                 hosting_service_btn.classList.add("btn_on_animation");
//             }else{
//                 hosting_service_btn.classList.remove("btn_on_animation");
//             }
//         }else{
//             hosting_service_btn.disabled = true;
//             hosting_service_btn.classList.remove("btn_on_animation");
//         }
//     });
// });

// // Add event listeners for customization checkboxes
// document.querySelectorAll('[id^="customization_checkbox_"]').forEach((checkbox) => {
//     const btnIdNo = checkbox.id.split('_')[2];
//     const customization_service_btn = document.getElementById(`customization_service_btn_${btnIdNo}`);
//     const cpForm = $("#cp_form_"+btnIdNo);
//     checkbox.addEventListener('change', () => {
//         if(checkbox.checked){
//             customization_service_btn.disabled = false;
//             if(cpForm.valid()){
//                 customization_service_btn.classList.add("btn_on_animation");
//             }else{
//                 customization_service_btn.classList.remove("btn_on_animation");
//             }
//         }else{
//             customization_service_btn.disabled = true;
//             customization_service_btn.classList.remove("btn_on_animation");
//         }
//     });
// });

// // hosting provider field shown or not.
// document.querySelectorAll('[id^="hostingChoice_"]').forEach((selectField) => {
//     const fieldIdNo = selectField.id.split('_')[1];
//     selectField.addEventListener("change",()=>{
//         const hostingProvider = document.getElementById(`hosting_provider_field_${fieldIdNo}`);
//         if(selectField.value === "1"){
//             hostingProvider.classList.remove("d-none");
//         }else{
//             hostingProvider.classList.add("d-none");
//         }
//     })
// });

// // checkout button validation
// function checkAllCustomizationForms(){
//     const customiation_forms_count = document.querySelectorAll('[id^="cp_form_"]').length;
//     console.log(customiation_forms_count);
//     let cust_forms_valid = false;
//     let invalid_cust_no = 0;
//     // check all customization form is valid or not
//     for(let i=1 ; i<= customiation_forms_count ;i++){
//         if(!$("#cp_form_"+i).valid()){
//             cust_forms_valid = false;
//             invalid_cust_no = i;
//             break;
//         }else{
//             cust_forms_valid = true;
//         }
//     }
//     return cust_forms_valid+"_"+invalid_cust_no;
// }
// function checkAllHostingForms(){
//     const hosting_forms_count = document.querySelectorAll('[id^="hp_form_"]').length;
//     let host_forms_valid = false;
//     let invalid_host_no = 0;
//     // check all hosting form is valid or not
//     for(let i=1 ; i<= hosting_forms_count ;i++){
//         if(!$("#hp_form_"+i).valid()){
//             host_forms_valid = false;
//             invalid_host_no = i;
//             break;
//         }else{
//             host_forms_valid = true;
//         }
//     }
//     return host_forms_valid+"_"+invalid_host_no;
// }
// const checkout_btn = document.getElementById("checkout_btn");
// checkout_btn.addEventListener('click',()=>{
//     const cust_valid = checkAllCustomizationForms();
//     const host_valid = checkAllHostingForms();
//     const cust_wrong_form_no = cust_valid.split("_")[1];
//     const host_wrong_form_no = cust_valid.split("_")[1];
//     let error_message = "some thing went wrong !";
//     if(cust_valid.split("_")[0] === "true" && host_valid.split("_")[0] === "true"){
//         window.location.href = "checkout.html"
//     }else{
//         if(cust_valid.split("_")[0] === "false" && host_valid.split("_")[0] !== "false"){
//             error_message = `Please check the customization form for the ${cust_wrong_form_no} number product.`;
//         }
//         else if(cust_valid.split("_")[0] !== "false" && host_valid.split("_")[0] === "false"){
//             error_message = `Please check the customization form for the ${host_wrong_form_no} number product.`;
//         }else if(cust_valid.split("_")[0] === "false" && host_valid.split("_")[0] === "false"){
//             error_message = `Please check the customization form for the ${cust_wrong_form_no} number product and the hosting form for the ${host_wrong_form_no} number product.`;
//         }
//         Swal.fire({
//             title: 'Somthing Went Wrong !',
//             text: error_message,
//             icon: 'error',
//         })
//     }
// })
