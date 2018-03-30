
import '../../scss/detail.scss';
import '../recommservice.js';


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
angular.module('PlantApplication').component('detailContent', {
  template: detailContent,
  bindings: { recommendations: '='}
});


angular.module('PlantApplication').controller('DetailController', ['$scope', '$routeParams', 'PlantService', 'RecommendationService', function($scope, $routeParams, PlantService, RecommendationService) {
  console.log('got params ', $routeParams.id);
  console.log(' get plant ', RecommendationService.get({id: $routeParams.id}));
  $scope.plant = PlantService.get({id: $routeParams.id});
  $scope.recommendations = RecommendationService.get({id: $routeParams.id});  
  console.log('in detail controller');
}])
