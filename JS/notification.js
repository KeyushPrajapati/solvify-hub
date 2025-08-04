// const notificationContainer = document.getElementById("all-noti-container");
// const allNotifications = notificationContainer.querySelectorAll(".notification-card");
// const notiSidebar = document.querySelector(".noti-sidebar");
// const notiContentContainer = document.querySelector(".noti-content-container");
// const notiBackBtn = document.querySelector("#noti-back-btn");

// // Function to toggle the visibility
// function handleNotificationClick() {
//   if (window.innerWidth < 768) { // Only apply for screens smaller than 768px
//     notiSidebar.classList.add("d-none"); // Hide sidebar
//     notiContentContainer.classList.remove("d-none"); // Show content container
//   }
// }
// notiBackBtn.addEventListener("click",()=>{
//     notiSidebar.classList.remove("d-none"); // Hide sidebar
//     notiContentContainer.classList.add("d-none"); // Show content container
// })
// // Add click event listeners to all notification cards
// allNotifications.forEach((notification) => {
//   notification.addEventListener("click", handleNotificationClick);
// });

// navbar notification 
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const dropdownElement = document.querySelector("#notificationsDropdown");

  // Initialize the dropdown with autoClose set to "inside"
  new bootstrap.Dropdown(dropdownElement, {
      autoClose: "outside"
  });
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all close buttons inside the notifications
  const closeButtons = document.querySelectorAll(".noti-dismiss-btn");

  // Add event listener to each close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Prevent default action (if needed)
      event.preventDefault();

      // Find the parent notification element and remove it
      const notificationItem = this.closest(".dropdown-item");
      if (notificationItem) {
        notificationItem.remove();
      }

      // Optional: Check if all notifications are removed and show "No Notifications Yet!"
      const container = document.querySelector(".noti-dropdown-inner-container");
      const remainingNotifications = container.querySelectorAll(".dropdown-item");
      if (remainingNotifications.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.classList.add("py-4", "w-100", "text-center", "text-dark-300");
        emptyMessage.textContent = "No Notifications Yet! 😊";
        container.appendChild(emptyMessage);
      }
    });
  });
});
