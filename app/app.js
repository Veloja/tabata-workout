var app = angular.module('tabataApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'TabataController',
            templateUrl: '/app/partials/tabata.html'
        })
        .otherwise({ redirectTo: '/' });
});