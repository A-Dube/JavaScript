let num = Math.floor(Math.random() * 100) + 1;
let attempts = 7;

while (attempts > 0) {
  let guess = Number(prompt("Enter your guess (1-100). Attempts left: "+attempts));

  if (guess === num) {
    alert(" You win!");
    break;
  } else if (guess > num) {
    alert("Too high!");
  } else {
    alert("Too low!");
  }
  attempts--;
}

if (attempts === 0) {
  alert("You lost. The number was " + num);
}
