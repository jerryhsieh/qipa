
angular.module('PlantApplication').factory("PlantService", ['$resource', function($resource) {
  return $resource('http://localhost:3000/plants/:id', {}, {
    get: {method: 'GET'},
    query: { method: 'GET', headers: {'Content-Type': 'application/json'}, isArray: true}
  })
}])
