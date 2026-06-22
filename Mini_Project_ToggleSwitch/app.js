let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("change", function () {

    if (toggleBtn.checked) {

        document.body.classList.add("dark")

    }

    else {
        document.body.classList.remove("dark")
    }

})