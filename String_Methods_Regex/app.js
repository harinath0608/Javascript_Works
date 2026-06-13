// let course = ["javascript", 10, "CSS", "SASS"]

// console.log(course.length);


// let email = "student@gmail.com"

// console.log(email.includes("@"));


let Mobile_Number = "+91-9177059193"

console.log(Mobile_Number.includes("91"));


let skills = "html,css,javascript, react"

console.log(skills.length);


let unique = skills.split(",")

console.log(unique);

console.log(unique.length);


let interactive_skill = "I Love Java"


let unique_skill = interactive_skill.replace("Love", "Hate")

console.log(unique_skill);


let spaces = "HTML  "

console.log(spaces.length);

console.log(spaces.trim().length);


// Regex 



// let email = prompt()

// if (email.includes("@")) {
//     console.log("Valid Email");
// }

// else {
//     console.log("Invalid Email");
    
// }


let onlyNumbers = /^[0-8]+$/

let CorrectNumber = onlyNumbers.test("12345")

console.log(CorrectNumber);


let Characters = /^[A-Z]+$/

let Username = Characters.test("HARINATH")

console.log(Username);









