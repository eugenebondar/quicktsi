angular.module('app').config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/tms/v2/templates/pages/dashboard-page.html'
    })
    .when('/dashboard', {
        templateUrl: '/tms/v2/templates/pages/dashboard-page.html'
    })
    .when('/loads', {
        templateUrl: '/tms/v2/templates/pages/load-page.html'
    })
    .when('/invoices', {
        templateUrl: '/tms/v2/templates/pages/invoices-page.html'
    })
    .when('/expenses', {
        templateUrl: '/tms/v2/templates/pages/expenses-page.html'
    })
    .when('/administration', {
        templateUrl: '/tms/v2/templates/pages/administration-page.html'
    })
    .when('/tms_users', {
        templateUrl: '/tms/v2/templates/pages/tms-page.html'
    })
    .when('/accounting', {
        templateUrl: '/tms/v2/templates/pages/accounting-page.html'
    })
    .when('/reports', {
        templateUrl: '/tms/v2/templates/pages/reports-page.html'
    })
    .when('/profile', {
        templateUrl: '/tms/v2/templates/pages/profile-page.html'
    })
    .when('/help', {
        templateUrl: '/tms/v2/templates/pages/help-page.html'
    })

    .when('/loads/add-dispatch', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/dispatch.html'
    })
    .when('/loads/edit-dispatch', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/dispatch.html'
    })
    .when('/administration/add-driver', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/driver.html'
    })
    .when('/administration/add-driver-step-2', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/driver-step-2.html'
    })
    .when('/administration/add-driver-step-3', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/driver-step-3.html'
    })
    .when('/administration/edit-driver', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-driver.html'
    })
    .when('/invoices/create-invoice', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/invoice.html'
    })
    .when('/invoices/create-invoice-step-2', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/create-invoice-2.html'
    })
    .when('/invoices/create-invoice-step-3', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/create-invoice-3.html'
    })
    .when('/expenses/add-expense', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/expense.html'
    })
        .when('/expenses/edit-expense', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-expense.html'
    })
    .when('/administration/edit-external-carrier', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-external.html'
    })
    .when('/administration/add-external-carrier', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/external-carrier.html'
    })
    .when('/administration/add-external-carrier-step-2', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/external-carrier-step-2.html'
    })
    .when('/administration/add-external-carrier-step-3', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/external-carrier-step-3.html'
    })
    .when('/administration/add-customer', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/customer.html'
    })
    .when('/administration/edit-customer', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-customer.html'
    })
    .when('/administration/add-customer-step-2', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/customer-step-2.html'
    })
    .when('/administration/add-customer-step-3', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/customer-step-3.html'
    })
    .when('/administration/add-receiver', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/receiver.html'
    })
    .when('/administration/edit-receiver', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-receiver.html'
    })
    .when('/administration/add-shipper', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/shipper.html'
    })
    .when('/administration/edit-shipper', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-shipper.html'
    })
    .when('/administration/add-trailer', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/trailer.html'
    })
    .when('/administration/edit-trailer', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-trailer.html'
    })
    .when('/administration/add-truck', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/truck.html'
    })
    .when('/administration/edit-truck', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-truck.html'
    })
    .when('/administration/add-broker', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/broker.html'
    })
    .when('/administration/edit-broker', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-broker.html'
    })
    .when('/administration/edit-user', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/edit-user.html'
    })
    .when('/administration/add-user', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/user.html'
    })
    .when('/expenses/category-list', {
        templateUrl: '/tms/v2/templates/pages/adding-pages/category-list.html'
    })
    .otherwise({ redirectTo: '/' });
});