
import '../../scss/detail.scss';

import detailHeader from '../../templates/detail-header.html';
angular.module('PlantApplication').component('detailHeader', {
  template: detailHeader,
  bindings: { plant: '='},
  controller: function() {
    this.$onInit = function() {
      console.log('on init');
      console.log(this.plant);
    }
  }
})


import detailContent from '../../templates/detail-content.html';
angular.module('PlantApplication').component('detailContent', {template: detailContent});


angular.module('PlantApplication').controller('DetailController', ['$scope', '$routeParams', 'PlantService',  function($scope, $routeParams, PlantService) {
  console.log('got params ', $routeParams.id);
  console.log(' get plant ', PlantService.get({id: $routeParams.id}));
  $scope.plant = PlantService.get({id: $routeParams.id});
  console.log('in detail controller');
}])
