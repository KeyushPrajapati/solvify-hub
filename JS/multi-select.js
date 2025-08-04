class MultiSelectDropdown {
    constructor(selectId, dropdownId, badgeContainerId, hiddenInputId) {
        this.selectElement = document.querySelector(selectId);
        this.dropdownElement = document.querySelector(dropdownId);
        this.badgeContainer = document.querySelector(badgeContainerId);
        this.hiddenInput = document.querySelector(hiddenInputId);
        this.selectedOptions = [];

        // Check if all required elements are present
        if (this.selectElement && this.dropdownElement && this.badgeContainer && this.hiddenInput) {
            this.init();
        } else {
            console.warn(`Warning: Missing one or more elements for MultiSelectDropdown with select ID: ${selectId}`);
        }
    }

    init() {
        // Toggle dropdown visibility on click
        this.selectElement.addEventListener('click', () => {
            this.dropdownElement.classList.toggle('active');
        });

        // Handle option selection
        this.dropdownElement.addEventListener('click', (event) => {
            const selectedValue = event.target.getAttribute('data-value');
            if (this.selectedOptions.includes(selectedValue)) {
                this.selectedOptions = this.selectedOptions.filter(option => option !== selectedValue);
                event.target.classList.remove('selected');
                this.removeBadge(selectedValue);
            } else {
                this.selectedOptions.push(selectedValue);
                event.target.classList.add('selected');
                this.createBadge(selectedValue);
            }
            this.updateHiddenInput();
        });

        // Close dropdown if the user clicks outside
        document.addEventListener('click', (event) => {
            if (!this.selectElement.contains(event.target) && !this.dropdownElement.contains(event.target)) {
                this.dropdownElement.classList.remove('active');
            }
        });
    }

    createBadge(option) {
        const badge = document.createElement('div');
        badge.className = 'badge-capsule';
        badge.innerHTML = `<div class="fw-500">${option}</div> <span class="remove-btn material-icons">close</span>`;
        this.badgeContainer.appendChild(badge);

        badge.querySelector('.remove-btn').addEventListener('click', () => {
            this.removeOption(option);
        });
    }

    removeOption(optionToRemove) {
        this.selectedOptions = this.selectedOptions.filter(option => option !== optionToRemove);
        const optionElement = Array.from(this.dropdownElement.children).find(
            child => child.getAttribute('data-value') === optionToRemove
        );
        if (optionElement) optionElement.classList.remove('selected');
        this.removeBadge(optionToRemove);
        this.updateHiddenInput();
    }

    removeBadge(optionToRemove) {
        const badge = Array.from(this.badgeContainer.children).find(
            child => child.textContent.includes(optionToRemove)
        );
        if (badge) this.badgeContainer.removeChild(badge);
    }

    updateHiddenInput() {
        this.hiddenInput.setAttribute('value',this.selectedOptions.join(','));
        // Check if the validation attribute is set to "true"
        if (this.hiddenInput.getAttribute('validation') === 'true') {
            // Trigger jQuery validation if validation is enabled
            $(this.hiddenInput).valid();
        }
    }

    // Method to clear all selected options and badges
    clearSelection() {
        // Clear selected options array
        this.selectedOptions = [];

        // Remove 'selected' class from all options in the dropdown
        Array.from(this.dropdownElement.children).forEach(option => {
            option.classList.remove('selected');
        });

        // Remove all badges from the badge container
        this.badgeContainer.innerHTML = '';

        // Clear hidden input field
        this.hiddenInput.value = '';
    }
}

// Initialize MultiSelectDropdown only if required elements are present
const skillsDropdown = document.querySelector('#customSelect1') && document.querySelector('#dropdownOptions1') && 
    document.querySelector('#badgeContainer1') && document.querySelector('#selectedOptionsInput1') 
    ? new MultiSelectDropdown('#customSelect1', '#dropdownOptions1', '#badgeContainer1', '#selectedOptionsInput1') 
    : null;

const editSkills = document.querySelector('#editSkillSelect') && document.querySelector('#skillOptions') && 
    document.querySelector('#editSkillBadgeContainer') && document.querySelector('#editSkillOptionsInput') 
    ? new MultiSelectDropdown('#editSkillSelect', '#skillOptions', '#editSkillBadgeContainer', '#editSkillOptionsInput') 
    : null;
    
const hostingServicesDropDown = document.querySelector('#hostServicesSelect') && document.querySelector('#hostingServicesOptions') && 
    document.querySelector('#hostingServices') && document.querySelector('#hostServicebadge') 
    ? new MultiSelectDropdown('#hostServicesSelect', '#hostingServicesOptions', '#hostServicebadge', '#hostingServices') 
    : null;
const editHostingServices = document.querySelector('#editHostServicesSelect') && document.querySelector('#editHostingServicesOptions') && 
    document.querySelector('#editHostingServices') && document.querySelector('#editHostServicebadge') 
    ? new MultiSelectDropdown('#editHostServicesSelect', '#editHostingServicesOptions', '#editHostServicebadge', '#editHostingServices') 
    : null;
const categoryDropdown = document.querySelector('#customSelect2') && document.querySelector('#dropdownOptions2') && 
    document.querySelector('#badgeContainer2') && document.querySelector('#selectedOptionsInput2') 
    ? new MultiSelectDropdown('#customSelect2', '#dropdownOptions2', '#badgeContainer2', '#selectedOptionsInput2') 
    : null;

const technologyDropdown = document.querySelector('#customSelect3') && document.querySelector('#dropdownOptions3') && 
    document.querySelector('#badgeContainer3') && document.querySelector('#selectedOptionsInput3') 
    ? new MultiSelectDropdown('#customSelect3', '#dropdownOptions3', '#badgeContainer3', '#selectedOptionsInput3') 
    : null;
const getQuoteSkills = document.querySelector('#getQuotSkillSelect') && document.querySelector('#getQuotSkillOptions') && 
    document.querySelector('#getQuotSkillsContainers') && document.querySelector('#getQuotSkillsOptionsInput') 
    ? new MultiSelectDropdown('#getQuotSkillSelect', '#getQuotSkillOptions', '#getQuotSkillsContainers', '#getQuotSkillsOptionsInput') 
    : null;
// console - add new project
const webTechUsed = document.querySelector('#webTechSelect') && document.querySelector('#webTechOptions') && 
    document.querySelector('#webTechbadgeContainer') && document.querySelector('#webTechInput') 
    ? new MultiSelectDropdown('#webTechSelect', '#webTechOptions', '#webTechbadgeContainer', '#webTechInput') 
    : null;
// Onboarding multiple project 
const projectTech = document.querySelector('#projectTechSelect_1') && document.querySelector('#projectTechOptions_1') && 
    document.querySelector('#projectTechBadgeContainer_1') && document.querySelector('#projectTechInput_1') 
    ? new MultiSelectDropdown('#projectTechSelect_1', '#projectTechOptions_1', '#projectTechBadgeContainer_1', '#projectTechInput_1') 
    : null;
const hostProjectTech = document.querySelector('#hostProjectTechSelect_1') && document.querySelector('#hostProjectTechOptions_1') && 
    document.querySelector('#hostProjectTechBadgeContainer_1') && document.querySelector('#hostProjectTechInput_1') 
    ? new MultiSelectDropdown('#hostProjectTechSelect_1', '#hostProjectTechOptions_1', '#hostProjectTechBadgeContainer_1', '#hostProjectTechInput_1') 
    : null;
const reviewProjectTech = document.querySelector('#reviewProjectTechSelect_1') && document.querySelector('#reviewProjectTechOptions_1') && 
    document.querySelector('#reviewProjectTechBadgeContainer_1') && document.querySelector('#reviewProjectTechInput_1') 
    ? new MultiSelectDropdown('#reviewProjectTechSelect_1', '#reviewProjectTechOptions_1', '#reviewProjectTechBadgeContainer_1', '#reviewProjectTechInput_1') 
    : null;
// personla_freelancer_profile.html
const portfolio_tech = document.querySelector('#portfolio_project_techs_select') && document.querySelector('#portfolio_project_Options') && 
    document.querySelector('#portfolio_project_badge_container') && document.querySelector('#portfolio_project_input') 
    ? new MultiSelectDropdown('#portfolio_project_techs_select', '#portfolio_project_Options', '#portfolio_project_badge_container', '#portfolio_project_input') 
    : null;
const portfolio_platform = document.querySelector('#portfolio_hosting_platform_select') && document.querySelector('#portfolio_hosting_platform_options') && 
    document.querySelector('#portfolio_hosting_platform_badge_Container') && document.querySelector('#portfolio_hosting_platform_Input') 
    ? new MultiSelectDropdown('#portfolio_hosting_platform_select', '#portfolio_hosting_platform_options', '#portfolio_hosting_platform_badge_Container', '#portfolio_hosting_platform_Input') 
    : null;
const edit_portfolio_tech = document.querySelector('#edit_portfolio_project_techs_select') && document.querySelector('#edit_portfolio_project_Options') && 
    document.querySelector('#edit_portfolio_project_badge_container') && document.querySelector('#edit_portfolio_project_input') 
    ? new MultiSelectDropdown('#edit_portfolio_project_techs_select', '#edit_portfolio_project_Options', '#edit_portfolio_project_badge_container', '#edit_portfolio_project_input') 
    : null;
const edit_portfolio_platform = document.querySelector('#edit_portfolio_hosting_platform_select') && document.querySelector('#edit_portfolio_hosting_platform_options') && 
    document.querySelector('#edit_portfolio_hosting_platform_badge_Container') && document.querySelector('#edit_portfolio_hosting_platform_Input') 
    ? new MultiSelectDropdown('#edit_portfolio_hosting_platform_select', '#edit_portfolio_hosting_platform_options', '#edit_portfolio_hosting_platform_badge_Container', '#edit_portfolio_hosting_platform_Input') 
    : null;


// Function to clear all selections across dropdown instances
// function clearAllSelections() {
//     skillsDropdown?.clearSelection();
//     categoryDropdown?.clearSelection();
//     technologyDropdown?.clearSelection();
// }
