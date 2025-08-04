// normal message for client to support
const uploadForm = document.getElementById("imageUploadForm");
const imageInput = document.getElementById("imageInput");
const descriptionInput = document.getElementById("image_description");
const support_chatBox = document.getElementById("support-chat-messages-box");
const support_contact_form = document.querySelector("#support_contact_form");
const support_message_input = document.querySelector("#support_message");
const support_image_message_modal = document.querySelector("#imageMessage2");
simpleTextChat(support_chatBox,support_contact_form,support_message_input); // find the function in common.js
textAndImageChat(support_chatBox,uploadForm,imageInput,descriptionInput,support_image_message_modal); // find the function in common.js

// normal message for client to developer
const freelancerChatBox = document.getElementById("freelancer-chat-box");
const freelancer_chat_form = document.querySelector("#freelancer_chat_form");
const freelancer_chat_input = document.querySelector("#freelancer_chat_input");
simpleTextChat(freelancerChatBox,freelancer_chat_form,freelancer_chat_input); // find the function in common.js

// normal message for client to developer
const hosterChatBox = document.getElementById("hoster-chat-box");
const hoster_chat_form = document.querySelector("#hoster_chat_form");
const hoster_chat_input = document.querySelector("#hoster_chat_input");
simpleTextChat(hosterChatBox,hoster_chat_form,hoster_chat_input); // find the function in common.js


// normal message for client to hoster - Freelancer
const freelancerHosterChatBox = document.getElementById("freelancer-hoster-chat-box");
const freelancerHosterChatForm = document.querySelector("#freelancer_hoster_chat_form");
const freelancerHosterChatInput = document.querySelector("#freelancer_hoster_chat_input");
simpleTextChat(freelancerHosterChatBox,freelancerHosterChatForm,freelancerHosterChatInput); // find the function in common.js

// normal message for client to hoster - Freelancer
const freelancerDeveloperChatBox = document.getElementById("freelancer-developer-chat-box");
const freelancerDeveloperChatForm = document.querySelector("#freelancer_developer_chat_form");
const freelancerDeveloperChatInput = document.querySelector("#freelancer_developer_chat_input");
simpleTextChat(freelancerDeveloperChatBox,freelancerDeveloperChatForm,freelancerDeveloperChatInput); // find the function in common.js

// if(document.getElementById("payment_release")){
//     const release_btn = document.getElementById("payment_release");
//     release_btn.addEventListener("click",function(){
//         Swal.fire({
//             title: 'Are you sure ?',
//             text: 'Make sure and verify before release the payment',
//             icon: 'question',
//             showCancelButton: true,
//             confirmButtonText: 'Release Payment',
//             cancelButtonText: ' Cancel ',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // write code for release.
//                 // if payment success then show below alert
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Payment released successfully',
//                     icon: 'success'
//                 });
//             }
//         });
//     });
// }

if(document.getElementById("fp_review_approve_btn")){
    const fp_review_approve_btn = document.getElementById("fp_review_approve_btn");
    fp_review_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                fp_review_approve_btn.parentElement.parentElement.remove();
            }
        });
    });
}
if(document.getElementById("sp_review_approve_btn")){
    const sp_review_approve_btn = document.getElementById("sp_review_approve_btn");
    sp_review_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                sp_review_approve_btn.parentElement.parentElement.remove();
            }
        });
    });
}
if(document.getElementById("fp_hosting_approve_btn")){
    const fp_hosting_approve_btn = document.getElementById("fp_hosting_approve_btn");
    fp_hosting_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                document.getElementById("fp_hosted_project_card").classList.remove("d-none");
                fp_hosting_approve_btn.parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
            }
        });
    });
}
if(document.getElementById("fp_development_approve_btn")){
    const fp_development_approve_btn = document.getElementById("fp_development_approve_btn");
    fp_development_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                document.getElementById("fp_development_project_card").classList.remove("d-none");
                fp_development_approve_btn.parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
            }
        });
    });
}
if(document.getElementById("sp_development_approve_btn")){
    const sp_development_approve_btn = document.getElementById("sp_development_approve_btn");
    sp_development_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                document.getElementById("sp_hosted_project_card").classList.remove("d-none");
                sp_development_approve_btn.parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
            }
        });
    });
}

if(document.getElementById("sp_development_approve_btn")){
    const sp_development_approve_btn = document.getElementById("sp_development_approve_btn");
    sp_development_approve_btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: 'You want to Approve',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: ' Cancel ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Approved Successfully',
                    icon: 'success'
                });
                document.getElementById("sp_hosted_project_card").classList.remove("d-none");
                sp_development_approve_btn.parentElement.parentElement.parentElement.parentElement.classList.add("d-none");
            }
        });
    });
}

if(document.getElementById("hoster_offer_btn_1")){
    document.querySelectorAll('[id^="hoster_offer_btn_"]').forEach((e)=>{
        const identifier = e.id.split("_")[3];
        const badge = document.querySelector(`#hoster_requested_badge_${identifier}`);
        e.addEventListener("click",()=>{
            Swal.fire({
                title: 'Are you sure ?',
                text: 'You want to Offer',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Offered Successfully',
                        icon: 'success'
                    });
                    badge.classList.remove("d-none");
                    e.classList.add("d-none");
                }
            });
        });
    });
}
if(document.getElementById("developer_offer_btn_1")){
    document.querySelectorAll('[id^="developer_offer_btn_"]').forEach((e)=>{
        const identifier = e.id.split("_")[3];
        const badge = document.querySelector(`#developer_requested_badge_${identifier}`);
        e.addEventListener("click",()=>{
            Swal.fire({
                title: 'Are you sure ?',
                text: 'You want to Offer',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: ' Cancel ',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Offered Successfully',
                        icon: 'success'
                    });
                    badge.classList.remove("d-none");
                    e.classList.add("d-none");
                }
            });
        });
    });
}
if(document.getElementById("hostingChoice")){
    const hostingChoiceSelect = document.getElementById("hostingChoice");
    hostingChoiceSelect.addEventListener("change", function() {
        const hostingProvider = document.getElementById("hosting_provider_field");
        if (this.value === "1") {
            hostingProvider.classList.remove("d-none");
        } else {
            hostingProvider.classList.add("d-none");
        }
    });
}
