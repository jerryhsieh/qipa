const url = 'https://still-brook-59367.herokuapp.com/'

angular.module('PlantApplication').factory("RecommendationService", ['$resource', function($resource) {
  return $resource(url + 'recommendations/:id', {}, {
    get: {method: 'GET'},
    query: { method: 'GET', headers: {'Content-Type': 'application/json'}, isArray: true}
  })
}])
