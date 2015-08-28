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

})();
