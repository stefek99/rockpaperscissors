require('../css/main.scss');

import print from './module';

print('it works well!');

import angular from 'angular';

var app = angular.module('app', []);

app.constant("gameChoices", [
  { name: "rock",     img: "img/rock.jpg" },
  { name: "paper",    img: "img/paper.jpg" },
  { name: "scissors", img: "img/scissors.jpg" }
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