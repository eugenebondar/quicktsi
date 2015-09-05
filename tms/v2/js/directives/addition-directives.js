(function(){
    var app = angular.module('addition-directives', []);

    app.directive("dispatch", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/dispatch.html"
        };
    });
    app.directive("customer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/customer.html"
        };
    });
    app.directive("customerStepTwo", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/customer-step-two.html"
        };
    });
    app.directive("customerStepThree", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/customer-step-three.html"
        };
    });
    app.directive("expense", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/expense.html"
        };
    });
    app.directive("shipper", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/shipper.html"
        };
    });
    app.directive("receiver", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/receiver.html"
        };
    });
    app.directive("extCarrierOne", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/ext-carrier-one.html"
        };
    });
    app.directive("extCarrierTwo", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/ext-carrier-two.html"
        };
    });
    app.directive("extCarrierThree", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/ext-carrier-three.html"
        };
    });
    app.directive("driverOne", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/driver-one.html"
        };
    });
    app.directive("driverTwo", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/driver-two.html"
        };
    });
    app.directive("driverThree", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/driver-three.html"
        };
    });
    app.directive("truck", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/truck.html"
        };
    });
    app.directive("trailer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/trailer.html"
        };
    });
    app.directive("broker", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/broker.html"
        };
    });
    app.directive("user", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/adding-pages/content/user.html"
        };
    });

})();
