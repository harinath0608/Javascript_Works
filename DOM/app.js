// const Heading = document.getElementById("title")
// const Heading = document.querySelector("#title")
// const Heading = document.querySelector(".Title")
// const Heading = document.querySelectorAll("h1")

// Heading[0].innerText = "Query Selector All"
// Heading[0].style.color = "red"

// Heading[1].innerText = "DOM = Js"
// Heading[1].style.color = "blue"

// Heading.innerText = "Dynamic Content = DOM"
// Heading.style.color = "white"
// Heading.style.backgroundColor = "red"


const heading = document.getElementById("title")
const paragraph = document.getElementById("para")
const button = document.getElementById("btn")

function dynamicUpdate(){
    heading.innerText = "Welcome to DOM"
    heading.style.color = "red"
};