export default class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.armor = 0;
    this.attack = 20;
  }
}

const player1 = new Player("Brentimous Maximus")