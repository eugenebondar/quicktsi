(function(){
    var app = angular.module('table-directives', []);


    app.directive("tableLoads", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-loads.html"
        };
    });

    app.directive("tableExpenses", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-expenses.html"
        };
    });
    app.directive("tableInvoices", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-invoices.html"
        };
    });
    app.directive("tableTms", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-tms.html"
        };
    });
    app.directive("tableCustomer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-customer.html"
        };
    });
    app.directive("tableShipper", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-shipper.html"
        };
    });
    app.directive("tableReceiver", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-receiver.html"
        };
    });
    app.directive("tableExternal", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-external.html"
        };
    });
    app.directive("tableDriver", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-driver.html"
        };
    });
    app.directive("tableTruck", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-truck.html"
        };
    });
    app.directive("tableTrailer", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-trailer.html"
        };
    });
    app.directive("tableDocument", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-document.html"
        };
    });
    app.directive("tableBroker", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-broker.html"
        };
    });
    app.directive("tableAlert", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-alert.html"
        };
    });
    app.directive("tableDriverPay", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-driver-pay.html"
        };
    });
    app.directive("tableSalesRep", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-sales-rep.html"
        };
    });
    app.directive("tableCarrierPay", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/tables/table-carrier-pay.html"
        };
    });

})();
