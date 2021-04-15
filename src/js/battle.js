export default class Battle {
  constructor() {
    this.player = [];
    this.monster = [];
  }

  createBattle(player, monster) {
    this.player =  player;
    this.monster = monster;
  }
}