require('../css/main.scss');

import print from './module';

print('it works well!');

import angular from 'angular';

var app = angular.module('app', []);

// This is an interesting part
// I was thinking about implementing rules in some sort of a 'GameManager'
// Eventually decided that it is nicer if it is 'encapsulated' here
// In that way extending the game is a matter of adding more options

app.constant("gameChoices", [
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
]);

// https://en.wikipedia.org/wiki/Rock-paper-scissors#Additional_weapons
// Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproven by paper. 
// Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. 

app.constant("gameChoices", [
  { 
    name: "rock",
    img: "img/rock.jpg",
    rules: {
      wins: ["scissors", "spock"],
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
]);

app.constant("gameStates", [
  "new",
  "player1",
  "player2",
  "draw"
]);

app.controller("ctrl", ["$scope", "gameChoices", function($scope, gameChoices) {
  $scope.gameChoices = gameChoices;

  $scope.select = function(player, option) {
    console.log(player, option);
  }

  $scope.newGame = function() {
    $scope.player1Choice = false;
  };


}])