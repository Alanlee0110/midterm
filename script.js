const boardSize = 10;
const mineCount = 10;
let board = [];
let gameBoard = document.getElementById("game-board");

function startGame() {
    gameBoard.innerHTML = "";
    board = Array(boardSize * boardSize).fill(0);

    let placedMines = 0;
    while (placedMines < mineCount) {
        let index = Math.floor(Math.random() * board.length);
        if (board[index] !== "💣") {
            board[index] = "💣";
            placedMines++;
        }
    }

    board.forEach((cell, i) => {
        let cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.dataset.index = i;
        cellElement.onclick = () => revealCell(i);
        gameBoard.appendChild(cellElement);
    });
}

function revealCell(index) {
    let cell = document.querySelector(`[data-index='${index}']`);
    if (board[index] === "💣") {
        cell.innerText = "💣";
        cell.classList.add("mine");
        alert("遊戲結束！");
    } else {
        cell.innerText = "✔";
        cell.style.backgroundColor = "#ddd";
    }
}
