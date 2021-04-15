
export default class Game {
  constructor() {
    this.players = [];
    this.monsters = [];
    this.distance = 0;
    this.maxDistance = 300;

  }
  // Getter
  move() {
    const moveDistance = this.roll(12);
    this.distance += moveDistance;
  }
  // Helper
  roll(limit) {
    const currentRoll = Math.floor(Math.random() * limit) + 1;
    return currentRoll;
  }

};
