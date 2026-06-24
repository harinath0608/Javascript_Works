// function greet() {
//     console.log("Good Morning")
// }

// function execute(callback) {
//     callback();
// }

// execute(greet)



// console.log("A")
// console.log("B")
// console.log("C")

// console.log("Start");

// setTimeout(() => {

// console.log("Timer");
// }, 5000);

// console.log("End");

// setTimeout(() => {

// console.log("Wait");
// }, 3000);



console.log("Start");

setTimeout(() => {
console.log("Timer");
}, 0);

Promise.resolve()
.then(() => {
console.log("Promise");
});

console.log("End");

