const setWinner = () => {
   return winner = Math.floor(Math.random() * 16)
}

const setLoser = () => {
   do {
      loser = Math.floor(Math.random() * 16)
   }
   while (loser === winner);

   return loser
}

const gameStart = () => {
   setWinner();
   setLoser();
}

const treaasure = (selectedTile) => {
   
   if(selectedTile === winner){
      document.getElementById(`${selectedTile}`).innerHTML = "🏆"
   } else if (selectedTile === loser) {
      document.getElementById(`${selectedTile}`).innerHTML = "😈"
   } else {
      document.getElementById(`${selectedTile}`).innerHTML = "👍🏽"
   }
 }


var winner = 0
var loser = 0