import Block from './../src/sudoku.js';
import Sudoku from './../src/sudoku.js';

describe('Block', () => {

  test('should correctly create a Block object with block position keys', () => {
    const block = new Block();
    expect(block.pRow1).toHaveLength(0);
    expect(block.pRow2).toHaveLength(0);
    expect(block.pRow3).toHaveLength(0);
  });
});

describe('Block', () => {

  test('should correctly create a Block object with block position keys', () => {
    const block = new Block();
    expect(block.pRow1).toHaveLength(0);
    expect(block.pRow2).toHaveLength(0);
    expect(block.pRow3).toHaveLength(0);
  });
});



