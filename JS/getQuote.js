
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
            // 'application/pdf',
            // 'application/msword',
            // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            // 'image/jpeg',
            // 'image/png',
            'application/zip',
        ];

        const validExtensions = ['zip'];

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
if(document.getElementById('dropArea') && document.getElementById('quoteAttachments') && document.getElementById('filePreviewContainer')){
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('quoteAttachments');
    const filePreviewContainer = document.getElementById('filePreviewContainer');
    initializeFileUpload(dropArea, filePreviewContainer, fileInput);
}
// quotedProjectDetails.html
if(document.querySelector(".freelancer-chat-room") && document.querySelector(".chat-with-freelancer") && document.querySelector(".freelancer-profile-open") && document.querySelector(".freelancer-small-profile")){

    const freelancerChatRoom = document.querySelector(".freelancer-chat-room");
    const chatWithFreelancerBtn = document.querySelector(".chat-with-freelancer");
    const freelancerProfileOpenBtn = document.querySelector(".freelancer-profile-open");
    const freelancerSmallProfile = document.querySelector(".freelancer-small-profile");
    
    freelancerProfileOpenBtn.addEventListener("click",()=>{
        if(!freelancerChatRoom.classList.contains("d-none") && freelancerSmallProfile.classList.contains("d-none")){
            freelancerChatRoom.classList.add("d-none");
            freelancerSmallProfile.classList.remove("d-none");
        }else{
            freelancerChatRoom.classList.add("d-none");
            freelancerSmallProfile.classList.remove("d-none");
        }
    });
    
    chatWithFreelancerBtn.addEventListener("click",()=>{
        if(freelancerChatRoom.classList.contains("d-none") && !freelancerSmallProfile.classList.contains("d-none")){
            freelancerChatRoom.classList.remove("d-none");
            freelancerSmallProfile.classList.add("d-none");
        }else{
            freelancerChatRoom.classList.remove("d-none");
            freelancerSmallProfile.classList.add("d-none");
        }
    })
}

// JavaScript to handle currency and plan limit updates
if(document.getElementById('currency') && document.getElementById('getQuoteBudgetPlan')){

    const currencySelect = document.getElementById('currency');
    const planSelect = document.getElementById('getQuoteBudgetPlan');
    
    // Define the plans for each currency
    const plans = {
        INR: [
            { id: 1, label: 'Very Small Project (100 - 200)' },
            { id: 2, label: 'Medium Project (300 - 500)' },
            { id: 3, label: 'Large Project (600 - 1000)' }
        ],
        USD: [
            { id: 1, label: 'Very Small Project (1.25 - 2.5)' },
            { id: 2, label: 'Medium Project (3.75 - 6.25)' },
            { id: 3, label: 'Large Project (7.5 - 12.5)' }
        ]
    };
    
    // Function to update the plan options based on selected currency
    function updatePlanOptions() {
        const selectedCurrency = currencySelect.value;
        const selectedPlans = selectedCurrency === '1' ? plans.USD : plans.INR;
    
        // Clear existing options
        planSelect.innerHTML = '<option value="" disabled selected>select plan</option>';
    
        // Add new options
        selectedPlans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.id;
            option.textContent = plan.label;
            planSelect.appendChild(option);
        });
    }
    
    // Event listener for currency selection
    currencySelect.addEventListener('change', updatePlanOptions);
    
    // Initialize default options for INR
    updatePlanOptions();
}
if(document.getElementById("payment_release")){
    const release_btn = document.getElementById("payment_release");
    release_btn.addEventListener("click",function(){
        Swal.fire({
            title: 'Are you sure ?',
            text: 'Make sure and verify before release the payment',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Release Payment',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                // write code for release.
                // if payment success then show below alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Payment released successfully',
                    icon: 'success'
                });
            }
        });
    });
}
if(document.getElementById("development_approve_btn")){
    const release_btn = document.getElementById("development_approve_btn");
    release_btn.addEventListener("click",function(){
        Swal.fire({
            title: 'Are you sure , you want to approve ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Approve',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                // write code for release.
                // if payment success then show below alert
                Swal.fire({
                    title: 'Success!',
                    title: 'Congratulations ! Customization completed successfully',
                    icon: 'success'
                });
            }
        });
    });
}

// Chat box support and developer
if(document.getElementById("imageUploadForm") && document.getElementById("support-chat-messages-box") && document.getElementById("freelancer-chat-box") && document.getElementById("imageInput") && document.getElementById("image_description") && document.querySelector("#support_message") &&  document.querySelector("#freelancer_chat_form") && document.querySelector("#freelancer_chat_input")){
    const chatBox = document.getElementById("support-chat-messages-box");
    const freelancerChatBox = document.getElementById("freelancer-chat-box");

    const uploadForm = document.getElementById("imageUploadForm");
    const imageInput = document.getElementById("imageInput");
    const descriptionInput = document.getElementById("image_description");
    // normal message for client to support
    const support_contact_form = document.querySelector("#support_contact_form");
    const support_message_input = document.querySelector("#support_message");
    
    // normal message for client to freelancer
    const freelancer_chat_form = document.querySelector("#freelancer_chat_form");
    const freelancer_chat_input = document.querySelector("#freelancer_chat_input");
    
    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const file = imageInput.files[0];
        const description = descriptionInput.value.trim();
        if (file) {
            const messageImage = `Image uploaded: ${file.name}`;
            const descriptionMessage = description ? `${description}` : "";
    
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
            const modal = bootstrap.Modal.getInstance(document.getElementById('imageMessage'));
            modal.hide();
        }
    });
    
    support_contact_form.addEventListener("submit", function (e) {
        e.preventDefault();
        const supportMessage = support_message_input.value.trim();
        if (supportMessage !== "") {
            // Create a container for the chat message
            const supportMessageElement = document.createElement("div");
            supportMessageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
            supportMessageElement.innerHTML = `
                <div class="">
                    <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                </div>
                <div class="ps-2 w-100">
                    <div class="text-dark-100 fw-bold">Tony Stark</div>
                    <div class="text-dark-400 fs-6">12min ago</div>
                    <div class="mt-1">
                        <div class="p-1 rounded">
                            <div class="text-dark-100">${supportMessage}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append the new message to the chat box
            chatBox.appendChild(supportMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
    
            // Reset file input and close modal
            support_message_input.value = "";
        }
    });
    
    freelancer_chat_form.addEventListener("submit", function (e) {
        e.preventDefault();
        const freelancerMessage = freelancer_chat_input.value.trim();
        if (freelancerMessage !== "") {
            // Create a container for the chat message
            const freelancerMessageElement = document.createElement("div");
            freelancerMessageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
            freelancerMessageElement.innerHTML = `
                <div class="">
                    <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                </div>
                <div class="ps-2 w-100">
                    <div class="text-dark-100 fw-bold">Tony Stark</div>
                    <div class="text-dark-400 fs-6">12min ago</div>
                    <div class="mt-1">
                        <div class="p-1 rounded">
                            <div class="text-dark-100">${freelancerMessage}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append the new message to the chat box
            freelancerChatBox.appendChild(freelancerMessageElement);
            freelancerChatBox.scrollTop = freelancerChatBox.scrollHeight;
    
            // Reset file input and close modal
            freelancer_chat_input.value = "";
        }
    });
}

// Technologies  - Select Field
new MultiSelectTag('quote_techs',{
    placeholder: 'Search',
    tagColor: {
        textColor: 'var(--bs-primary-100)',
        borderColor: 'var(--bs-primary-100)',
        bgColor: 'var(--bs-primary-800)',
    },
    onChange: function(values) {
    const hiddenTechInput = document.getElementById("quote_techs_hidden_input");
        hiddenTechInput.setAttribute("value",getValuesInString(values));
        validateField("#quote_techs_hidden_input", /.*/, "Technologies are required.");
    }
});
// function sendMessage() {
//     const messageText = messageInput.value.trim();

//     if (messageText) {
//         const messageElement = document.createElement("div");
//         messageElement.classList.add("chat-message");
//         messageElement.textContent = messageText;
//         chatBox.appendChild(messageElement);
//         messageInput.value = "";
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }
// }

// imageInput.addEventListener("change", function () {
//     const file = imageInput.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const imgElement = document.createElement("img");
//             imgElement.src = e.target.result;
//             const imageContainer = document.createElement("div");
//             imageContainer.classList.add("chat-message");
//             imageContainer.appendChild(imgElement);
//             chatBox.appendChild(imageContainer);
//             chatBox.scrollTop = chatBox.scrollHeight;
//         };
//         reader.readAsDataURL(file);
//         imageInput.value = "";
//     }
// });