const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // access
    let name = document.getElementById("text").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("number").value.trim();
    let password = document.getElementById("pass").value.trim();


    // Patterns
    let nameRegex = /^[A-Za-z]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let phoneRegex = /^[0-9]{10}$/
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&]).{8,}$/


    // Name Regex Validation 

    if(!nameRegex.test(name)) {
        document.getElementById("nameError").innerText = "Enter Valid Name"
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email Regex Validation 
    if(!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter Valid Email"
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Phone Validation
    if(!phoneRegex.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter 10 digit phone number";
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Password Validation
    if(!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Password must contain uppercase, lowercase, number and special characters"
    } else {
        document.getElementById("passwordError").innerText = "";
    }

})