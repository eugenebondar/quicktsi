(function(){
    var app = angular.module('app-controllers', ['table-controllers', 'tabs-controllers']);

    app.controller('contentCtrl', function() {
        this.openMenu = false;

        this.toggleMenu = function(){
            this.openMenu ? this.openMenu = false : this.openMenu = true;
        };

        this.isOpen = function(){
            return this.openMenu;
        };

        this.refresh = function(){
            location.reload();
        };
    });

    app.controller('MenuListCtrl', ['$http', function($http){
        var menu = this;
        menu.items = [];
        $http.get('./data/navigation.json').success(function(data){
            menu.items = data;
        });

        this.name = "Dashboard";
        this.selectTab = function(setTab){
            this.name = setTab;
        };
        this.isSelected = function(checkTab){
            return this.name === checkTab;
        }

    }]);

    app.controller('PiechartCtrl', ['$http', function($http){
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
            {"title": "Jan", "id": 1},
            {"title": "Feb", "id": 2},
            {"title": "Mar", "id": 3},
            {"title": "Apr", "id": 4},
            {"title": "May", "id": 5},
            {"title": "Jun", "id": 6},
            {"title": "Jul", "id": 7},
            {"title": "Aug", "id": 8},
            {"title": "Sep", "id": 9},
            {"title": "Oct", "id": 10},
            {"title": "Nov", "id": 11},
            {"title": "Dec", "id": 12}
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
            responsive: true,
            showTooltips: false
        };


    }]);

    app.controller("InvoicesBarCtrl", ["$scope", "$http", function ($scope, $http) {

        var bar = this;
        bar.tabs = [
            {"title": "Jan", "id": 1},
            {"title": "Feb", "id": 2},
            {"title": "Mar", "id": 3},
            {"title": "Apr", "id": 4},
            {"title": "May", "id": 5},
            {"title": "Jun", "id": 6},
            {"title": "Jul", "id": 7},
            {"title": "Aug", "id": 8},
            {"title": "Sep", "id": 9},
            {"title": "Oct", "id": 10},
            {"title": "Nov", "id": 11},
            {"title": "Dec", "id": 12}
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
            barValueSpacing: 85,
            scaleFontColor: "#8990a0",
            responsive: true,
            showTooltips: false
        };

    }]);

})();
