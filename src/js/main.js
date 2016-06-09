require('../css/main.scss');

import print from './module';

print('it works well!');

import angular from 'angular';

import weapons from './weapons';

var app = angular.module('app', []);

app.constant('weapons', weapons);

app.constant('states', {
  'newgame' : 0,
  'player1won' : 1,
  'player2won' : 2,
  'draw' : 3
  }
);

app.controller('ctrl', ['$scope', 'weapons', 'states', function($scope, weapons, states) {
  $scope.weapons = weapons; // making them available in the view
  $scope.states = states;

  $scope.state = states.newgame;
  $scope.player1 = 'human';
  $scope.player2 = 'computer';

  $scope.newGame = function() {
    $scope.state = states.newgame;
    $scope.player1weapon = undefined;
    $scope.player2weapon = undefined;
  };

  $scope.chooseWeapon = function(player, weapon) {
    if ($scope.state !== states.newgame) return;
    if ($scope.bothHumans) return;

    if (player === 'player1') {
      $scope.player1weapon = weapon;
      $scope.player2weapon = randomiseWeapon();
    } else if (player === 'player2') {
      $scope.player2weapon = weapon;
      $scope.player1weapon = randomiseWeapon();
    } else {
      console.error("Unrecognised option: player should be either 1 or 2"); // THINK: app wide error handling and assertions
      return;
    }

    displayResult();
  }

  let randomiseWeapon = function() {
    const randomIndex = Math.floor( Math.random() * weapons.length );
    return weapons[randomIndex];
  };

  let displayResult = function() {
    if ($scope.player1weapon.rules.wins.indexOf($scope.player2weapon.name) !== -1) { // THINK: do we have 'contains' or 'includes' in ES6? (quick Google search and the answer is not)
      $scope.state = states.player1won;
    } else if ($scope.player1weapon.rules.loses.indexOf($scope.player2weapon.name) !== -1) {
      $scope.state = states.player2won;
    } else {
      $scope.state = states.draw;
    }
  };

  $scope.randomiseWeapons = function() {
    $scope.player1weapon = randomiseWeapon();
    $scope.player2weapon = randomiseWeapon();
    displayResult();
  };

  $scope.$watchGroup(['player1', 'player2'], function(newValues) {
    $scope.bothHumans = false;
    $scope.bothComputers = false;

    if (newValues[0] === 'human' && newValues[1] === 'human') {
      $scope.bothHumans = true;
    }

    if (newValues[0] === 'computer' && newValues[1] === 'computer') {
      $scope.bothComputers = true;
    }
  });

}])