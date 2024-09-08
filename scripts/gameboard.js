/**
 * The game board for the game
 * @module
 * @returns The module API
 */
const gameBoard = (function() {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  /**
   * Marks the board with a player's marker
   * @param {Object} options The options for marking the board
   * @param {Number} options.x The x co-ordinate for the mark
   * @param {Number} options.y The y co-ordinate for the mark
   * @param {String} options.marker The marker to place
   */
  function mark(options) {
    if (!options) {
      throw new Error(`No valid marker options: [${options}]`);
    }

    // Extract values from the options object
    const { x, y, marker } = options;

    // Error checking for missing option values
    if(!x && x !== 0) throw new Error(`No valid X co-ordinate: [${x}]`);
    if (!y && y !== 0) throw new Error(`No valid Y co-ordinate: [${y}]`);
    if (!marker) throw new Error(`No valid marker: [${marker}]`);

    // Mark the board
    board[x][y] = marker;
  }

  /**
   * Resets the game board to its initial state
   */
  function reset() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = 0;
      }
    }
  }

  /**
   * Gets the current state of the board
   * 
   * NOTE: Will transition to DOM UI in a later update
   */
  function getBoard() {
    return board;
  }

  return {
    mark,
    reset,
    getBoard
  }
})();

export default gameBoard;