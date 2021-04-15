import Player from './player.js'
import Monster from './monster.js'
import Battle from './battle.js'

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

  addPlayer(player) {
    this.players.push(player);
  }
  addMonster(monster) {
    this.monsters.push(monster);
  }

};

export function createGame(Game) {
  const player = new Player("Brentimous Maximus");
  const monster = new Monster("Giant Spider");
  const game = new Game();
  
  game.addMonster(monster);
  game.addPlayer(player);
  return game;

}