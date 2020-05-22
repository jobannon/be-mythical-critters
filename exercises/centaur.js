class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky=false;
    this.standing=true;
    this.crankyCounter=0;
    this.layingDown = false;
  }

  sleep() {
    this.cranky=false;
    this.crankyCounter = 0
    if (this.standing === true){
      return "NO!";
    }
    return "ZZZZ";
  }

  shoot(){
    this.crankyCounter += 1;
    this.toggleCranky()
    if (this.cranky === true) {
      return "NO!";
    }
    else if (this.layingDown === true) {
      return "NO!";
    }
    else {
      return "Twang!!!";
    }
  }

  run(){
    this.crankyCounter += 1;
    this.toggleCranky()

    if (this.layingDown === true){
      return "NO!"
    }

    return "Clop clop clop clop!!!";
  }

  layDown(){
    this.standing = false;
    this.layingDown = (!(this.layingDown))
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
      
  drinkPotion() {
    if (this.cranky === false){
      this.cranky = true;
    }
    else if (this.standing === true) {
      this.crankyCounter = 0;
      this.cranky = false;
    }
    else if (this.standing === false) {
      return 'Not while I\'m laying down!'
    }
  }
  toggleCranky(){
    if (this.crankyCounter >= 2){
      this.cranky = true;
    } 
  }
}

module.exports = Centaur;

