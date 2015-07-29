/**
 * Created by rbalda on 28/07/15.
 */
//Instanciamos la aplicacion
var app = angular.module('testAngular',['ngMessages','ngResource']);


app.config(function($interpolateProvider,$httpProvider,$resourceProvider){
    //configuramos las etiqutas a usar
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    //usamos csrf token para hacer post
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //quitamos los slashes automaticos para compatibilidad con el api
    $resourceProvider.defaults.stripTrailingSlashes = false;

});


//creamos controlador de form
app.controller('formController',['$scope','Persona',function($scope,Persona){
    //funcion que actualiza el listado cuando se agrega una nueva persona en el servidor
    var updateList = function(data)
    {
        $scope.error = false;
        $scope.success=true;
        $scope.listaPersonas = Persona.query();
    };

    //muestra texto de error
    var showError = function(){
      $scope.error=true;
    };

    //variable que muestra texto de error
    $scope.error = false;

    //usamos el servicio Persona
    $scope.persona = new Persona();

    //funcion guardar que invoca al metodo save del servicio persona
    $scope.guardar = function()
    {
        $scope.persona.$save(updateList,showError);
    };

    //listamos las personas al iniciar la aplicacion
    $scope.listaPersonas = Persona.query();



}]);

//creamos un servicio persona, el que va a estar encargado de obtener los datos y guardarlos al servicio web
app.factory('Persona',['$resource',function($resource){
    return $resource('http://localhost:8000/api/personas/:id',{id:'@id'},
        {
            update:{
                method:'PUT'
            }
        });
}]);