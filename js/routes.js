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

    .when('/loads/add-dispatch', {
        templateUrl: '/templates/pages/adding-pages/dispatch.html'
    })
    .when('/administration/add-driver', {
        templateUrl: '/templates/pages/adding-pages/driver.html'
    })
    .when('/invoices/create-invoice', {
        templateUrl: '/templates/pages/adding-pages/invoice.html'
    })
    .when('/expenses/add-expense', {
        templateUrl: '/templates/pages/adding-pages/expense.html'
    })
    .when('/administration/add-external-carrier', {
        templateUrl: '/templates/pages/adding-pages/external-carrier.html'
    })
    .when('/administration/add-customer', {
        templateUrl: '/templates/pages/adding-pages/customer.html'
    })
    .when('/administration/add-receiver', {
        templateUrl: '/templates/pages/adding-pages/receiver.html'
    })
    .when('/administration/add-shipper', {
        templateUrl: '/templates/pages/adding-pages/shipper.html'
    })
    .when('/administration/add-trailer', {
        templateUrl: '/templates/pages/adding-pages/trailer.html'
    })
    .when('/administration/add-truck', {
        templateUrl: '/templates/pages/adding-pages/truck.html'
    })
    .when('/administration/add-broker', {
        templateUrl: '/templates/pages/adding-pages/broker.html'
    })
    .otherwise({ redirectTo: '/' });
});