/*eslint-disable no-unused-vars*/

const weaponsBASIC = [
  { 
    name: "rock",
    img: "img/rock.jpg",
    rules: {
      wins: ["scissors"],
      loses: ["paper"]
    }
  },
  { 
    name: "paper",
    img: "img/paper.jpg",
    rules: {
      wins: ["rock"],
      loses: ["scissors"]
    }
  },
  { 
    name: "scissors", 
    img: "img/scissors.jpg",
    rules: {
      wins: ["paper"],
      loses: ["rock"]
    }
  }
];

// https://en.wikipedia.org/wiki/Rock-paper-scissors#Additional_weapons
// Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproven by paper. 
// Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. 
const weaponsEXTENDED = [
  { 
    name: "rock",
    img: "img/rock.jpg",
    rules: {
      wins: ["scissors", "lizard"],
      loses: ["paper", "spock"]
    }
  },
  { 
    name: "paper",
    img: "img/paper.jpg",
    rules: {
      wins: ["rock", "spock"],
      loses: ["scissors", "lizard"]
    }
  },
  { 
    name: "scissors", 
    img: "img/scissors.jpg",
    rules: {
      wins: ["paper", "lizard"],
      loses: ["rock", "spock"]
    }
  },
  { 
    name: "lizard", 
    img: "img/lizard.jpg",
    rules: {
      wins: ["spock", "paper"],
      loses: ["rock", "scissors"]
    }
  },
  { 
    name: "spock", 
    img: "img/spock.jpg",
    rules: {
      wins: ["rock", "scissors"],
      loses: ["lizard", "paper"]
    }
  }
];

export default weaponsEXTENDED;