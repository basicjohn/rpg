import Battle from '../src/js/battle.js';
import Game from './../src/js/game.js';
import { createGame } from './../src/js/game.js';

describe('Game', () => {  
  beforeEach(() => {
    const game = createGame(Game);
    const battleContenders = game.battle();
  });

  test('Create the game object using the Game constructor', () => {
    expect(game);
  });

  test('Create the game object filled with correct keys & values', () => {
    expect(game.players).toEqual([]);
    expect(game.monsters).toEqual([]);
    expect(game.distance).toEqual(0);
  });

  test("Create prototype for the this.roll and get random number", () => {
    const roll = game.roll(12);
    expect(roll).not.toEqual(0);
  });

  test("Create prototype for the this.move", () => {
    expect(game.move);
  });

  test("change distance by running game.move", () => {
    game.move();
    expect(game.distance).not.toEqual(0);
  });

  test('Test if battle is loading a player', () => {
    const battlingPlayer = battleContenders[0];
    expect(battlingPlayer).toEqual(game.players[1]);
  });
  test('test to see if battle is loading a battling monster', () => {
    const battlingMonster = battleContenders[1];
    const gameMonster = game.monsters[0];
    expect(battlingMonster).toEqual(gameMonster);
  });

});



describe('createGame', () => {
  beforeEach(() => {
    const game = createGame(Game);
    const battleContenders = game.battle();
  });

  test('Create the game and test for distance', () => {
    expect(game.distance).toEqual(0);
  });

  test('Create the game and add first play using createGame function', () => {
    expect(game.players[0].name).toMatch("Brentimous Maximus");
  });

  test('See if the Giant Spider has been created', () => {
    expect(game.monsters[0].name).toMatch("Giant Spider");
  });
});