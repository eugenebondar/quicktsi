(function(){
    var app = angular.module('table-controllers', []);

    app.controller('LoadsPageTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/load-page-table.json').success(function(data){
            row.items = data;
        });
        row.selector = ".slideable-load";
    }]);
    app.controller('ExpansesPageTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/expenses-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('InvoicesPageTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/invoices-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('TmsPageTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/tms-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('CustomerTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/customer-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('ShipperTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/shipper-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('ReceiversTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/receivers-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('ExternalTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/external-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('DriverTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/driver-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('TruckTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/trucks-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('TrailerTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/trailer-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('DocumentTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/document-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('BrokerTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/broker-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('AlertTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/alert-table.json').success(function(data){
            row.items = data;
        });
    }]);
    app.controller('DriverPayTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/driver-pay-table.json').success(function(data){
            row.items = data;
        });
        row.selector = ".slideable-account";
    }]);
    app.controller('SalesRepTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/sales-rep-table.json').success(function(data){
            row.items = data;
        });
        row.selector = ".slideable-sales-rep";
    }]);
    app.controller('CarrierPayTableCtrl', ['$http', function($http){
        var row = this;
        row.items = [];
        $http.get('./data/tables/carrier-apy-table.json').success(function(data){
            row.items = data;
        });
        row.selector = ".slideable-carrier-pay";
    }]);

})();
