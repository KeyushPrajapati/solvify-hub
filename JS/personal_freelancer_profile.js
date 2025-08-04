const withdrawBtn = document.getElementById("profile-withdraw-btn");
const availableWithdrawlAmount = document.getElementById("availableWithdrawlAmount");
withdrawBtn.addEventListener("click",function(){
    Swal.fire({
        title: 'Are you sure?',
        text: `You want to withdraw ₹ ${availableWithdrawlAmount.innerHTML}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `₹${availableWithdrawlAmount.innerHTML}`,
                text:'Your money will be withdrawn within 2-3 working days.',
                icon: 'success'
            }).then(() => {
                // code 
            });
        }
    });
});

const swiper = new Swiper('.portfolio-slider-wrapper', {
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
        slidesPerView: 3.5
      }
    }
  });

// Function to parse flags
function parseFlags(data) {
    return data.split('|').map(pair => pair.split(',').map(Number));
}

// Function to parse work experiences
function parseWorkExperiences(data) {
    return data.split('@').map(entry => {
        const [project_name, preview_link, description, thumbnail, technologies, hosting_platform] = entry.split('|');
        return { project_name, preview_link, description, thumbnail, technologies, hosting_platform };
    });
}

// Portfolio project Canvas Data Start
// var freelancerFlags;
var freelancerWorkExperiences;
document.querySelectorAll('[href="#portfolio_project_review_canvas"]').forEach((pp_card)=>{
    pp_card.classList.add("bg-danger");
    pp_card.addEventListener("click",function(event){
        event.preventDefault(); // Prevent default anchor behavior
        // freelancerFlags = parseFlags(pp_card.getAttribute('data-flags'));
        freelancerWorkExperiences = parseWorkExperiences(pp_card.getAttribute('data-work-experiences'));
        const   pp_image = document.getElementById("pp_image"),
                pp_name = document.getElementById("pp_name"),
                pp_technology = document.getElementById("pp_technology"),
                pp_hosting_platform = document.getElementById("pp_hosting_platform"),
                pp_description = document.getElementById("pp_description"),
                pp_preview_link = document.getElementById("pp_preview_link");
        
                // if(freelancerFlags[1][0] == 1){
                //     document.querySelector(".hosting_platform_container").classList.remove("d-none");
                // }else{
                //     document.querySelector(".hosting_platform_container").classList.add("d-none");
                // }
            
        const   new_pp_name = freelancerWorkExperiences[0]["project_name"] !== "" && freelancerWorkExperiences[0]["project_name"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[0]["project_name"].trim() : "Not Available",
                new_pp_technology = freelancerWorkExperiences[0]["technologies"] !== undefined && freelancerWorkExperiences[0]["technologies"].trim().toLowerCase() !== "none"   ? freelancerWorkExperiences[0]["technologies"].trim() : "Not Available",
                new_pp_hosting_platform = freelancerWorkExperiences[0]["hosting_platform"] !== undefined && freelancerWorkExperiences[0]["hosting_platform"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[0]["hosting_platform"].trim(): "Not Available",
                new_pp_description = freelancerWorkExperiences[0]["description"] !== undefined && freelancerWorkExperiences[0]["description"].trim().toLowerCase() !== "none"  ? freelancerWorkExperiences[0]["description"].trim() : "Description Not Available",
                new_pp_preview_link = freelancerWorkExperiences[0]["preview_link"] !== undefined && freelancerWorkExperiences[0]["preview_link"].trim().toLowerCase() !== "none" ? freelancerWorkExperiences[0]["preview_link"].trim() : "Preview Not Available",
                new_pp_image = freelancerWorkExperiences[0]["thumbnail"] !== undefined ? freelancerWorkExperiences[0]["thumbnail"] : "assets/dummy-profile.jpg" ;

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
// Portfolio project Canvas Data End
// Delete Project
document.addEventListener('DOMContentLoaded', () => {
    // Select all forms with id starting with "delete_portfolio_project_form_"
    const deleteForms = document.querySelectorAll('form[id^="delete_portfolio_project_form_"]');

    deleteForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting immediately

        // Show SweetAlert confirmation
        Swal.fire({
          title: 'Are you sure?',
          text: "Do you really want to delete this project?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            // Submit the form if user confirms
            form.submit();
          }
        });
      });
    });
});

//Project ID Transfer for Edit
document.addEventListener("DOMContentLoaded", () => {
    // Select all edit buttons that open the modal
    const editButtons = document.querySelectorAll('button[data-bs-target="#portfolio_edit_project_modal"]');
    editButtons.forEach(button => {
        button.addEventListener("click", () => {
                // Get the data-work-exp-id from clicked button
            const workExpId = button.getAttribute("data-work-exp-id");
            // Set it into the hidden input field inside the modal form
            const hiddenInput = document.querySelector('#edit_portfolio_project_form input[name="work_experience_id"]');

            if (hiddenInput) {
                hiddenInput.value = workExpId;
            }
        });
    });
});
// Skills - Select Field
new MultiSelectTag('edit_user_skills',{
    placeholder: 'Search',
    tagColor: {
        textColor: 'var(--bs-primary-100)',
        borderColor: 'var(--bs-primary-100)',
        bgColor: 'var(--bs-primary-800)',
    },
    onChange: function(values) {
    const hiddenTechInput = document.getElementById("edit_user_skills_hidden_input");
        hiddenTechInput.setAttribute("value",getValuesInString(values));
    }
});
// Portfolio Project Technologies Field
new MultiSelectTag('pp_technologies',{
    placeholder: 'Search',
    tagColor: {
        textColor: 'var(--bs-primary-100)',
        borderColor: 'var(--bs-primary-100)',
        bgColor: 'var(--bs-primary-800)',
    },
    onChange: function(values) {
    const hiddenTechInput = document.getElementById("pp_technologies_hidden_input");
        hiddenTechInput.setAttribute("value",getValuesInString(values));
    }
});
// Portfolio Project Edit Technologies Field
new MultiSelectTag('edit_pp_technologies',{
    placeholder: 'Search',
    tagColor: {
        textColor: 'var(--bs-primary-100)',
        borderColor: 'var(--bs-primary-100)',
        bgColor: 'var(--bs-primary-800)',
    },
    onChange: function(values) {
    const hiddenTechInput = document.getElementById("edit_pp_technologies_hidden_input");
        hiddenTechInput.setAttribute("value",getValuesInString(values));
    }
});
