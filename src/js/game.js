

export default class Game {
  constructor() {
    this.players = [];
    this.monsters = [];
    this.distance = 0;
    
  }

  roll(limit) {
    const roll = Math.floor(Math.random() * limit) +1;
    return roll;
  }

  // move() {
  // const moveDistance = Game.roll(12);
  // this.distance += moveDistance;
  // }
};
