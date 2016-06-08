require('../css/main.scss');

import print from './module';

print('it works well!');

import angular from 'angular';

var app = angular.module('app', []);

app.controller("ctrl", ["$scope", function($scope) {
  $scope.message = "it works";
}])