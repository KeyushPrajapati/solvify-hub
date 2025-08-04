const bidFormSubmitBtn = document.getElementById("bid_submit_btn");
var bidModal = new bootstrap.Modal(document.getElementById('bidModal'), {
    keyboard: false
  });
const bidForm = document.getElementById("bidPlacedForm");
bidForm.addEventListener("submit",function(event){
    event.preventDefault();
    if($(bidForm).valid()){
        bidModal.hide();
        Swal.fire({
            title: 'Success!',
            text: 'Bid Placed Successfully',
            icon: 'success'
        }).then(()=>{
            bidForm.reset();
        });
    }
});

// quotedProjectDetails.html
if(document.querySelector(".freelancer-chat-room") && document.querySelector(".chat-with-freelancer") && document.querySelector(".freelancer-profile-open") && document.querySelector(".freelancer-small-profile")){

  // Select all elements for freelancer profiles and chat rooms
const freelancerChatRooms = document.querySelectorAll(".freelancer-chat-room");
const chatWithFreelancerBtns = document.querySelectorAll(".chat-with-freelancer");
const freelancerProfileOpenBtns = document.querySelectorAll(".freelancer-profile-open");
const freelancerSmallProfiles = document.querySelectorAll(".freelancer-small-profile");

// Add event listeners to toggle the profile and chat room states
freelancerProfileOpenBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const chatRoom = freelancerChatRooms[index];
        const smallProfile = freelancerSmallProfiles[index];
        if (!chatRoom.classList.contains("d-none") && smallProfile.classList.contains("d-none")) {
            chatRoom.classList.add("d-none");
            smallProfile.classList.remove("d-none");
        } else {
            chatRoom.classList.add("d-none");
            smallProfile.classList.remove("d-none");
        }
    });
});

chatWithFreelancerBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const chatRoom = freelancerChatRooms[index];
        const smallProfile = freelancerSmallProfiles[index];
        if (chatRoom.classList.contains("d-none") && !smallProfile.classList.contains("d-none")) {
            chatRoom.classList.remove("d-none");
            smallProfile.classList.add("d-none");
        } else {
            chatRoom.classList.remove("d-none");
            smallProfile.classList.add("d-none");
        }
    });
});

}

// Assigned Reviewer Chat JS Start
if( document.getElementById("reviewer-chat-box") &&  document.querySelector("#reviewer_chat_form") && document.querySelector("#reviewer_chat_input")){
    // const chatBox = document.getElementById("support-chat-messages-box");
    const reviewerChatBox = document.getElementById("reviewer-chat-box");
    // normal message for client to freelancer
    const reviewer_chat_form = document.querySelector("#reviewer_chat_form");
    const reviewer_chat_input = document.querySelector("#reviewer_chat_input");
    reviewer_chat_form.addEventListener("submit", function (e) {
        e.preventDefault();
        const reviewerMessage = reviewer_chat_input.value.trim();
        if (reviewerMessage !== "") {
            // Create a container for the chat message
            const reviewerMessageElement = document.createElement("div");
            reviewerMessageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
            reviewerMessageElement.innerHTML = `
                <div class="">
                    <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                </div>
                <div class="ps-2 w-100">
                    <div class="text-dark-100 fw-bold">Tony Stark</div>
                    <div class="text-dark-400 fs-6">12min ago</div>
                    <div class="mt-1">
                        <div class="p-1 rounded">
                            <div class="text-dark-100">${reviewerMessage}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append the new message to the chat box
            reviewerChatBox.appendChild(reviewerMessageElement);
            reviewerChatBox.scrollTop = reviewerChatBox.scrollHeight;
    
            // Reset file input and close modal
            reviewer_chat_input.value = "";
        }
    });
}
// Assigned Reviewer Chat JS End

// Assigned Hoster Chat JS Start
if( document.getElementById("hoster-chat-box") &&  document.querySelector("#hoster_chat_form") && document.querySelector("#hoster_chat_input")){
    // const chatBox = document.getElementById("support-chat-messages-box");
    const hosterChatBox = document.getElementById("hoster-chat-box");
    // normal message for client to freelancer
    const hoster_chat_form = document.querySelector("#hoster_chat_form");
    const hoster_chat_input = document.querySelector("#hoster_chat_input");
    hoster_chat_form.addEventListener("submit", function (e) {
        e.preventDefault();
        const hosterMessage = hoster_chat_input.value.trim();
        if (hosterMessage !== "") {
            // Create a container for the chat message
            const hosterMessageElement = document.createElement("div");
            hosterMessageElement.classList.add("d-flex", "mb-3", "w-100", "chat-message");
            hosterMessageElement.innerHTML = `
                <div class="">
                    <img src="assets/avatar.jpg" class="rounded-circle chat-profile-img" alt="">
                </div>
                <div class="ps-2 w-100">
                    <div class="text-dark-100 fw-bold">Tony Stark</div>
                    <div class="text-dark-400 fs-6">12min ago</div>
                    <div class="mt-1">
                        <div class="p-1 rounded">
                            <div class="text-dark-100">${hosterMessage}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append the new message to the chat box
            hosterChatBox.appendChild(hosterMessageElement);
            hosterChatBox.scrollTop = hosterChatBox.scrollHeight;
    
            // Reset file input and close modal
            hoster_chat_input.value = "";
        }
    });
}
// Assigned Hoster Chat JS End

// bidFormSubmitBtn.addEventListener("click",function(e){
//     if($("#bidForm").valid())
//     {
//         Swal.fire({
//             title: 'Success!',
//             text: 'Approve Successfully',
//             icon: 'success'
//         });
//         bidForm.submit();   
//     }
// });
