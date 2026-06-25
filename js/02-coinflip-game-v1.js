let coinFlip = Math.round(Math.random());

let choice = prompt("Choose Heads or Tails:");

if (coinFlip === 0) {
    // Coin landed on heads
    if (choice.toLowerCase() === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    // Coin landed on tails
    if (choice.toLowerCase() === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}