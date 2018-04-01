const url = 'https://still-brook-59367.herokuapp.com/'
//const url = 'http://localhost:9292/'
angular.module('PlantApplication').factory("PlantService", ['$resource', function($resource) {
  return $resource(url + 'plants/:id', {}, {
    get: {method: 'GET'},
    query: { method: 'GET', headers: {'Content-Type': 'application/json'}, isArray: true},
    save: {
      method: 'POST',
      headers: { 'Content-Type': undefined },
      transformRequest: function (data) {
        var formData = new FormData();
        //need to convert our json object to a string version of json otherwise
        // the browser will do a 'toString()' on the object which will result 
        // in the value '[Object object]' on the server.
        formData.append("name", angular.toJson(data.name));
        formData.append("description", angular.toJson(data.description));
        //now add all of the assigned files
        console.log(data.img);
        formData.append("img", data.img[0]);
        /* for (var i = 0; i < data.img.length; i++) {
         *   //add each file to the form data and iteratively name them
         *   console.log('adding data.img', data.img[i]);
         *   formData.append("img" + i, data.img[i]);
         * } */
        return formData;
      }
    }
  })
}])
