import Player from "./player.js";
import gameBoard from "./gameboard.js";

/**
 * The game module contains the primary logic for playing the game. It implements the
 * game loop and checking for win conditions.
 * @module
 * @returns {Object} The game API
 */
const game = (function() {
  const playerOne = new Player('Player 1', 'X');
  const playerTwo = new Player('Player 2', 'O');

  /**
   * The game loop logic controlling how a round is played.
   */
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

// Start the game loop
game.playRound();