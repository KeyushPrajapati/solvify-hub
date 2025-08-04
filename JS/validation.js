$(document).ready(function() {

    // Allow: alphabets only (A-Z, a-z), backspace, and space
    $(document).on("keypress", ".alphabet_only", function(event) {
        let charCode = event.which;
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 8 || charCode === 32) {
            return true;
        }
        return false;
    });

    // Allow: digits only (0-9) and backspace
    $(document).on("keypress", ".digits-only", function(event) {
        let charCode = event.which;
        if ((charCode >= 48 && charCode <= 57) || charCode === 8) {
            return true;
        }
        return false;
    });
    
     // Allow: alphabets (A-Z, a-z), digits (0-9), and backspace
    $(document).on("keypress", ".alpha-numeric", function(event) {
        let charCode = event.which;
        if ((charCode >= 48 && charCode <= 57) || // Digits 0-9
            (charCode >= 65 && charCode <= 90) || // Uppercase A-Z
            (charCode >= 97 && charCode <= 122) || // Lowercase a-z
            charCode === 8) { // Backspace
            return true;
        }
        return false; // Prevent other characters
    });


    // Jquery Methods
    // Git details verification start
    $.validator.addMethod("githubUsername", function (value) {
        return /^[a-zA-Z0-9-]{1,39}$/.test(value);
      }, "Enter a valid GitHub username or organization name.");

    $.validator.addMethod("repoName", function (value) {
    return /^[a-zA-Z0-9_.-]+$/.test(value);
    }, "Enter a valid repo name.");

    $.validator.addMethod("branchName", function (value) {
    return /^[a-zA-Z0-9._/-]+$/.test(value);
    }, "Enter a valid branch name.");

    $.validator.addMethod("zipLink", function (value) {
    return /^https:\/\/github\.com\/.+\.zip$/.test(value);
    }, "Enter a valid GitHub zip link.");
    // Git details verification End


    // only alphabets
    $.validator.addMethod("alphabetOnly", function(value, element) {
        return this.optional(element) || /^[A-Za-z]+$/.test(value);
    }, "Only alphabets are allowed and no spaces.");
    // safe input
    $.validator.addMethod("safeInput", function(value, element) {
        // Regular expression to allow:
        // - Alphabets (A-Z, a-z)
        // - Digits (0-9)
        // - Safe punctuation marks: .,!?&-_@()[]{}:;'" (can be adjusted based on requirements)
        return this.optional(element) || /^[A-Za-z0-9.,!?&\-@()\[\]{}:;'"]*$/.test(value);
    }, "Only alphabets, digits, and safe punctuation marks are allowed.");
    
    // only alphabets and spaces
    $.validator.addMethod("alphabetAndSpaces", function(value, element) {
        return this.optional(element) || /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(value); // Allow alphabets and single spaces between words
    }, "Only alphabets and single spaces between words are allowed.");
    
    // No space allowed
    $.validator.addMethod("noSpaceAllowed", function(value, element) {
        return this.optional(element) || !/\s/.test(value);
    }, "Spaces are not allowed.");
    
    // Age validation
    $.validator.addMethod("validAge", function(value, element, minAge) {
        // Check if input is a valid date
        var inputDate = new Date(value);
        if (isNaN(inputDate.getTime())) return false; // Invalid date
        // Calculate age based on the current date
        var today = new Date();
        var age = today.getFullYear() - inputDate.getFullYear();
        var monthDifference = today.getMonth() - inputDate.getMonth();
        var dayDifference = today.getDate() - inputDate.getDate();
    
        // Adjust age if birth date has not occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
        // Check if calculated age is greater than or equal to minAge
        return age >= minAge;
    }, "Age must be greater then 15.");

    // Email validation
    $.validator.addMethod("emailFormat", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    }, "Please enter a valid email address.");

    // Username Validation
    $.validator.addMethod("userNameValid", function(value, element) {
        // Regular expression to allow uppercase, lowercase, numbers, and special characters
        const regex = /^[a-zA-Z0-9!@#$%^&*]*$/;
        return this.optional(element) || regex.test(value);
    }, "Username can only contain letters, numbers, and special characters (!@#$%^&*).");
    
    // Social Media link Varification
    // Linked In
    $.validator.addMethod("linkedinLinkValid", function(value, element) {
        const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9\-_]+(\/.*)?(\?.*)?$/;
        return this.optional(element) || linkedinRegex.test(value);
    }, "Please enter a valid LinkedIn profile URL.");
    
    // Twitter
    $.validator.addMethod("twitterLinkValid", function(value, element) {
        const twitterRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[A-Za-z0-9._]+(\/.*)?(\?.*)?$/;
        return this.optional(element) || twitterRegex.test(value);
    }, "Please enter a valid Twitter profile URL.");
    
    // Instagram 
    $.validator.addMethod("instagramLinkValid", function(value, element) {
        const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9.\-_]+(\/.*)?(\?.*)?$/;
        return this.optional(element) || instagramRegex.test(value);
    }, "Please enter a valid Instagram profile URL.");
    
    // facebook
    $.validator.addMethod("facebookLinkValid", function(value, element) {
        const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9.\-_]+(\/.*)?(\?.*)?$/;
        return this.optional(element) || facebookRegex.test(value);
    }, "Please enter a valid Facebook profile URL.");    
    
    // github
    $.validator.addMethod("githubLinkValid", function(value, element) {
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9\-]+(\/.*)?$/;
        return this.optional(element) || githubRegex.test(value);
    }, "Please enter a valid GitHub URL");
    
    // General Link
    $.validator.addMethod("generalLinkValid", function(value, element) {
        const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
        return this.optional(element) || urlRegex.test(value);
    }, "Please enter a valid URL.");
    
    // Address validation  allowed marks , . - ( ) _ & ; : 
    $.validator.addMethod("validAddress", function(value, element) {
        const addressRegex = /^[A-Za-z0-9\s`,\.\-:_&();]+$/;
        return this.optional(element) || addressRegex.test(value);
    }, "Please Enter valid address.");
    
    // Indian Contact Number verification
    $.validator.addMethod("contactNumber", function(value, element) {
        return this.optional(element) || /^[6-9]\d{9}$/.test(value);
    }, "Please enter a valid 10-digit mobile number.");

    // no SQL syntax
    $.validator.addMethod("noSQLInjection", function (value, element) {
        // Allow normal text but block SQL-like statements
        const sqlSyntaxPattern = /\b(SELECT\s+\*?|INSERT\s+INTO|DELETE\s+FROM|UPDATE\s+\w+\s+SET|DROP\s+TABLE|ALTER\s+TABLE|CREATE\s+TABLE|UNION\s+SELECT|EXEC\s+\w+|MERGE\s+|WHERE\s+.*=.*)\b.*[;]?/i;
        // Check if the input matches SQL syntax
        return this.optional(element) || !sqlSyntaxPattern.test(value.trim());
    }, "Invalid input. Potential SQL syntax detected. Please refine your input.");
    // min max price validation method
   // Add method for validating Max Price
$.validator.addMethod("validMaxPrice", function (value, element, params) {
    const minPrice = parseFloat($(params).val()); // Reference to minPrice field
    const maxPrice = parseFloat(value);

    // Bypass validation if minPrice or maxPrice is empty
    if (isNaN(minPrice) || isNaN(maxPrice)) {
        return true;
    }

    // Validate maxPrice >= minPrice
    return maxPrice >= minPrice;
}, "Enter a valid Max Price.");

// Add method for validating Min Price
$.validator.addMethod("validMinPrice", function (value, element, params) {
    const maxPrice = parseFloat($(params).val()); // Reference to maxPrice field
    const minPrice = parseFloat(value);

    // Bypass validation if maxPrice or minPrice is empty
    if (isNaN(maxPrice) || isNaN(minPrice)) {
        return true;
    }

    // Validate minPrice <= maxPrice
    return minPrice <= maxPrice;
}, "Enter a valid Min Price.");

// file size up to 10MB & .jpg | .png | .jpeg validation method
$.validator.addMethod("fileSize10MB",function (value, element) {
        // Check if a file is selected
        if (element.files.length === 0) {
            return true; // No file selected
        }
        const file = element.files[0]; // Get the first file
        const fileSize = file.size / (1024 * 1024); // Convert file size to MB
        const fileType = file.type; // Get file type

        // Allowed MIME types for images
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

        // Validate size and type
        return fileSize <= 10 && allowedTypes.includes(fileType);
    }, "Please upload a file of type JPG, JPEG, or PNG and size up to 10 MB.");

//   ZIP file validation
$.validator.addMethod("zipFileOnly",function (value, element) {
      if (element.files.length === 0) {
        return true; // No file selected
      }
  
      const file = element.files[0]; // Get the first file
      const fileType = file.name.split(".").pop().toLowerCase(); // Get file extension
  
      // Check if the file extension is 'zip'
      return fileType === "zip";
    },"Please upload a valid ZIP file.");

//   file size validaiton 25MB max
  $.validator.addMethod( "fileSize25MB",function (value, element) {
      if (element.files.length !== 0) {
          const file = element.files[0]; // Get the first file
          const fileSize = file.size / (1024 * 1024); // Convert file size to MB
          // Check if file size is within 25MB
          return fileSize <= 25;
      }else{
        return true
      }
    }, "File size must not exceed 25 MB." );

 // select values - for - skills and technology fields 

 $.validator.addMethod("commaSeparatedValues", function(value, element) {

    // Only allow alphabets separated by commas. No spaces or symbols.

    return this.optional(element) || /.*/.test(value);

}, "Please select atleast one value.");

// comma sperated values - for - skills and technology fields 

$.validator.addMethod("commaSeparatedWords", function(value, element) {

    return this.optional(element) || /^([a-zA-Z]+)(,[a-zA-Z]+)*$/.test(value);

}, "Please enter only comma-separated words (no spaces or symbols).");

//   Validate txt,DOC, DOCX, and PDF File Types
    $.validator.addMethod("docFile",function (value, element) {
          if (element.files.length !== 0) {
            const file = element.files[0]; // Get the first file
            const fileType = file.name.split(".").pop().toLowerCase(); // Get file extension
            // Check if the file extension is 'doc', 'docx', or 'pdf'
            return fileType === "doc" || fileType === "docx" || fileType === "pdf" || fileType === "txt";
          }else{
            return true
          }
    },"Only DOC, DOCX, and PDF files are allowed.");

    $.validator.addMethod("onlyPdfFile",function (value, element) {
        if (element.files.length !== 0) {
          const file = element.files[0]; // Get the first file
          const fileType = file.name.split(".").pop().toLowerCase(); // Get file extension
          // Check if the file extension is  'pdf'
          return fileType === "pdf";
        }else{
          return true
        }
  },"Only PDF files are allowed.");
    // Email Form
    $("#email_form").validate({
        rules: {
            useremail:{
                required:true,
                noSpaceAllowed:true,
                emailFormat:true,
                noSQLInjection:true
            },
        },
        messages:{
    
            useremail: {
                required: "Please Enter the Email."
            },
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    // Reset Password Form
    $("#reset_password_form").validate({
        rules: {
            userpassword: {
                required:true,
                noSpaceAllowed:true,
                minlength: 8,
                noSQLInjection:true
            },
            confirmpassword: {
                required:true,
                noSpaceAllowed:true,
                minlength:8,
                equalTo: "#userpassword",
                noSQLInjection:true
            },
        },
        messages:{
            userpassword: {
                required: "Please Enter the password.",
                minlength:"Password length must be 8 characters",
                maxlength:"Password length must be 8 characters"
            },
            confirmpassword: {
                required: "Please Enter the confirm password.",
                minlength:"Password length must be 8 characters",
                maxlength:"Password length must be 8 characters",
                equalTo:"Password and confirm password do not match."
            },
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    // Login Form
    $("#login_form").validate({
        rules: {
            username:{
                required:true,
                userNameValid: true,
                minlength:4,
                remote: {
                    url: $("[data-username-check-url]").attr("data-username-check-url"),
                    type: "post",
                    data: {
                        username: function () {
                            return $("#username").val();
                        },
                        csrfmiddlewaretoken: function () {
                            return $("[data-csrf-token]").attr("data-csrf-token");
                        }
                    }
                },
                noSQLInjection:true
            },    
            userpassword: {
                required:true,
                noSpaceAllowed:true,
                minlength: 8,
                noSQLInjection:true
            },
        },
        messages:{
            username: {
                required: "Please Enter the Username.",
                minlength:"Username must be more than 3 characters long.",
                remote:"Username is already taken."
            },
            userpassword: {
                required: "Please Enter the password.",
                minlength:"Password length must be 8 characters",
                maxlength:"Password length must be 8 characters"
            }
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    //Sign Up Form
    $("#signup_form").validate({
        rules: {
            username:{
                required:true,
                userNameValid: true,
                minlength:4,
                remote: {
                    url: $("[data-username-check-url]").attr("data-username-check-url"),
                    type: "post",
                    data: {
                        username: function () {
                            return $("#username").val();
                        },
                        csrfmiddlewaretoken: function () {
                            return $("[data-csrf-token]").attr("data-csrf-token");
                        }
                    }
                },
                noSQLInjection:true
            },    
            useremail:{
                required:true,
                noSpaceAllowed:true,
                emailFormat:true,
                noSQLInjection:true
            },
            userpassword: {
                required:true,
                noSpaceAllowed:true,
                minlength: 8,
                noSQLInjection:true
            },
            confirmpassword: {
                required:true,
                noSpaceAllowed:true,
                minlength:8,
                equalTo: "#userpassword",
                noSQLInjection:true
            },
        },
        messages:{
            username: {
                required: "Please Enter the Username.",
                minlength:"Username must be more than 3 characters long.",
                remote:"Username is already taken."
            },
            useremail: {
                required: "Please Enter the Email."
            },
            userpassword: {
                required: "Please Enter the password.",
                minlength:"Password length must be 8 characters",
                maxlength:"Password length must be 8 characters"
            },
            confirmpassword: {
                required: "Please Enter the confirm password.",
                minlength:"Password length must be 8 characters",
                maxlength:"Password length must be 8 characters",
                equalTo:"Password and confirm password do not match."
            },
        },
        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    // Initialize the jQuery Validation plugin
    $("#onboarding-form").validate({
      rules: {
        // step 1
        role:{
            required:true
        },
        // Freelancer role 
        freelancer_role:{
            required:true
        },
       
        // step 3
        firstname: {
            required:true,
            alphabetAndSpaces: true
        },
        lastname: {
            required:true,
            alphabetAndSpaces: true
        },
        contact:{
            required:true,
            min:0,
            contactNumber:true
        },
        dateOfBirth:{
            required:true,
            validAge: 15
        },
        gender:{
            required:true
        },
        profileImage:{
            required:true,
            fileSize10MB:true,
        },
        // step 3
        hosting_services:{
            required:true,
            commaSeparatedValues:true,
        },
        skills:{
            required:true,
            commaSeparatedValues:true,
        },
        other_services:{
            commaSeparatedWords:true,
        },
        // step 4
        descriptionTitle:{
            required:true,
            maxlength:50,
            noSQLInjection:true
        },
        bioText:{
            required:true,
            maxlength:500,
            noSQLInjection:true
        },
        experience:{
            required:true,
            maxlength:2,
            max:99
        },
        // step 5
        userAddressLine1:{
            required:true,
            validAddress:true,
            maxlength:200,
            noSQLInjection:true
        },
        userAddressLine2:{
            validAddress:true,
            maxlength:200,
            noSQLInjection:true
        },
        postalCode:{
            required:true,
            maxlength:6
        },
        country:{
            required:true,
        },
        state:{
            required:true,
        },
        city:{
            required:true,
        },
        // step 6
        facebookLink:{
            facebookLinkValid:true
        },
        instagramLink:{
            instagramLinkValid:true
        },
        githubLink:{
            githubLinkValid:true
        },
        linkedInLink:{
            linkedinLinkValid:true
        },
        // WorK Exp Projects
        "project_name[]":{
            safeInput:true,
            noSQLInjection:true
        },
        "video_link[]":{
            generalLinkValid:true,
        },
        "description[]":{
            maxlength:500,
            safeInput:true
        }

      },
      messages: {
        // step 1
        role: { 
            required: "Please Select the role."
        },
        // Freelancer role 
        freelancer_role:{
            required: "Please select the role."
        },
          // step 2
        hosting_services:{
            required:"Hosting Services are required.",
        },
        skills:{
            required:"Skills are required."
        },
        other_services:{
             commaSeparatedWords:"Only letters and commas allowed (no spaces or symbols)."
        },
        // step 3
        firstname: {
            required: "First Name is required.",
        },
        lastname: {
            required: "Last Name is required.",
        },
        contact:{
            required: "Contact Number is required.",
            min:"Please Enter Valid Contact No."
        },
        dateOfBirth:{
            required: "Date Of Birth is required.",
        },
        gender:{
            required: "Select the gender."
        },
        profileImage:{
             required: "Profile image is required."
        },
        // step 4
        descriptionTitle:{
            required:"Description Title is required.",
            maxlength:"50 Letter max in title."
        },
        bioText:{
            required:"Bio is required.",
            maxlength:"500 Letter max in title."
        },
        experience:{
            required:"Experience is required.",
            maxlength:"Max 2 digits allowed.",
            max:"0 to 99 Digits allowed."
        },
        // step 5
        userAddressLine1:{
            required:"Address is required",
            maxlength:"Address length is no more than 200 letters."
        },
        postalCode:{
            required:"Postal Code is required",
            maxlength:"Postal Code length must be 6 digits."
        },
        state:{
            required:"State is required",
        },
        city:{
            required:"City is required",
        }
        
      },
      errorElement: "div",
      errorPlacement: function(error, element) {
        if (element.attr("name") === "role" ) {
            error.insertAfter(".role-type");
        }else if(element.attr("name") === "gender" || element.attr("name") === "freelancer_role"){
            error.insertAfter(element.parent("div"));
        }else if(element.attr("name") === "profileImage"){
            if(document.getElementById("previewImage")){
                error.insertAfter(document.getElementById("previewImage"));
            }
        }else {
            error.insertAfter(element);
        } 
        
      }
    });

    // profile modal form
    $("#editPersonalDetailsForm").validate({
        rules:{
            username:{
                alphabetOnly: true
            },
            useremail:{
                noSpaceAllowed:true,
                emailFormat:true
            },
            firstname: {
                alphabetAndSpaces: true
            },
            lastname: {
                alphabetAndSpaces: true
            },
            contact:{
                min:0,
                contactNumber:true
            },
            dateOfBirth:{
                validAge: 15
            },
            facebookLink:{
                facebookLinkValid:true
            },
            instagramLink:{
                instagramLinkValid:true
            },
            githubLink:{
                githubLinkValid:true
            },
            linkedInLink:{
                linkedinLinkValid:true
            }
        },
        messages:{
            contact:{
                min:"Please Enter Valid Contact No."
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "role" ) {
                error.insertAfter(".role-type");
            }else if(element.attr("name") === "gender"){
                error.insertAfter(element.parent("div"));
            }else if(element.attr("name") === "profileImage"){
                error.insertBefore(element.parent("label"));
            }else {
                error.insertAfter(element);
            } 
            
          }
    });

    // edit bio in profile modal
    $("#editPersonalDetailsForm").validate({
        rules:{
            descriptionTitle:{
                maxlength:50,
                noSQLInjection:true
            },
            bioText:{
                maxlength:500,
                noSQLInjection:true
            },
            experience:{
                maxlength:2,
                max:99
            },
        },
        messages:{
            descriptionTitle:{
                maxlength:"50 Letter max in title."
            },
            bioText:{
                maxlength:"500 Letter max in title."
            },
            experience:{
                maxlength:"Max 2 digits allowed.",
                max:"0 to 99 Digits allowed."
            }
        },
        errorPlacement:function(error,element){
            error.insertAfter(element);
        }
    });

    // infoVerification Page form validations start
    // indentity verification
    $("#identity-verify-form").validate({
        rules:{
            documentType:{
                required:true
            },
            userDocument:{
                required:true
            },
            userDocumentWithFace:{
                required:true
            }
        },
        messages:{
            documentType:{
                required:"Please Select the document."
            },
            userDocument:{
                required:"Please upload the document."
            },
            userDocumentWithFace:{
                required:"Please upload the document."
            }
        },
        errorPlacement:function(error,element){
            if (element.attr("name") === "userDocument" || element.attr("name") === "userDocumentWithFace"){
                error.insertAfter(element.parent("label"));
            }else{
                error.insertAfter(element);
            }
        }
    });

    $("#contactVerificationForm").validate({
        rules:{
            contactVerify:{
                required:true,
                contactNumber:true
            }
        },
        messages:{
            contactVerify:{
                required:"Please Enter the contact Number."
            }
        },
        errorPlacement:function(error,element){
                error.insertAfter(element);
        }
    });

    $("#emailVerificationForm").validate({
        rules:{
            emailVerify:{
                required:true,
                noSpaceAllowed:true,
                emailFormat:true
            }
        },
        messages:{
            emailVerify:{
                required:"Please Enter the Email."
            }
        },
        errorPlacement:function(error,element){
                error.insertAfter(element);
        }
    });
    // infoVerification Page form validations end

    $("#client-find-jobs").validate({
        rules: {
            minPrice: {
                validMinPrice: "#maxPrice" // Pass the maxPrice input selector
            },
            maxPrice: {
                validMaxPrice: "#minPrice" // Pass the minPrice input selector
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });

    // get Quote validation
    $("#getQuoteForm").validate({
        rules:{
            projectName:{
                required:true,
            },
            projectDescription:{
                required:true,
                noSQLInjection:true
            },
            quoteAttachments:{
                required:true,
                zipFileOnly:true,
                fileSize25MB:true
            },
            technologies:{
                required:true,
            },
            getQuoteBudgetPlan:{
                required:true,
            },
            web_category:{
                required:true,
            }
        },
        messages:{
            projectName:{
                required:"Project Name is required",
            },
            projectDescription:{
                required:"Project Description is required",
            },
            quoteAttachments:{
                required:"Project attactment is required",
            },
            technologies:{
                required:"Technologies is required",
            },
            getQuoteBudgetPlan:{
                required:"Budget plan is required",
            },
            web_category:{
                required:"Web category is required",
            }
        },
        errorPlacement: function (error, element) {
            if(element.attr("name") === "quoteAttachments"){
                if(document.querySelector(".drop-box")){
                    error.insertAfter(document.querySelector(".drop-box"));
                }
            }else{
                error.insertAfter(element);
            }
        }
    })

    $("#addNewProjectForm").validate({
        rules: {
            // step 1
            websiteName:{
                required:true,
                maxlength:50,
                noSQLInjection:true
            },
            websiteUrl:{
                generalLinkValid:true,
                noSQLInjection:true
            },
            web_category:{
                required:true
            },
            estimated_price:{
                required:true
            },
            webTech:{
                required:true
            },
            sourceCodeZip:{
                required:true,
                zipFileOnly:true,
                fileSize25MB:true
            },
            sourceDocFile:{
                required:true,
                fileSize25MB:true,
                docFile:true,
            },
            // step 2
            zipLink: {
                required: function () {
                return $('#repoType').val() === 'public';
                },
                zipLink: true
            },
            isOrg:{
                required:true,
            },
            orgName: {
                required: function () {
                return $('#repoType').val() === 'private' && $('#isOrg').val() === 'yes';
                },
                githubUsername: true
            },
            username: {
                required: function () {
                return $('#repoType').val() === 'private' && $('#isOrg').val() === 'no';
                },
                githubUsername: true
            },
            repoName: {
                required: function () {
                return $('#repoType').val() === 'private';
                },
                repoName: true
            },
            branchName: {
                required: function () {
                return $('#repoType').val() === 'private';
                },
                branchName: true
            },
            pat: {
                required: function () {
                return $('#repoType').val() === 'private';
                }
            },
            // step 3
            project_thumbnail:{
                required:true,
                fileSize10MB:true,
            },
            banner_image:{
                required:true,
                fileSize10MB:true,
            },
            web_logo:{
                required:true,
                fileSize10MB:true,
            },
            project_video_link:{
                required:true,
            },
            gallary_image_1:{
                required:true,
                fileSize10MB:true,
            },
            gallary_image_2:{
                required:true,
                fileSize10MB:true,
            },
            gallary_image_3:{
                required:true,
                fileSize10MB:true,
            },
            gallary_image_4:{
                required:true,
                fileSize10MB:true,
            },
            // Step 4
            budgetForReviewerFees:{
                required:true,
                maxlength:10,
                min:0
            },
            reviewTimeFrame:{
                required:true,
                maxlength:2,
                min:0
            },
            project_details_for_reviewer:{
                required:true,
                noSQLInjection:true,
                maxlength:1000,
            },
            // Step 5
            budgetForHosterFees:{
                required:true,
                maxlength:10,
                min:0
            },
            hostTimeFrame:{
                required:true,
                maxlength:2,
                min:0
            },
            project_details_for_hoster:{
                required:true,
                noSQLInjection:true,
                maxlength:1000,
            },
            hosting_provider:{
                required:true,
            }
        },
        messages:{
            // step 1
            websiteName:{
                required:"Website Name is required",
                maxlength:"Maxlength is 50 characters."
            },
            web_category:{
                required:"Web category is required."
            },
            estimated_price:{
                required:"Estimated Price is required."
            },
            webTech:{
                required:"Web technologies are required." 
            },
            sourceCodeZip:{
                required:"Source Code is required." 
            },
            sourceDocFile:{
                required:"Source code documentation is required."   
            },
            // step 2
            repoName: "Repo name is required",
            isOrg:"Please select the option.",
            zipLink: "Git zip link is required",
            branchName: "Branch name is required",
            orgName: "Organization name is required",
            username: "GitHub username is required",
            pat: "Personal Access Token is required",
            // step 3
            project_thumbnail:{
                required:"Thumbnail is required."
            },
            banner_image:{
               required:"Banner image is required."
            },
            web_logo:{
               required:"Web logo image is required."
            },
            project_video_link:{
                required:"Video link is required.",
            },
            gallary_image_1:{
               required:"Gallary image is required."
            },
            gallary_image_2:{
               required:"Gallary image is required."
            },
            gallary_image_3:{
               required:"Gallary image is required."
            },
            gallary_image_4:{
               required:"Gallary image is required."
            },
            // Step 4
             budgetForReviewerFees:{
                 required:"Budget is required."
            },
            reviewTimeFrame:{
                 required:"Timeframe is required."
            },
            project_details_for_reviewer:{
                 required:"Description is required."
            },
            // Step 5
            budgetForHosterFees:{
                 required:"Budget is required."
            },
            hostTimeFrame:{
                 required:"Timeframe is required."
            },
            project_details_for_hoster:{
                 required:"Description is required."
            },
            hosting_provider:{
                required:"Hosting Provider is required."
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            //  || element.attr("name") === "banner_image" || element.attr("name") === "web_logo" || element.attr("name") === "project_video_link" || element.attr("name") === "gallary_image_1" || element.attr("name") === "gallary_image_2" || element.attr("name") === "gallary_image_3" || element.attr("name") === "gallary_image_4"
            if(element.attr("name") === "web_category" || element.attr("name") === "zipLink" ){
                error.insertAfter(element.parent("div"));
            }else if(element.attr("name") === "project_thumbnail" || element.attr("name") === "banner_image" || element.attr("name") === "web_logo" || element.attr("name") === "gallary_image_1" || element.attr("name") === "gallary_image_2" || element.attr("name") === "gallary_image_3" || element.attr("name") === "gallary_image_4"){
                error.insertAfter(element.parent("label"));
            }else if(element.attr("name") === "project_video_link"){
                error.insertAfter(element.parent("button"));
            }else if(element.attr("name") === "sourceCodeZip" ){
                if(document.querySelector("#sourceCodeDropArea")){
                    error.insertAfter(document.querySelector("#sourceCodeDropArea"));
                }
            }else if(element.attr("name") === "sourceDocFile"){
                if(document.querySelector("#sourceDocDropArea")){
                    error.insertAfter(document.querySelector("#sourceDocDropArea"));
                }
            }else{
                error.insertAfter(element); // Insert error after parent div
            }
        }
    });
// Extra validation for upload field start
    if(document.querySelector("#sourceCodeZip")){
        const sourceCodeZip = document.querySelector("#sourceCodeZip");
        sourceCodeZip.addEventListener("input",()=>{
            if(sourceCodeZip.value != ""){
                $("#sourceCodeZip").valid();
            }
        })
    }
    if(document.querySelector("#sourceDocFile")){
        const sourceDocFile = document.querySelector("#sourceDocFile");
        sourceDocFile.addEventListener("input",()=>{
            if(sourceDocFile.value != ""){
                $("#sourceDocFile").valid();
            }
        })
    }
// Extra validation for upload field end

    $("#addProjectVideoLink").validate({
        rules:{
            project_demo_video_link:{
                generalLinkValid:true
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    })

    // project service form in add to cart (hosting & customization)
    $("#cart_form").validate({
        rules:{
            // customization fields
            "budgetForCustomization[]":{
                required:true,
                maxlength:10,
                min:1
            },
            "timeForCustomization[]":{
                required:true,
                maxlength:3,
                min:1,
                max:365,
            },
            "projectCustomizationAttactment[]":{
                fileSize25MB:true,
                docFile:true,
            },
            "descriptionForCustomization[]":{
                maxlength:1000,
                noSQLInjection:true
            },
            "customization_preference[]":{
                required:true,
            },
            // hosting field
            "hostingChoice[]":{
                required:true,
            },
            "hostingProvider[]":{
                required:true,
            },
            "hosting_preference[]":{
                required:true,
            },
            "budgetForHostingFees[]":{
                required:true,
                maxlength:10,
                min:1
            },
            "budgetForExpectedHostingFees[]":{
                required:true,
                maxlength:10,
                min:1
            },
            "timeForHosting[]":{
                required:true,
                maxlength:3,
                min:1,
                max:365
            },
            "descriptionForHosting[]":{
                required:true,
                noSQLInjection:true
            }

        },
        messages:{
            // customization field
            "budgetForCustomization[]":{
                required:"Budget is required.",
                maxlength:"Max 10 digit length allowed",
                min:"buget is not less than one"
            },
            "timeForCustomization[]":{
                required:"Time limit is required.",
                maxlength:"Max 3 digit length allowed",
                min:"Time limit is not less than one",
                max:"Time limit is not greater than 365",
            },
            "descriptionForCustomization[]":{
                maxlength:"NO more than 1000 character are allowed."
            },
            "customization_preference[]":{
                required:"Customization preference is required",
            },
            // hosting fields
            "hostingChoice[]":{
                required:"This field is requried",
            },
            "hostingProvider[]":{
                required:"Hosting provider is required.",
            },
            "budgetForHostingFees[]":{
                required:"Budget For Hosting Fees is required.",
                maxlength:"Max 10 digit length allowed",
                min:"Time limit is not less than one",
            },
            "budgetForExpectedHostingFees[]":{
                required:"Budget For Expected Hosting Fees is required.",
                maxlength:"Max 10 digit length allowed",
                min:"Time limit is not less than one",
            },
            "hosting_preference[]":{
                required:"Hosting preference is required",
            },
            "timeForHosting[]":{
                required:"Time For Hosting is required.",
                maxlength:"Max 3 digit length allowed",
                min:"Time limit is not less than one",
                max:"Time limit is not greater than 365",
            },
            "descriptionForHosting[]":{
                required:"Description is required.",
            }
            
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); 
        }
    }); 

    // image upload - quotedProjectDetails.html
    $("#imageUploadForm").validate({
        rules:{
            imageInput:{
                fileSize10MB:true
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });

    // send src code to reviewer form - console.html
    if(document.querySelectorAll(".src_upload_to_freelancer"))
    {
        document.querySelectorAll(".src_upload_to_freelancer").forEach((element) => {
            $(element).validate({
                rules: {
                    src_code_zip: {
                        required:true,
                        zipFileOnly: true,
                        fileSize25MB: true
                    },
                    description: {
                        required:true,
                        maxlength: 1000
                    },
                },
                messages:{
                    src_code_zip: {
                        required:"Please Upload ZIP file",
                       
                    },
                    description: {
                        required:"Please write a description.",
                    },
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Insert error after the element
                }
            });
        });
        
    }

    // send src code to reviewer form - console.html
    if(document.querySelectorAll(".send_to_clinet_form"))
        {
            document.querySelectorAll(".send_to_clinet_form").forEach((element) => {
                $(element).validate({
                    rules: {
                        src_code_zip: {
                            required:true,
                            zipFileOnly: true,
                            fileSize25MB: true
                        },
                        description: {
                            required:true,
                            maxlength: 1000
                        },
                    },
                    messages:{
                        src_code_zip: {
                            required:"Please Upload ZIP file",
                           
                        },
                        description: {
                            required:"Please write a description.",
                        },
                    },
                    errorPlacement: function (error, element) {
                        error.insertAfter(element); // Insert error after the element
                    }
                });
            });
            
    }

    // send src code to reviewer form - console.html
    if(document.querySelectorAll(".send_host_to_clinet_form"))
    {
            document.querySelectorAll(".send_host_to_clinet_form").forEach((element) => {
                $(element).validate({
                    rules: {
                        src_code_zip: {
                            required:true,
                            zipFileOnly: true,
                            fileSize25MB: true
                        },
                        hosted_link:{
                            required:true,
                            generalLinkValid:true,
                        },
                        description: {
                            required:true,
                            maxlength: 1000
                        },
                        hosting_credentials:{
                            required:true,
                            docFile:true,
                            fileSize25MB: true
                        },
                        hosting_documentation:{
                            required:true,
                            onlyPdfFile:true,
                            fileSize25MB: true
                        },
                        hosting_third_party_integrations:{
                            onlyPdfFile:true,
                            fileSize25MB: true
                        },
                        other_attachments:{
                            zipFileOnly:true,
                            fileSize25MB: true
                        }
                    },
                    messages:{
                        src_code_zip: {
                            required:"Please Upload ZIP file",
                        },
                        hosted_link:{
                            required:"Project hosted Link is required",
                        },
                        description: {
                            required:"Please write a description.",
                        },
                        hosting_credentials:{
                            required:"Please upload Credentials pdf or txt file",
                        },
                        hosting_documentation:{
                            required:"Please upload hosting documentation pdf file",
                        },
                    },
                    errorPlacement: function (error, element) {
                        error.insertAfter(element); // Insert error after the element
                    }
                });
            }); 
    }
    if(document.querySelectorAll(".send_review_to_clinet_form"))
    {
            document.querySelectorAll(".send_review_to_clinet_form").forEach((element) => {
                $(element).validate({
                    rules: {
                        description: {
                            required:true,
                            maxlength: 1000
                        },
                        hosting_documentation:{
                            required:true,
                            onlyPdfFile:true,
                            fileSize25MB: true
                        },
                        hosting_third_party_integrations:{
                            zipFileOnly:true,
                            fileSize25MB: true
                        },
                        other_attachments:{
                            zipFileOnly:true,
                            fileSize25MB: true
                        }
                    },
                    messages:{
                        description: {
                            required:"Please write a description.",
                        },
                        hosting_documentation:{
                            required:"Please upload hosting documentation pdf file",
                        },
                    },
                    errorPlacement: function (error, element) {
                        error.insertAfter(element); // Insert error after the element
                    }
                });
            }); 
    }

    $("#bidPlacedForm").validate({
        rules:{
            bid_amount:{
                required:true,
                maxlength:12,
                min:0
            },
            completion_period:{
                required:true,
                maxlength:3,
                min:0,
                max:365
            },
            bid_description:{
                required:true,
                noSQLInjection:true,
                maxlength:1000,
            }

        },
        messages:{
            bid_amount:{
                required:"Bid amount is required.",
            },
            completion_period:{
                required:"Completion period is required",
            },
            bid_description:{
                required:"Description is required",
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });

    $("#editBidPlacedForm").validate({
        rules:{
            bid_amount:{
                required:true,
                maxlength:12,
                min:0
            },
            completion_period:{
                required:true,
                maxlength:3,
                min:0,
                max:365
            },
            bid_description:{
                required:true,
                noSQLInjection:true,
                maxlength:1000,
            }

        },
        messages:{
            bid_amount:{
                required:"Bid amount is required.",
            },
            completion_period:{
                required:"Completion period is required",
            },
            bid_description:{
                required:"Description is required",
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });

    // send src code to reviewer form - console.html
    if(document.querySelectorAll(".decline_forms"))
    {
        document.querySelectorAll(".decline_forms").forEach((element) => {
            $(element).validate({
                rules: {
                    declineReason:{
                        noSQLInjection:true,
                    },
                    issue:{
                        noSQLInjection:true,
                    }
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Insert error after the element
                }
            });
        }); 
    }
    // personal_freelancer_profile.html 
    // Portfolio project add form start
    $("#portfolio_project_form").validate({
        rules:{
            portfolio_project_type:{
                required:true,
            },
            project_name:{
                required:true,
                maxlength:50,
                safeInput:true
            },
            portfolio_image:{
                required:true,
                fileSize10MB:true
            },
            technologies:{
                required:true,
            },
            hosting_platform:{
                required:true,
            },
            hosted_link:{
                required:true,
                generalLinkValid:true,
            },
            description:{
                required:true,
                noSQLInjection:true,
                safeInput:true,
                maxlength:500,
            }

        },
        messages:{
            portfolio_project_type:{
                required:"Please select project type.",
            },
            project_name:{
                required:"Project name is required",
            },
            portfolio_image:{
                required:"Portfolio Image is required",
            },
            technologies:{
                required:"Technologies are required",
            },
            hosting_platform:{
                required:"Hosting platform is required",
            },
            hosted_link:{
                required:"Hosted link is required",
            },
            description:{
                required:"Description is required",
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });
    // Portfolio project add form end
    
    // Portfolio Project Edit Form Start
    $("#edit_portfolio_project_form").validate({
        rules:{
            portfolio_project_type:{
                required:true,
            },
            project_name:{
                required:true,
                maxlength:50,
                safeInput:true
            },
            portfolio_image:{
                fileSize10MB:true
            },
            technologies:{
                required:true,
            },
            hosting_platform:{
                required:true,
            },
            hosted_link:{
                required:true,
                generalLinkValid:true,
            },
            description:{
                required:true,
                noSQLInjection:true,
                safeInput:true,
                maxlength:500,
            }

        },
        messages:{
            portfolio_project_type:{
                required:"Please select project type.",
            },
            project_name:{
                required:"Project name is required",
            },
            technologies:{
                required:"Technologies are required",
            },
            hosting_platform:{
                required:"Hosting platform is required",
            },
            hosted_link:{
                required:"Hosted link is required",
            },
            description:{
                required:"Description is required",
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insert error after parent div
        }
    });
    // Portfolio Project Edit Form Start

    // Edit Hosting Details
    if(document.querySelectorAll(".edit_hosting_detail_form"))
    {
        document.querySelectorAll(".edit_hosting_detail_form").forEach((element) => {
            $(element).validate({
                rules: {
                    hosting_provider:{
                        required:true,
                    },
                    editDescriptionForHosting: {
                        required:true,
                        maxlength: 1000,
                        safeInput:true,
                    },
                    editTimeForHosting:{
                        required:true,
                        maxlength:2,
                        min:0 
                    },
                    editbudgetForHostingFees:{
                        required:true,
                        maxlength:10,
                        min:0 
                    },
                },
                messages:{
                    hosting_provider: {
                        required:"Please Choose the hosting provider.",
                    },
                    editDescriptionForHosting: {
                        required:"Description is required.",
                    },
                    editTimeForHosting:{
                        required:"Timelimit is required.",
                    },
                    editbudgetForHostingFees:{
                        required:"Hosting Budget is required.",
                    },
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Insert error after the element
                }
            });
        }); 

        if(document.getElementById("hostingChoice")){
            const hostingChoice = document.getElementById("hostingChoice");
            const hostingProvider = document.getElementById("hosting_provider");
            hostingChoice.addEventListener("change",()=>{
                if(hostingChoice.value == 1){
                    hostingProvider.required = true;
                }else if(hostingChoice.value == 2 || hostingChoice.value == ""){
                    hostingProvider.required = false;
                }
            })
        }
    }

    // Edit Customization Details
    if(document.querySelectorAll(".edit_customization_detail_form"))
    {
        document.querySelectorAll(".edit_customization_detail_form").forEach((element) => {
            $(element).validate({
                rules: {
                    editDescriptionOfCustomization: {
                        required:true,
                        maxlength: 1000,
                        safeInput:true,
                    },
                    editTimeOFCustomization:{
                        required:true,
                        maxlength:2,
                        min:0 
                    },
                    editBudgetCustomization:{
                        required:true,
                        maxlength:10,
                        min:0 
                    },
                    editProjectCustomizationAttactment:{
                        docFile:true,
                        fileSize25MB:true
                    }
                },
                messages:{
                    editDescriptionOfCustomization: {
                        required:"Description is required.",
                    },
                    editTimeOFCustomization:{
                        required:"Timelimit is required.",
                    },
                    editBudgetCustomization:{
                        required:"Hosting Budget is required.",
                    },
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Insert error after the element
                }
            });
        }); 

        if(document.getElementById("hostingChoice")){
            const hostingChoice = document.getElementById("hostingChoice");
            const hostingProvider = document.getElementById("hosting_provider");
            hostingChoice.addEventListener("change",()=>{
                if(hostingChoice.value == 1){
                    hostingProvider.required = true;
                }else if(hostingChoice.value == 2 || hostingChoice.value == ""){
                    hostingProvider.required = false;
                }
            })
        }
    }

    // Edit Customization Details
    if(document.querySelectorAll(".quick_project_update_form"))
    {
        document.querySelectorAll(".quick_project_update_form").forEach((element) => {
            $(element).validate({
                rules: {
                   
                    timeFrame:{
                        maxlength:2,
                        min:0 
                    },
                    budget:{
                        maxlength:10,
                        min:0 
                    },
        
                },
                messages:{
                    timeFrame:{
                        required:"Timelimit is required.",
                    },
                    budget:{
                        required:"Hosting Budget is required.",
                    },
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Insert error after the element
                }
            });
        }); 

        if(document.getElementById("hostingChoice")){
            const hostingChoice = document.getElementById("hostingChoice");
            const hostingProvider = document.getElementById("hosting_provider");
            hostingChoice.addEventListener("change",()=>{
                if(hostingChoice.value == 1){
                    hostingProvider.required = true;
                }else if(hostingChoice.value == 2 || hostingChoice.value == ""){
                    hostingProvider.required = false;
                }
            })
        }
    }


});
