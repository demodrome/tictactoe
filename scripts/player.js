/**
 * Creates a new Player object
 * @constructor
 * @param {String} name The player's name
 * @param {String} marker The player's marker
 */
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.score = 0;
}

/**
 * Sets the name of the player
 * @param {String} name The updated player name
 * @returns The new player name
 */
Player.prototype.setName = function(name) {
  if (!name) {
    return 'Please enter a valid name';
  }

  this.name = name;
  return this.name;
}

/**
 * Gets the player name
 * @returns The player's name
 */
Player.prototype.getName = function() {
  return this.name;
}

/**
 * Sets the marker of the player
 * @param {String} marker The updated player marker
 * @returns The new player marker
 */
Player.prototype.setMarker = function(marker) {
  if (!marker) {
    return 'Please enter a valid marker';
  }

  this.marker = marker;
  return this.marker;
}

/**
 * Gets the player's name
 * @returns The player's marker
 */
Player.prototype.getMarker = function() {
  return this.marker;
}

export default Player;