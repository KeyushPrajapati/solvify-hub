const filter_btn = document.querySelector("#filter-btn");
const filter_close_btn = document.querySelector("#filter-close-btn");
const sidebarFindJobs = document.querySelector("#sidebar-find-jobs");
const projectCardSection = document.querySelector("#project-card-section");

function filterCloseFun(){

        sidebarFindJobs.classList.toggle("filter_close");
    
    // projectCardSection.classList.toggle("section-full-width");
}   
filter_btn.addEventListener("click",filterCloseFun);
filter_close_btn.addEventListener("click",filterCloseFun);

// clear select fields from Filter
const filterClearBtn = document.querySelector("#filter-clear-btn");
function filterClearSelectFields(){
    // visit multi-select.js for clearSelection() 
    categoryDropdown?.clearSelection();
    technologyDropdown?.clearSelection();
}
filterClearBtn.addEventListener("click",filterClearSelectFields);


// Find Job Search Start
$(document).ready(function () {
    let typingTimer; // Timer identifier
    let doneTypingInterval = 1000; // Time in milliseconds (7 seconds)

    $("#job_serach").on("keyup", function () {
        clearTimeout(typingTimer); // Clear previous timer
        let searchText = $(this).val().trim();
        
        if (searchText.length > 0) {
            typingTimer = setTimeout(function () {
                fetchJobSearchResults(searchText);
            }, doneTypingInterval);
        } else {
            $("#job_suggestions_list").addClass("d-none");
        }
    });

    // Function to fetch search results
    function fetchJobSearchResults(searchText) {
        $.ajax({
            url: "find_jobs_search.php",
            method: "POST",
            data: { query: searchText },
            success: function (response) {
                $("#job_suggestions_list").html(response).removeClass("d-none");
            }
        });
    }

    // Hide suggestions when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".find-job-search-form").length) {
            $("#job_suggestions_list").addClass("d-none");
        }
    });

    // Fill the input field when clicking on a suggestion
    $(document).on("click", ".suggestion-item", function () {
        $("#job_serach").val($(this).text());
        $("#job_suggestions_list").addClass("d-none");
    });
});

// Find Job Search End
