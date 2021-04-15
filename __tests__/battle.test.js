import Battle from './../src/js/battle.js';

describe('Battle', () => {
  const battle = new Battle();

  test ('Create the battle object using the constructor', () => {
    expect(battle)
  })

  test ('Create the Battle object filled with correct keys and values', () => {
    expect(battle.player).toEqual([1]);
    expect(battle.monster).toEqual([1]);
   
  })
});