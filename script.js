
//get all progress bar
const progressBars = document.querySelectorAll("#progress_bar")

// get button
const btn = document.getElementById("btn")



//add event listener to increase progress bar
btn.addEventListener("click", () => {
    progressBars.forEach(bar => {
        bar.classList.add("complete")
        bar.innerText = "100%";
    })
})


