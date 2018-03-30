import 'angular-route';
import 'angular-resource';

//import mainContent from './templates/main-content.html';
//import detailPage from './templates/detail-page.html';

var app = angular.module('PlantApplication', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    template: require("./templates/main-content.html"),
    controller: 'PlantController'
  }).when('/details/:id', {
    template: require("./templates/detail-page.html"),
    controller: 'DetailController'
  });
}]);
