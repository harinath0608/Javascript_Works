const newTable = document.getElementById("container")

console.log(newTable);


// // newTable.innerHTML = "<h2> Entire Element </h2>"

// let product = {
//     name : "HP Laptop",
//     price: 45000,
//     address: {
//         city: "hyderabad"
//     }
// }


// newTable.innerHTML = `<h2> ${product.address.city} </h2>`

// newTable.textContent = "This is Dynamic Content Moderation"

// newTable.textContent = "Dynamic Update"


newTable.classList.add("active")
newTable.classList.remove("active")

newTable.classList.toggle("active")

newTable.classList.contains("active")
// document.body.appendChild(newTable)

const event = document.getElementById("text")


const button = document.getElementById("btn")

event.keyup = function () {
    alert("Hello")
}

event.addEventListener("keyup", function(){
    alert("Hello")
})





