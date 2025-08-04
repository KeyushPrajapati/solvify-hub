$(document).ready(function () {
    let typingTimer; // Timer identifier
    let doneTypingInterval = 3000; // Time in milliseconds (3 seconds)

    $("#hero-search").on("keyup", function () {
        clearTimeout(typingTimer); // Clear previous timer
        let searchText = $(this).val().trim();
        
        if (searchText.length > 0) {
            typingTimer = setTimeout(function () {
                fetchSearchResults(searchText);
            }, doneTypingInterval);
        } else {
            $("#suggestionsList").addClass("d-none");
        }
    });

    // Function to fetch search results
    function fetchSearchResults(searchText) {
        $.ajax({
            url: "search.php",
            method: "POST",
            data: { query: searchText },
            success: function (response) {
                $("#suggestionsList").html(response).removeClass("d-none");
            }
        });
    }

    // Hide suggestions when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".main-search").length) {
            $("#suggestionsList").addClass("d-none");
        }
    });

    // Fill the input field when clicking on a suggestion
    $(document).on("click", ".suggestion-item", function () {
        $("#hero-search").val($(this).text());
        $("#suggestionsList").addClass("d-none");
    });
});
