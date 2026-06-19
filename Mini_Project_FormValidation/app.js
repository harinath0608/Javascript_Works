const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("text").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("number").value.trim();
    let password = document.getElementById("pass").value.trim();


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
    




})