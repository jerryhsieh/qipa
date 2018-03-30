
angular.module('PlantApplication').factory("RecommendationService", ['$resource', function($resource) {
  return $resource('http://localhost:3000/recommendations/:id', {}, {
    get: {method: 'GET'},
    query: { method: 'GET', headers: {'Content-Type': 'application/json'}, isArray: true}
  })
}])
