console.log('tamagotchi file is loaded');

class Tamagotchi {
  // code of the class goes here

  // Creation class et constructor
  constructor() {
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
  }
// Fonction cry 
  cry() {
      this.foodInTummy--;
      console.log("New food in tummy:", this.foodInTummy);
      console.log("WAHH !!");
  }
}


// Nouveau ta Tamagotchi
let tamagotchi1 = new Tamagotchi();
let tamagotchi2 = new Tamagotchi();
tamagotchi1.cry();
tamagotchi2.cry();
console.log(tamagotchi1);
console.log(tamagotchi2);



