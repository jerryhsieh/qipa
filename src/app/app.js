
import '../scss/app.scss';
import '../app.config.js';
import './plantservice.js'
import './addplant.js'
import './file-directive.js';


import navbar from '../templates/nav.html';
angular.module('PlantApplication').component('navbar', {template: navbar});


import footer from '../templates/footer.html';
angular.module('PlantApplication').component('footer', {template: footer});


import slides from '../templates/slides.html';
angular.module('PlantApplication').component('slides', {template: slides});

import search from '../templates/search.html';
angular.module('PlantApplication').component('search', {template: search});

import sidebar from '../templates/sidebar.html';
angular.module('PlantApplication').component('sidebar', {template: sidebar});


import pager from '../templates/pager.html';
angular.module('PlantApplication').component('pager', {template: pager});

angular.module('PlantApplication').controller('PlantController', ['$scope', '$location',  'PlantService', function($scope, $location, PlantService) {
  $scope.plants = PlantService.query();
  $scope.collect = function(index) {
    console.log('got index', index);
    $location.path("/details/" + index);
  }
}])
