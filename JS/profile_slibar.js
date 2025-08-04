const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 6,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2.5
      }
    }
  });

// Select the anchor element
// const anchor = document.querySelector('a');

// Function to parse personal details
function parsePersonalDetails(data) {
    const keys = [
        'freelancer_name', 'age', 'gender', 'bio', 'designation', 'experience',
        'state', 'city', 'profile_image', 'skills'
    ];
    const values = data.split('|');
    return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

// Function to parse flags
function parseFlags(data) {
    return data.split('|').map(pair => pair.split(',').map(Number));
}

// Function to parse work experiences
function parseWorkExperiences(data) {
    return data.split('@').map(entry => {
        const [project_name, preview_link, description, thumbnail, technologies, hosting_platform] = entry.split('|');

        // Check if all fields are empty or undefined
        const allEmpty = [project_name, preview_link, description, thumbnail, technologies, hosting_platform]
            .every(field => !field || field.trim() === "");

        if (allEmpty) return {}; // return empty object if all fields are empty

        return { project_name, preview_link, description, thumbnail, technologies, hosting_platform };
    });
}
function projectCountFormat(num) {
    if (num < 5) return num.toString();

    const base = Math.floor(num / 5) * 5;
    return base + '+';
}
// check image is exist or not
function checkImageExists(imageUrl, callback) {
    if (!imageUrl) {
        callback(false); // If the path is empty/null, return false immediately
        return;
    }
    let img = new Image();
    img.src = imageUrl;
    img.onload = function() {
        callback(true); // Image exists
    };
    img.onerror = function() {
        callback(false); // Image does not exist
    };
}

// Event listener to fetch data on click
document.querySelectorAll('[href^="#csf_profile_canvas"]').forEach((anchor)=>{
    var freelancerPersonalDetails;
    var freelancerFlags;
    var freelancerWorkExperiences;
    anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        freelancerPersonalDetails = parsePersonalDetails(anchor.getAttribute('data-personal-details'));
        freelancerFlags = parseFlags(anchor.getAttribute('data-flags'));
        freelancerWorkExperiences = parseWorkExperiences(anchor.getAttribute('data-work-experiences'));
        // Output the parsed data
        const   csf_profile_image = document.getElementById("csf_profile_image"),
                csf_name = document.getElementById("csf_name"),
                csf_location = document.getElementById("csf_location"),
                csf_designation = document.getElementById("csf_designation"),
                csf_experience = document.getElementById("csf_experience"),
                csf_age = document.getElementById("csf_age"),
                csf_gender = document.getElementById("csf_gender"),
                csf_skills = document.getElementById("csf_skills"),
                csf_developer_project_count = document.getElementById("csf_developer_project_count"),
                csf_reviewer_project_count = document.getElementById("csf_reviewer_project_count"),
                csf_hoster_project_count = document.getElementById("csf_hoster_project_count"),
                csf_bio = document.getElementById("csf_bio"),
                // csf_portfolio_canvas_container = document.getElementById("csf_portfolio_canvas_container"),
                csf_portfolio_card_container = document.getElementById("csf_portfolio_card_container")

                // *** Personal Details Start ***
                // Profile image
                checkImageExists(freelancerPersonalDetails["profile_image"], function(exists) {
                    if (exists) {
                        csf_profile_image.setAttribute("src",freelancerPersonalDetails["profile_image"]);
                    } else {
                        csf_profile_image.setAttribute("src","assets/dummy-profile.jpg");
                    }
                });
                // Freelancer Name
                csf_name.innerHTML = freelancerPersonalDetails["freelancer_name"] !== "" && freelancerPersonalDetails["freelancer_name"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["freelancer_name"] : "Not Available";
                // Location
                csf_location.innerHTML = (freelancerPersonalDetails["city"] !== undefined || freelancerPersonalDetails["state"] !== undefined) && (freelancerPersonalDetails["city"].trim().toLowerCase() !== "none" || freelancerPersonalDetails["state"].trim().toLowerCase() !== "none") ? freelancerPersonalDetails["city"]+", "+freelancerPersonalDetails["state"] : "Not Available";
                // Designnation
                csf_designation.innerHTML = freelancerPersonalDetails["designation"] !== undefined && freelancerPersonalDetails["designation"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["designation"] : "Not Available";
                // Experience
                csf_experience.innerHTML = freelancerPersonalDetails["experience"] !== undefined && freelancerPersonalDetails["experience"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["experience"]+" Years" : "Not Available" ;
                // Age
                csf_age.innerHTML = freelancerPersonalDetails["age"] !== undefined && freelancerPersonalDetails["age"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["age"]+" Years" : "Not Available";
                // Gender
                csf_gender.innerHTML = freelancerPersonalDetails["gender"] !== undefined && freelancerPersonalDetails["gender"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["gender"] : "Not Available";
                // Skills
                csf_skills.innerHTML = freelancerPersonalDetails["skills"] !== undefined && freelancerPersonalDetails["skills"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["skills"] : "Not Available";
                // Bio
                csf_bio.innerHTML = freelancerPersonalDetails["bio"] !== undefined && freelancerPersonalDetails["bio"].trim().toLowerCase() !== "none" ? freelancerPersonalDetails["bio"] : "Not Available";

                // *** Personal Details End ***

                // *** Project Completion Record Start ***
                // Developer Flag
                if(freelancerFlags[0][0] == 1){
                    csf_developer_project_count.innerHTML = projectCountFormat(freelancerFlags[0][1]);
                }else{
                    csf_developer_project_count.innerHTML = 0;
                }
                // Reviewer Flag
                if(freelancerFlags[1][0] == 1){
                    csf_reviewer_project_count.innerHTML = projectCountFormat(freelancerFlags[1][1]);
                }else{
                    csf_reviewer_project_count.innerHTML = 0;
                }
                // Hoster Flag
                if(freelancerFlags[2][0] == 1){
                    csf_hoster_project_count.innerHTML = projectCountFormat(freelancerFlags[2][1]);
                }else{
                    csf_hoster_project_count.innerHTML = 0;
                }
                // *** Project Completion Record End ***
                // *** Work Experience start ***
                csf_portfolio_card_container.innerHTML = ""; // Remove Previous Cards
                for(let i=0 ; i < freelancerWorkExperiences.length ; i++){
                    // Create main wrapper div
                    if(freelancerWorkExperiences.length === 1 && Object.keys(freelancerWorkExperiences[i]).length === 0){
                        const message = document.createElement("p");
                        message.classList.add("fs-6","text-dark-200");
                        message.textContent = "Not Available";
                        csf_portfolio_card_container.appendChild(message);
                    }
                    else if(Object.keys(freelancerWorkExperiences[i]).length !== 0){
                        const cardItem = document.createElement("div");
                        cardItem.classList.add("card-item", "swiper-slide");

                        // Create card div
                        const card = document.createElement("div");
                        card.classList.add("card", "portfolio_card", "border-radius-10");

                        // Create card body
                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "p-2");

                        // Create anchor tag
                        const anchor = document.createElement("a");
                        anchor.href = "#";
                        anchor.role = "button";
                        anchor.classList.add("text-decoration-none");
                        anchor.setAttribute("data-card-index", i);
                        anchor.setAttribute("data-bs-toggle", "offcanvas");
                        anchor.setAttribute("href", "#portfolio_project_review_canvas");
                        anchor.setAttribute("aria-controls", "portfolio_project_review_canvas");

                        // Create image wrapper
                        const imageWrapper = document.createElement("div");

                        // Create image element
                        const image = document.createElement("img");
                        checkImageExists(freelancerWorkExperiences[i]["thumbnail"], function(exists) {
                            if (exists) {
                                image.src = freelancerWorkExperiences[i]["thumbnail"];
                            } else {
                                image.src = "assets/dummy-profile.jpg" ;
                            }
                        });
                        image.classList.add("profile_project_image");
                        image.alt = "";

                        // Append image to wrapper
                        imageWrapper.appendChild(image);

                        // Create project title div
                        const projectTitle = document.createElement("div");
                        projectTitle.classList.add("text-dark", "mt-2", "fw-bold", "fs-6");
                        projectTitle.textContent = freelancerWorkExperiences[i]["project_name"];

                        // Append elements to anchor
                        anchor.appendChild(imageWrapper);
                        anchor.appendChild(projectTitle);

                        // Create badge container
                        const badgeContainer = document.createElement("div");
                        badgeContainer.classList.add("mt-2", "d-flex", "flex-wrap", "justify-content-start", "align-items-center");

                        // Create badge
                        const badge = document.createElement("div");
                        badge.classList.add("badge", "rounded-pill", "fw-500", "bg-primary-400", "cf_profile_project_badge", "d-flex", "align-items-center", "py-1");
                        badge.textContent = "Hosting";

                        // Create preview button
                        const previewBtn = document.createElement("a");
                        previewBtn.href = freelancerWorkExperiences[i]["preview_link"];
                        previewBtn.classList.add("ms-2", "text-decoration-none", "rounded-pill", "btn-sm", "btn-outline-primary", "cursor-pointer", "border", "border-primary", "cf_profile_project_btn");
                        previewBtn.target = "_blank";

                        // Create span inside the preview button
                        const previewSpan = document.createElement("span");
                        previewSpan.setAttribute("data-bs-toggle", "tooltip");
                        previewSpan.setAttribute("data-bs-placement", "top");
                        previewSpan.setAttribute("title", "Preview Demo");
                        previewSpan.setAttribute("data-bs-original-title", "Preview Demo");
                        previewSpan.textContent = "Preview Demo";

                        // Append span to button
                        previewBtn.appendChild(previewSpan);

                        // Append badge and preview button to badge container
                        badgeContainer.appendChild(badge);
                        badgeContainer.appendChild(previewBtn);

                        // Append everything to card body
                        cardBody.appendChild(anchor);
                        cardBody.appendChild(badgeContainer);

                        // Append card body to card
                        card.appendChild(cardBody);

                        // Append card to main wrapper
                        cardItem.appendChild(card);

                        // Append to container (assuming csf_portfolio_card_container is the parent element)
                        csf_portfolio_card_container.appendChild(cardItem);
                    }


                }
                // *** Work Experience end***
                // portfolio Project Canvas Details
                document.querySelectorAll('[href="#portfolio_project_review_canvas"]').forEach((pp_card)=>{
                    pp_card.addEventListener("click",function(){
                        const   pp_image = document.getElementById("pp_image"),
                                pp_name = document.getElementById("pp_name"),
                                pp_technology = document.getElementById("pp_technology"),
                                pp_hosting_platform = document.getElementById("pp_hosting_platform"),
                                pp_description = document.getElementById("pp_description"),
                                pp_preview_link = document.getElementById("pp_preview_link");

                        const index = pp_card.getAttribute("data-card-index");

                        if(freelancerFlags[1][0] == 1){
                            document.querySelector(".hosting_platform_container").classList.remove("d-none");
                        }else{
                            document.querySelector(".hosting_platform_container").classList.add("d-none");
                        }

                        

                        // Data Initializaing
                        const   new_pp_name = freelancerWorkExperiences[index]["project_name"] !== "" && freelancerWorkExperiences[index]["project_name"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[index]["project_name"].trim() : "Not Available",
                                new_pp_technology = freelancerWorkExperiences[index]["technologies"] !== undefined && freelancerWorkExperiences[index]["technologies"].trim().toLowerCase() !== "none"   ? freelancerWorkExperiences[index]["technologies"].trim() : "Not Available",
                                new_pp_hosting_platform = freelancerWorkExperiences[index]["hosting_platform"] !== undefined && freelancerWorkExperiences[index]["hosting_platform"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[index]["hosting_platform"].trim(): "Not Available",
                                new_pp_description = freelancerWorkExperiences[index]["description"] !== undefined && freelancerWorkExperiences[index]["description"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[index]["description"].trim() : "Description Not available",
                                new_pp_preview_link = freelancerWorkExperiences[index]["preview_link"] !== undefined && freelancerWorkExperiences[index]["preview_link"].trim().toLowerCase() !== "none" ? freelancerWorkExperiences[index]["preview_link"].trim() : "Preview Not available",
                                new_pp_image = freelancerWorkExperiences[index]["thumbnail"] !== undefined ? freelancerWorkExperiences[index]["thumbnail"] : "assets/dummy-profile.jpg" ;

                        // Data Setting
                        pp_image.setAttribute("src",new_pp_image);
                        pp_image.onerror = function(){
                            pp_image.setAttribute("src","assets/dummy-profile.jpg");
                        }
                        pp_name.innerHTML = new_pp_name;
                        pp_technology.innerHTML = new_pp_technology;
                        pp_hosting_platform.innerHTML = new_pp_hosting_platform;
                        pp_description.innerHTML = new_pp_description;
                        pp_preview_link.setAttribute("href",new_pp_preview_link);
                    });
                })
    });
});