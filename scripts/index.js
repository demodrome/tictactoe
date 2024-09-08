import Player from "./player.js";
import gameBoard from "./gameboard.js";

const game = (function() {
  const playerOne = new Player('Player 1', 'X');
  const playerTwo = new Player('Player 2', 'O');

  function playRound() {
    let hasWinner = false;
    let activePlayer = playerOne;
    gameBoard.reset();

    let i = 0;

    while (!hasWinner) {
      console.log('Game started');
      const x = prompt(`${activePlayer.getName()}'s turn: X ->`);
      const y = prompt(`${activePlayer.getName()}'s turn: Y ->`);

      gameBoard.mark({ x: x, y: y, marker: activePlayer.getMarker() });

      gameBoard.getBoard();

      i++;

      if (i >= 5) {
        hasWinner = true;
      }
      
      // Switch players
      if (activePlayer === playerOne) {
        activePlayer = playerTwo;
      } else {
        activePlayer = playerOne;
      }
    }
  }

  return {
    playRound
  }
})();

game.playRound();