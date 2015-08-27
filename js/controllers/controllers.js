(function(){
    var app = angular.module('app-controllers', ['table-controllers']);

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
    }]);


    app.controller('ToolbarCtrl', function() {
        this.showFilter = false;
        this.toggleFilter = function(){
            this.showFilter ? this.showFilter = false : this.showFilter = true;
        };
        this.isShow = function(){
            return this.showFilter;
        }
    });

    app.controller('PanelCtrl', ['$http', function($http){
        var admin = this;
        admin.items = [];
        $http.get('./data/administrations.json').success(function(data){
            admin.items = data;
        });

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);

    app.controller('AccountTabCtrl', ['$http', function($http){
        var acc = this;
        acc.items = [];
        $http.get('./data/accounting.json').success(function(data){
            acc.items = data;
        });

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);

    app.controller('ReportsTabCtrl', ['$http', function($http){
        var acc = this;
        acc.items = [];
        $http.get('./data/reports.json').success(function(data){
            acc.items = data;
        });

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);


})();
