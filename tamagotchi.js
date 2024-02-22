console.log('tamagotchi file is loaded');
// CONSIGNE 1

class Tamagotchi {
  // code of the class goes here

  // Creation class et constructor
  constructor(name, creatureType) { 
      this.name = name;
      this.creatureType = creatureType;
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


//CONSIGNE 2

Tamagotchi.prototype.cry = function() {
  console.log(this.name, "cries: WAHH !!");
};

// Création de nouveaux Tamagotchis avec des noms et des types de créatures différents
let tamagotchi3 = new Tamagotchi("Fluffy", "Cat");
let tamagotchi4 = new Tamagotchi("Spike", "Dog");

// Invocation de la méthode cry pour chaque Tamagotchi
tamagotchi3.cry();
tamagotchi4.cry();
console.log(tamagotchi3);
console.log(tamagotchi4);


//CONSIGNE 3

//creantion Fonction Puke
Tamagotchi.prototype.puke = function() {
  this.foodInTummy--;
  console.log(this.name, "just puked. New food in tummy:", this.foodInTummy);
};
 // creantion function yawn
Tamagotchi.prototype.yawn = function() {
  this.restedness--;
  console.log(this.name, "yawns. Current restedness:", this.restedness);
};

// Test des nouvelles méthodes
let tamagotchi5 = new Tamagotchi("Bubbles", "Fish");
let tamagotchi6 = new Tamagotchi("Whiskers", "Cat");

tamagotchi5.puke();
tamagotchi6.yawn();
console.log(tamagotchi5);
console.log(tamagotchi6);




