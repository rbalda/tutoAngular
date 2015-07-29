/**
 * Created by rbalda on 28/07/15.
 */

var app = angular.module('testAngular',['ngMessages','ngResource']);


app.config(function($interpolateProvider,$httpProvider,$resourceProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $resourceProvider.defaults.stripTrailingSlashes = false;

});

app.controller('formController',['$scope','Persona',function($scope,Persona){
    var updateList = function(data)
    {
        $scope.error = false;
        $scope.success=true;
        $scope.listaPersonas = Persona.query();
    };

    var showError = function(){
      $scope.error=true;
    };

    $scope.error = false;
    $scope.persona = new Persona();

    $scope.guardar = function()
    {
        $scope.persona.$save(updateList,showError);
    };

    $scope.listaPersonas = Persona.query();



}]);


app.factory('Persona',['$resource',function($resource){
    return $resource('http://localhost:8000/api/personas/:id',{id:'@id'},
        {
            update:{
                method:'PUT'
            }
        });
}]);