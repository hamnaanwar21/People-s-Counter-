// document.getElementById("count-el").innerText=5

let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0

function increment() {
    count = count + 1
    countEL.textContent = count 
    console.log("count")
}

let saveEL = document.getElementById("save-el")
console.log(saveEL)

function save() {
    let countStr = count + "- "
    saveEL.textContent += countStr
    console.log(count)
    countEL.textContent = 0
    count = 0
}






//let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

//function incrementLap() {
    lapsCompleted = lapsCompleted + 1
//}

//incrementLap()
//incrementLap()
//incrementLap()

//console.log(lapsCompleted)