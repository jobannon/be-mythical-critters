class Werewolf {

  constructor(name, location){
    this.name = name;
    this.location = location;

    var human; 
    this.human = true;

    var wolf;
    this.wolf = false;

    this.hungry = false;
  }

  change(){
    if (this.human == true){
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } 
    else {
      this.hungry = false;
      this.human = true;
      this.wolf = false;
    }
  }

  eat(victim){
    if (this.hungry == false) {
      return 'I cannot eat because I am not hungry.'
    }
    else {
      victim.alive = false;
      this.change();
      return "YUM!"
    }
  }
}

module.exports = Werewolf;
