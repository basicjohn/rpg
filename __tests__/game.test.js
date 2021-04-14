import Game from './../src/js/game.js';

describe('Game', () => {

  test('Create the game object using the Game constructor',() => {
    const game = new Game(); 
    expect(game)
  })

  test('Create the game object filled with correct keys & values',() => {
    const game = new Game(); 
    const expected = [];
    expect(game.players).toEqual(expect.arrayContaining(expected));
    expect(game.distance).toEqual(1);

  })
  
});

