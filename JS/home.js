const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileNavbar = document.querySelector("#responsive-navbar");
// const bgBlur = document.querySelector(".bgBlur");
function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");
    mobileNavbar.classList.toggle("navActive");
}
// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('autoplayVideo');
    const videoSection = document.getElementById('videoSection');
  
    // Function to check if the video is in view
    function isInViewport() {
		if(videoSection){
			const rect = videoSection.getBoundingClientRect();
			return (
			  rect.top >= 0 &&
			  rect.left >= 0 &&
			  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
    }
  
    // Event listener for scroll
    window.addEventListener('scroll', () => {
      if (isInViewport()) {
        video.play().catch(() => {
          console.log("Autoplay was prevented.");
        });
      }
    });
  
    // Initial check when page loads
    if (isInViewport()) {
      video.play().catch(() => {
        console.log("Autoplay was prevented.");
      });
    }
  });

  
  // Elements
  if(document.getElementById("hero-search") && document.getElementById("suggestionsList")){
    // Sample suggestion data
    const suggestions = [
      "JavaScript",
      "Java",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "C++",
      "React",
      "Angular"
    ];

  const searchInput = document.getElementById("hero-search");
  const suggestionsList = document.getElementById("suggestionsList");
  
  // Function to filter and show suggestions
  function showSuggestions(query) {
    // Clear previous suggestions
    suggestionsList.innerHTML = "";
  
    if (query.trim() === "") {
      suggestionsList.classList.add("d-none");
      return;
    }
  
    // Filter suggestions
    const filtered = suggestions.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    // Display suggestions
    if (filtered.length > 0) {
      suggestionsList.classList.remove("d-none");
      filtered.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "suggestion-item list-group-item";
        li.onclick = () => selectSuggestion(item);
        suggestionsList.appendChild(li);
      });
    } else {
      suggestionsList.classList.add("d-none");
    }
  }
  
  // Function to handle selection
  function selectSuggestion(value) {
    searchInput.value = value;
    suggestionsList.classList.add("d-none");
  }
  
  // Event Listener
  searchInput.addEventListener("input", (e) => {
    showSuggestions(e.target.value);
  });
}
