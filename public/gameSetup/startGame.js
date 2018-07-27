function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.canvas.style.backgroundColor = "#EEEEEE";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}


class Character {
  constructor() {
    this._speed = 1;
    this._strength = 1;
    this._magic = 1;
    this._charisma = 1;
  }
  displayStats() {
    console.log(`Speed: ${this._speed}\nStrength: ${this._strength}\nMagic: ${this._magic}\nCharisma: ${this._charisma}`);
  }
  getSpeed() {
    return this._speed;
  }
  setSpeed(speed) {
    this._speed = speed;
  }
  getStrength() {
    return this._strength;
  }
  setStrength(strength) {
    this._strength = strength;
  }
  getMagic() {
    return this._magic;
  }
  setMagic(magic) {
    this._magic = magic;
  }
  getCharisma() {
    return this._charisma;
  }
  setCharisma(charisma) {
    this._charisma = charisma;
  }
}

let testChar = new Character();
testChar.displayStats();
console.log(testChar.getSpeed());

let noob = new Character();
noob.setStrength(.5);
console.log(noob.getStrength());

let billyBob = Object.create(noob);
billyBob.name = "Billy Bob";
console.log(billyBob);
console.log(billyBob.getCharisma());
billyBob.setCharisma(.1);
console.log(billyBob.getCharisma());