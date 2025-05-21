function isSubset(subset, array) {
    return subset.every(element => array.includes(element));
  }

let rutor = document.getElementsByClassName("ruta");

let player_x = []
let player_o = []

function clickruta(id){
    console.log("id:"+id);
    if ((player_x.length + player_o.length) % 2 == 0){
        if (!player_x.includes(id) && !player_o.includes(id)){
            rutor[id].innerHTML = "X"
            player_x.push(id)
            console.log(CheckTheWin("x"));
        }     
        console.log(player_x)
        }else{
        if (!player_x.includes(id) && !player_o.includes(id)){
            rutor[id].innerHTML = "O"
            player_o.push(id)
            CheckTheWin("o");
        }
        console.log(player_o)
        
    }
  
}

function CheckTheWin(id) {
    const vinnandeKombinationer = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
           [0, 3, 6], [1, 4, 7], [2, 5, 8],
           [0, 4, 8], [2, 4, 6]
       ];

    if (player_x.length >= 3){
          
        }

    }


    let result = vinnandeKombinationer.every(val=> player_o.includes(val))
    console.log(result)

}
