

angular.module('PlantApplication').controller('AddPlantController', ['$scope', '$location', 'PlantService', function($scope, $location, PlantService) {
  $scope.plant = {
    name: '',
    description: '',
    img: ''
  };

  $scope.save = function() {
    console.log('going to save ', $scope.plant);
    PlantService.save($scope.plant, function() {
      $location.path('/');
    })
  }
}])
