import 'angular-route';
import 'angular-resource';

var app = angular.module('PlantApplication', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'src/templates/main-content.html',
    controller: 'PlantController'
  }).when('/details/:id', {
    templateUrl: 'src/templates/detail-page.html',
    controller: 'DetailController'
  });
}]);
