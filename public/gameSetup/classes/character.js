class Character {
  constructor() {
    this.speed = 1;
    this.strength = 1;
    this.magic = 1;
    this.charisma = 1;
  }
  displayStats() {
    console.log(`Speed: ${this.speed}\nStrength: ${this.strength}\nMagic: ${this.magic}\nCharisma: ${this.charisma}`);
  }
}

