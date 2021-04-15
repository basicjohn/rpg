import Game from './../src/js/game.js';

describe('Game', () => {
  const game = new Game(); 

  test('Create the game object using the Game constructor',() => {
    expect(game)
  })

  test('Create the game object filled with correct keys & values',() => {
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

