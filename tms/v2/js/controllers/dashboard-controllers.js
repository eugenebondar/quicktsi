(function(){
    var app = angular.module('dashboard-controllers', []);
    app.controller('reloadLoadsStatsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.loadsTriggerRelink = function() {
            $rootScope.$broadcast('loadsStats');
        };
    }]);
    app.controller('reloadInvoiceStatsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.invoiceTriggerRelink = function() {
            $rootScope.$broadcast('invoiceStats');
        };
    }]);
    app.controller('reloadProgressPanelCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.progressTriggerRelink = function() {
            $rootScope.$broadcast('progressStats');
        };
    }]);
    app.controller('reloadLoadsPanelCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.lpanelTriggerRelink = function() {
            $rootScope.$broadcast('loadsPanel');
        };
    }]);
    app.controller('reloadInvoicePanelCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.ipanelTriggerRelink = function() {
            $rootScope.$broadcast('invoicePanel');
        };
    }]);
    app.controller('reloadLoadsMonthCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.lmonthTriggerRelink = function() {
            $rootScope.$broadcast('loadsMonth');
        };
    }]);
    app.controller('reloadInvoiceMonthCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $rootScope.imonthTriggerRelink = function() {
            $rootScope.$broadcast('invoiceMonth');
        };
    }]);
    app.controller('PiechartCtrl', ['$scope', '$http', function($scope, $http){
        var pie = this;
        pie.items = [];
        $http.get('./data/piechart.json').success(function(data){
            pie.items = data;
        });
        pie.invoice = [];
        $http.get('./data/invoices-stats.json').success(function(data){
            pie.invoice = data;
        });
    }]);

    app.controller("DoughnutCtrl", ["$scope", "$http", function ($scope, $http) {
        var doughnut = this;
        doughnut.items = [];
        $http.get('./data/doughnut.json').success(function(data){
            doughnut.items = data;
        });

        $scope.labels = ["20", "14", "14", "8"];
        $scope.data = [35, 25, 25, 15];
        $scope.color = ["#0cc1bc", "#bcaa56", "#527ab8", "#af65bc"];
        $scope.legend = ["30+ Days", "0+ Days", "60+ Days", "120+ Days"];
        $scope.option = {
            segmentStrokeWidth: 2,
            percentageInnerCutout : 75,
            animationEasing : "easeOut"
        };
    }]);

    app.controller("LoadsBarCtrl", ["$scope", "$http", function ($scope, $http) {

        var bar = this;
        bar.tabs = [
            {"title": "Jan", "id": 1, "url": "templates/pages/dashboard/loads-by-month/jan.html"},
            {"title": "Feb", "id": 2, "url": "templates/pages/dashboard/loads-by-month/feb.html"},
            {"title": "Mar", "id": 3, "url": "templates/pages/dashboard/loads-by-month/mar.html"},
            {"title": "Apr", "id": 4, "url": "templates/pages/dashboard/loads-by-month/apr.html"},
            {"title": "May", "id": 5, "url": "templates/pages/dashboard/loads-by-month/may.html"},
            {"title": "Jun", "id": 6, "url": "templates/pages/dashboard/loads-by-month/jun.html"},
            {"title": "Jul", "id": 7, "url": "templates/pages/dashboard/loads-by-month/jul.html"},
            {"title": "Aug", "id": 8, "url": "templates/pages/dashboard/loads-by-month/aug.html"},
            {"title": "Sep", "id": 9, "url": "templates/pages/dashboard/loads-by-month/sep.html"},
            {"title": "Oct", "id": 10, "url": "templates/pages/dashboard/loads-by-month/oct.html"},
            {"title": "Nov", "id": 11, "url": "templates/pages/dashboard/loads-by-month/nov.html"},
            {"title": "Dec", "id": 12, "url": "templates/pages/dashboard/loads-by-month/dec.html"}
        ];
        $scope.legends = [["Open", "#33a5e0"], ["Loading", "#3BB8AD"], ["On Route", "#DC71A1"], ["Covered", "#C9BB78"], ["Delivered", "#3DCDC9"], ["Refused", "#FFB951"], ["In Yard", "#7595c6"], ["Dispatched", "#BF84C9"], ["Pending", "#f57978"]];

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };

        $scope.janData = [
            [160, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.febData = [
            [120, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.marData = [
            [110, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.aprData = [
            [60, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.mayData = [
            [160, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.junData = [
            [10, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.julData = [
            [180, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.augData = [
            [90, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.sepData = [
            [80, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.octData = [
            [0, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.novData = [
            [25, 230, 125, 180, 110, 155, 50, 210, 165]
        ];
        $scope.decData = [
            [160, 230, 125, 180, 110, 155, 50, 210, 165]
        ];

        $scope.colors = [{fillColor:["#33a5e0", "#ffb951", "#3bb8ad", "#7595c6", "#dc71a1", "#bf84c9", "#c9bb78", "#f57978", "#3dcdc9"]}];
        $scope.labels = ["", "", "", "", "", "", "", "", ""];
        $scope.options = {
            barStrokeWidth: 0,
            scaleGridLineColor : "#e8edf1",
            scaleShowGridLines : true,
            scaleShowVerticalLines: false,
            barValueSpacing: 30,
            scaleFontColor: "#8990a0",
            showTooltips: false
        };

        this.barURL = "templates/pages/dashboard/loads-by-month/jan.html";
        this.showBar = function(url) {
            this.barURL = url;
        };
        this.reloadBar = function(){
            this.selectTab(1);
            this.barURL = "templates/pages/dashboard/loads-by-month/jan.html";
        };
    }]);

    app.controller("InvoicesBarCtrl", ["$scope", "$http", function ($scope, $http) {

        var bar = this;
        bar.tabs = [
            {"title": "Jan", "id": 1, "url": "templates/pages/dashboard/invoices-by-month/jan.html"},
            {"title": "Feb", "id": 2, "url": "templates/pages/dashboard/invoices-by-month/feb.html"},
            {"title": "Mar", "id": 3, "url": "templates/pages/dashboard/invoices-by-month/mar.html"},
            {"title": "Apr", "id": 4, "url": "templates/pages/dashboard/invoices-by-month/apr.html"},
            {"title": "May", "id": 5, "url": "templates/pages/dashboard/invoices-by-month/may.html"},
            {"title": "Jun", "id": 6, "url": "templates/pages/dashboard/invoices-by-month/jun.html"},
            {"title": "Jul", "id": 7, "url": "templates/pages/dashboard/invoices-by-month/jul.html"},
            {"title": "Aug", "id": 8, "url": "templates/pages/dashboard/invoices-by-month/aug.html"},
            {"title": "Sep", "id": 9, "url": "templates/pages/dashboard/invoices-by-month/sep.html"},
            {"title": "Oct", "id": 10, "url": "templates/pages/dashboard/invoices-by-month/oct.html"},
            {"title": "Nov", "id": 11, "url": "templates/pages/dashboard/invoices-by-month/nov.html"},
            {"title": "Dec", "id": 12, "url": "templates/pages/dashboard/invoices-by-month/dec.html"}
        ];
        $scope.legends = [["Created", "#33a5e0"], ["Submitted", "#3BB8AD"], ["Void", "#DC71A1"], ["Paid", "#C9BB78"]];

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };

        $scope.janData = [
            [160, 230, 125, 180]
        ];
        $scope.febData = [
            [120, 230, 125, 180]
        ];
        $scope.marData = [
            [110, 230, 125, 180]
        ];
        $scope.aprData = [
            [60, 230, 125, 180]
        ];
        $scope.mayData = [
            [160, 230, 125, 180]
        ];
        $scope.junData = [
            [10, 230, 125, 180]
        ];
        $scope.julData = [
            [180, 230, 125, 180]
        ];
        $scope.augData = [
            [90, 230, 125, 180]
        ];
        $scope.sepData = [
            [80, 230, 125, 180]
        ];
        $scope.octData = [
            [0, 230, 125, 180]
        ];
        $scope.novData = [
            [25, 230, 125, 180]
        ];
        $scope.decData = [
            [160, 230, 125, 180]
        ];

        $scope.colors = [{fillColor:["#33a5e0", "#c084c8", "#f57978", "#3bb8ad"]}];
        $scope.labels = ["", "", "", ""];
        $scope.options = {
            barStrokeWidth: 0,
            scaleGridLineColor : "#e8edf1",
            scaleShowGridLines : true,
            scaleShowVerticalLines: false,
            barValueSpacing: 105,
            scaleFontColor: "#8990a0",
            showTooltips: false
        };
        this.barURL = "templates/pages/dashboard/invoices-by-month/jan.html";
        this.showBar = function(url) {
            this.barURL = url;
        };
        this.reloadBar = function(){
            this.selectTab(1);
            this.barURL = "templates/pages/dashboard/invoices-by-month/jan.html";
        };
    }]);
})();
