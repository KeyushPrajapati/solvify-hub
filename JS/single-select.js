class SingleSelectDropdown {
    constructor(containerId, inputId) {
        this.container = document.querySelector(`#${containerId}`);
        this.hiddenInputField = document.querySelector(`#${inputId}`);

        // Check if required elements exist, exit if they don't
        if (!this.container || !this.hiddenInputField) {
            console.warn(`Warning: Missing container or hidden input for ${containerId} or ${inputId}`);
            return;
        }

        this.select = this.container.querySelector('.custom-select');
        this.dropdownOptions = this.container.querySelector('.select-options');
        this.selectedOption = null;

        // Initialize only if required elements are found
        if (this.select && this.dropdownOptions) {
            this.init();
        } else {
            console.warn(`Warning: Missing select or dropdown options element in container ${containerId}`);
        }
    }

    init() {
        // Toggle dropdown visibility on click
        this.select.addEventListener('click', () => {
            this.toggleDropdown();
        });

        // Handle option selection
        this.dropdownOptions.addEventListener('click', (event) => {
            const selectedValue = event.target.getAttribute('data-value');
            this.selectOption(selectedValue, event.target);
        });

        // Close the dropdown if the user clicks outside of it
        document.addEventListener('click', (event) => {
            if (!this.container.contains(event.target)) {
                this.closeDropdown();
            }
        });
    }

    toggleDropdown() {
        this.dropdownOptions.classList.toggle('active');
    }

    closeDropdown() {
        this.dropdownOptions.classList.remove('active');
    }

    selectOption(value, element) {
        // Deselect previously selected option
        if (this.selectedOption) {
            this.selectedOption.classList.remove('selected');
        }

        // Select new option
        this.select.textContent = value;
        this.selectedOption = element;
        this.selectedOption.classList.add('selected');

        // Update hidden input field
        this.hiddenInputField.setAttribute('value', value);

        // Trigger re-validation if 'validation' attribute is set to "true"
        if (this.hiddenInputField.getAttribute('validation') === 'true') {
            $(this.hiddenInputField).valid();
        }

        // Close dropdown after selection
        this.closeDropdown();
    }

    // Method to clear selection
    clearSelection() {
        // Clear displayed selected value
        this.select.textContent = 'Select an option';  // Placeholder text
        // Remove 'selected' class from previously selected option
        if (this.selectedOption) {
            this.selectedOption.classList.remove('selected');
            this.selectedOption = null;
        }
        // Clear hidden input value
        this.hiddenInputField.value = '';
    }
}

// Initialize SingleSelectDropdown instances only if their containers exist
const state = document.querySelector('#stateSelect') ? new SingleSelectDropdown('stateSelect', 'stateHiddenInput') : null;
const city = document.querySelector('#citySelect') ? new SingleSelectDropdown('citySelect', 'cityHiddenSelect') : null;
const editState = document.querySelector('#editStateSelect') ? new SingleSelectDropdown('editStateSelect', 'editStateHiddenInput') : null;
const editCity = document.querySelector('#editCitySelect') ? new SingleSelectDropdown('editCitySelect', 'editCityHiddenSelect') : null;
const dropdown3 = document.querySelector('#singleSelect3') ? new SingleSelectDropdown('singleSelect3', 'selectedOptionInput3') : null;
const hostingProviderSelectInCartForm = document.querySelector('#hostingProviderSelect') ? new SingleSelectDropdown('hostingProviderSelect', 'hostingProviderYesOrNo') : null;
const editHostingProviderSelectInCartForm = document.querySelector('#editHostingProviderSelect') ? new SingleSelectDropdown('editHostingProviderSelect', 'editHostingProviderYesOrNo') : null;
const documentType = document.querySelector('#documentTypeSelect') ? new SingleSelectDropdown('documentTypeSelect', 'documentTypeInput') : null;
const currencyType = document.querySelector('#currencySelect') ? new SingleSelectDropdown('currencySelect', 'currencyHiddenInput') : null;
const getQuoteBudgetPlan = document.querySelector('#getQuoteBudgetPlanSelect') ? new SingleSelectDropdown('getQuoteBudgetPlanSelect', 'getQuoteBudgetPlanHiddenInput') : null;
const roleSelect = document.querySelector('#roleSelect') ? new SingleSelectDropdown('roleSelect', 'roleHiddenInput') : null;
const modeSelect = document.querySelector('#modeSelect') ? new SingleSelectDropdown('modeSelect', 'modeHiddenInput') : null;

// Example function to clear selections on all dropdowns
// function clearAllSelections() {
//     dropdown1?.clearSelection();
//     dropdown2?.clearSelection();
//     dropdown3?.clearSelection();
// }