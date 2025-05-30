function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const greetingElem = document.getElementById("greeting");
if (greetingElem) {
  const hour = new Date().getHours();
  let greetText = "Good evening";
  if (hour >= 5 && hour < 12) greetText = "Good morning";
  else if (hour >= 12 && hour < 18) greetText = "Good afternoon";
  greetingElem.textContent = greetText;
}

//Calculator
function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function appendValue(value) {
  const display = document.getElementById("display");
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

//Game
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = `It's a draw!`;
    drawScore++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultText = `You win!`;
  } else {
    computerScore++;
    resultText = `You lose!`;
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("drawScore").textContent = drawScore;

  document.getElementById("result").innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;gap:30px;">
      <div>
        <div style="font-size:0.9rem;margin-bottom:4px;">You</div>
        <img src="img/${playerChoice}.png" alt="${playerChoice}" style="width:60px;height:60px;">
      </div>
      <div style="font-size:1.2rem;font-weight:bold;">VS</div>
      <div>
        <div style="font-size:0.9rem;margin-bottom:4px;">Computer</div>
        <img src="img/${computerChoice}.png" alt="${computerChoice}" style="width:60px;height:60px;">
      </div>
    </div>
    <div style="margin-top:12px;">${resultText}</div>
  `;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("drawScore").textContent = drawScore;
  document.getElementById("result").innerHTML = "";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//Currency Converter
const rates = {
  USD: { USD: 1, PHP: 58, EUR: 0.92, JPY: 157, GBP: 0.79 },
  PHP: { USD: 0.017, PHP: 1, EUR: 0.016, JPY: 2.7, GBP: 0.014 },
  EUR: { USD: 1.09, PHP: 63, EUR: 1, JPY: 170, GBP: 0.86 },
  JPY: { USD: 0.0064, PHP: 0.37, EUR: 0.0059, JPY: 1, GBP: 0.0051 },
  GBP: { USD: 1.27, PHP: 73, EUR: 1.16, JPY: 197, GBP: 1 },
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("convertedResult");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const rate = rates[from][to];
  const converted = amount * rate;
  resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
