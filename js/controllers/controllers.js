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
    }]);

})();
