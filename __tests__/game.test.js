import Game from './../src/js/game.js';
import { createGame } from './../src/js/game.js';

describe('Game', () => {
  const game = new Game();

  test('Create the game object using the Game constructor', () => {
    expect(game)
  })

  test('Create the game object filled with correct keys & values', () => {
    expect(game.players).toEqual([]);
    expect(game.monsters).toEqual([]);
    expect(game.distance).toEqual(0);
  })

  test("Create prototype for the this.roll and get random number", () => {
    const roll = game.roll(12);
    expect(roll).not.toEqual(0);
  })

  test("Create prototype for the this.move", () => {
    expect(game.move)
  })

  test("change distance by running game.move", () => {
    game.move()
    expect(game.distance).not.toEqual(0);
  })

});



describe('createGame', () => {
  const game = createGame(Game);

  test('Create the game and test for distance', () => {
    expect(game.distance).toEqual(0);
  })

  test('Create the game and add first play using createGame function', () => {
    expect(game.players[0].name).toMatch("Brentimous Maximus");
  })

  test('See if the Giant Spider has been created', () => {
    expect(game.monsters[0].name).toMatch("Giant Spider!");
  })
});