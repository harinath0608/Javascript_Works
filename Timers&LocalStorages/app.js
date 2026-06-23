// setTimeout(function(){
//     console.log("Activated")
// },3000)


// setTimeout(function(){

//     console.log("Welcome Students");


// }, 5000)


// let button = document.getElementById("btn");
// let message = document.getElementById("message");


// button.addEventListener("click", function(){

// message.textContent = "Please wait"

//     setTimeout(function(){
//         message.textContent = "Welcome to Javascript"
//     },5000)

// message.textContent = "Bye Javascript"

// })


// let timer = setInterval(function(){

//     console.log("Running")

// }, 1000);

// setTimeout(function(){
//     clearInterval(timer)
//     console.log("Stop")
// },5000)



// let time = 10;
// let timer = setInterval(() => {
//  console.log(time);
//  time--;
//  if(time < 0){
//  clearInterval(timer);
//  }
// }, 1000);

// localStorage.setItem(
//     "name", "Hanuman"
// )

// console.log(localStorage.getItem("name"))


// sessionStorage.setItem("user", "Ram");
// sessionStorage.getItem("user")
// console.log(sessionStorage.getItem("user"))

let input = document.getElementById("note");
document.getElementById("save")
    .addEventListener("click", () => {
        localStorage.setItem(
            "note", input.value
        );
    });


