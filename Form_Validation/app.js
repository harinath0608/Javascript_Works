const UserName = document.getElementById("name");
const errorMessage = document.getElementById("result");
const form = document.getElementById("myForm");


// Display
UserName.addEventListener("keyup", () => {
    console.log(UserName.value)
})

// Form Submit 

myForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const UserNameValidation = UserName.value.trim()

    if (UserNameValidation === "") {
        errorMessage.textContent = "User is required";
        errorMessage.style.color = "red"
        return
    }


    errorMessage.textContent = ""
    errorMessage.style.color = "green"


    })





