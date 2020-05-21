class Medusa {
  constructor(name) {
    this.name = name; 
    var statues = []; 
    this.statues = statues; 
  } 

  stare(victim){
    if (this.statues.length < 3){
      this.statues.push(victim);
      victim.stoned = true;
    }
    else {
      var unstoner = this.statues[0]
      
      unstoner.stoned = false;
      victim.stoned = true;
    }
  }
} 

module.exports = Medusa;



