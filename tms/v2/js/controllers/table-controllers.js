(function(){
    var app = angular.module('table-controllers', ['angularUtils.directives.dirPagination']);

    app.controller('LoadsPageTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/load-page-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-load";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });

    app.controller('ExpansesPageTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/expenses-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-expenses";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('InvoicesPageTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/invoices-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-invoices";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('TmsPageTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/tms-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-tms";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        }
    });
    app.controller('CustomerTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/customer-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-customer";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('ShipperTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/shipper-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-shipper";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('ReceiversTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/receivers-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-receiver";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('ExternalTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/external-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-external";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('DriverTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/driver-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-driver";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('TruckTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/trucks-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-truck";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('TrailerTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/trailer-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-trailer";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('DocumentTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/document-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
    });
    app.controller('BrokerTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/broker-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-broker";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('AlertTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/alert-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-alert";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('DriverPayTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/driver-pay-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-account";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('SalesRepTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/sales-rep-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-sales-rep";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('CarrierPayTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/carrier-apy-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-carrier-pay";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        };
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        };
    });
    app.controller('TaxReportsTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/tax-reports-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        }
    });
    app.controller('CreateInvoiceTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/cr-invoice-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }

        }
    });
    app.controller('CreateInvoiceStepTwoTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/cr-invoice-2-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }

        }
    });
    app.controller('CreateInvoiceStepThreeTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/cr-invoice-2-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }

        }
    });
    app.controller('ProgressTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/progress-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-carrier-pay";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }

        }
    });
    app.controller('CategoryListTableCtrl',function($scope, $http){
        $scope.items = [];
        var self = this;
        $http.get("./data/tables/category-list-table.json").success(function(response){
            $scope.items = response;
            self.amountLabel = response.length;
            if(self.amountLabel<10) {
                self.toLabel = self.amountLabel;
                self.isPagination = false;
            } else {
                self.toLabel = 10;
                self.isPagination = true;
            }
        });
        self.selector = ".slideable-carrier-pay";
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        };
        self.fromLabel = 1;
        self.itemAmount = 10;
        $scope.amountTable=10;
        $scope.options=[{id:1,value:10},{id:2,value:25},{id:3,value:50},{id:4,value:100}]
        $scope.changedValue = function(item){
            if (item.value < self.amountLabel) {
                self.itemAmount = item.value;
                self.isPagination = true;
            } else {
                self.itemAmount = self.amountLabel;
                self.isPagination = false;
            }
        }
        self.pageChanged = function(value){
            self.fromLabel = ((value-1)*self.itemAmount)+1;
            if ((self.amountLabel - value*self.itemAmount) < 0) {
                self.toLabel = self.amountLabel;
            } else {
                self.toLabel = value*self.itemAmount;
            }
        }
    });
})();
