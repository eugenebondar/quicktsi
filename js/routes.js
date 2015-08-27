angular.module('app').config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/dashboard-page.html'
    })
    .when('/dashboard', {
        templateUrl: '/templates/pages/dashboard-page.html'
    })
    .when('/loads', {
        templateUrl: '/templates/pages/load-page.html'
    })
    .when('/invoices', {
        templateUrl: '/templates/pages/invoices-page.html'
    })
    .when('/expenses', {
        templateUrl: '/templates/pages/expenses-page.html'
    })
    .when('/administration', {
        templateUrl: '/templates/pages/administration-page.html'
    })
    .when('/tms_users', {
        templateUrl: '/templates/pages/tms-page.html'
    })
    .when('/accounting', {
        templateUrl: '/templates/pages/accounting-page.html'
    })
    .when('/reports', {
        templateUrl: '/templates/pages/reports-page.html'
    })
    .when('/profile', {
        templateUrl: '/templates/pages/profile-page.html'
    })
    .when('/help', {
        templateUrl: '/templates/pages/help-page.html'
    })

    .otherwise({ redirectTo: '/' });
});