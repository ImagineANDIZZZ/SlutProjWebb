let board;
let currentPlayer;
let gameActive;

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = "Spelare: " + currentPlayer;
  renderBoard();
}

function renderBoard() {
  const boardEl = document.getElementById("board");
  boardEl.innerHTML = "";
  board.forEach((cell, index) => {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.textContent = cell;
    cellEl.addEventListener("click", () => cellClicked(index));
    boardEl.appendChild(cellEl);
  });
}

function cellClicked(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  if (checkWin()) {
    document.getElementById("status").textContent = currentPlayer + " vinner!";
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    document.getElementById("status").textContent = "Oavgjort!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").textContent = "Spelare: " + currentPlayer;
  renderBoard();
}

function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === currentPlayer)
  );
}

// Startar spelet när sidan laddas
window.onload = startGame;
