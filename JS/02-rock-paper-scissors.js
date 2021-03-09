let usrChoice = prompt("Enter rock, paper or scissors.")
let compChoice = Math.round(Math.random() * 2)

while (usrChoice !== "rock" && usrChoice !== "paper" && usrChoice !== "scissors") {
    usrChoice = prompt("Please enter rock, paper or scissors")
}
console.log(compChoice)
console.log(usrChoice)
if (compChoice === 0) {
    compChoice = "rock"
    if (usrChoice === "paper") {
        alert("you win, paper covers rock")
    } else if (usrChoice === "scissors") {
        alert("you lose, rock destroys scissors")
    } else {
        alert("Tie!")
    }
} else if (compChoice === 1) {
    compChoice = "paper"
    if (usrChoice === "rock") {
        alert("you lose, paper covers rock")
    } else if (usrChoice === "scissors") {
        alert("you win, scissors cuts paper")
    } else {
        alert("Tie!")
    }
} else if (compChoice === 2) {
    compChoice = "scissors"
    if (usrChoice === "paper") {
        alert("you lose, scissors cuts paper")
    } else if (usrChoice === "rock") {
        alert("you win, rock destroys scissors")
    } else {
        alert("Tie!")
    }
} else {
    console.log("error")
}