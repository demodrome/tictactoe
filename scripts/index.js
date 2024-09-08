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

    while (!hasWinner) {
      const x = prompt(`${activePlayer.getName()}'s turn: X ->`);
      const y = prompt(`${activePlayer.getName()}'s turn: Y ->`);
      gameBoard.mark({ x: x, y: y, marker: activePlayer.getMarker() });

      if (checkForWinner()) {
        hasWinner = true;
        console.log(`${activePlayer.getName()} wins!`);
        activePlayer.addScore();
        console.log(activePlayer.getScore());
      }
      
      // Switch players
      if (activePlayer === playerOne) {
        activePlayer = playerTwo;
      } else {
        activePlayer = playerOne;
      }
    }

    return;
  }

  /**
   * Checks the board to see if any winning configuration exists
   * @returns {Boolean} True if game has been won
   */
  function checkForWinner() {
    const board = gameBoard.getBoard();

    // Check top row and left column
    if (board[0][0] !== 0) {
      // Check row
      if (board[0][1] === board[0][0] && board[0][2] === board[0][0]) {
        return true;
      }
    }

    // Check middle row
    if (board[1][0] !== 0) {
      if (board[1][1] === board[1][0] && board[1][2] === board[1][0]) {
        return true;
      }
    }

    // Check bottom row
    if (board[2][0] !== 0) {
      if (board[2][1] === board[2][0] && board[2][2] === board[2][0]) {
        return true;
      }
    }

    // Check left column
    if (board[0][0] !== 0) {
      if (board[0][1] === board[0][0] && board[0][2] === board[0][0]) {
        return true;
      }
    }

    // Check middle column
    if (board[0][1] !== 0) {
      if (board[1][1] === board[0][1] && board[2][1] === board[0][1]) {
        return true;
      }
    }

    // Check right column
    if (board[0][2] !== 0) {
      if (board[1][2] === board[0][2] && board[2][2] === board[0][2]) {
        return true;
      }
    }

    // Check diagonal top left to bottom right
    if (board[0][0] !== 0) {
      if (board[1][1] === board[0][0] && board[2][2] === board[0][0]) {
        return true;
      }
    }

    // Check diagonal top right to bottom left
    if (board[0][2] !== 0) {
      if (board[1][1] === board[0][2] && board[2][0] === board[0][2]) {
        return true;
      }
    }
  }

  return {
    playRound
  }
})();

// Start the game loop
game.playRound();