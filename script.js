function isSubset(subset, array) {
    return subset.every(element => array.includes(element));
  }

let rutor = document.getElementsByClassName("ruta");

let player_x = []
let player_o = []
let gameOver = false;

function clickruta(id) {
  if (gameOver) return;

  console.log("id:" + id);
  if (!player_x.includes(id) && !player_o.includes(id)) {
    if ((player_x.length + player_o.length) % 2 == 0) {
      rutor[id].innerHTML = "X";
      player_x.push(id);
      if (CheckTheWin(player_x)) {
        alert("Spelare X vinner!");
        gameOver = true;
      }
    } else {
      rutor[id].innerHTML = "O";
      player_o.push(id);
      if (CheckTheWin(player_o)) {
        alert("Spelare O vinner!");
        gameOver = true;
      }
    }
  }


   if (player_x.length + player_o.length === 9 && !CheckTheWin(player_x) && !CheckTheWin(player_o)) {
    alert("Oavgjort!");
    gameOver = true;
  }

  console.log("X:", player_x);
  console.log("O:", player_o);
}


function CheckTheWin(player) {
    const vinnandeKombinationer = [
           [0, 1, 2], [3, 4, 5], [6, 7, 8],
           [0, 3, 6], [1, 4, 7], [2, 5, 8],
           [0, 4, 8], [2, 4, 6]
       ];

  return vinnandeKombinationer.some(combo => isSubset(combo, player));
}

document.querySelector("#button-box button").addEventListener("click", function () {
  for (let i = 0; i < rutor.length; i++) {
    rutor[i].innerHTML = "";
  }
  player_x = [];
  player_o = [];
  gameOver = false;
});