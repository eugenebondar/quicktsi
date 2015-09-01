(function(){
    var app = angular.module('filters-directives', []);

    app.directive("toolbarDriverPay", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/toolbars/toolbar-driver-pay.html"
        };
    });
    app.directive("filterDriverPay", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-driver-pay.html"
        };
    });
    app.directive("filterSalesRep", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-sales-rep.html"
        };
    });
    app.directive("bottomToolbar", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/toolbars/bottom-toolbar.html"
        };
    });
    app.directive("toolbar", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/toolbars/toolbar.html"
        };
    });
    app.directive("filterLoads", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-loads.html"
        };
    });
    app.directive("filterInvoices", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-invoices.html"
        };
    });
    app.directive("filterExpenses", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-expenses.html"
        };
    });
    app.directive("filterCustomer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-customer.html"
        };
    });
    app.directive("filterShipper", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-shipper.html"
        };
    });
    app.directive("filterReceiver", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-receiver.html"
        };
    });
    app.directive("filterExternal", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-external.html"
        };
    });
    app.directive("filterDriver", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-driver.html"
        };
    });
    app.directive("filterTruck", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-truck.html"
        };
    });
    app.directive("filterTrailer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-trailer.html"
        };
    });
    app.directive("filterBroker", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters/filter-broker.html"
        };
    });

})();
