(function(){
    var app = angular.module('app-controllers', ['table-controllers', 'tabs-controllers', 'dashboard-controllers']);

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

        this.popupURL = "";
        this.showPopup = function(url, bool) {
            if (bool) {
                this.popupURL = url;
                $('.popup-wrap').addClass('open');
            }
        };
    });
    app.controller('MenuListCtrl', ['$http', '$scope','$location', function($http, $scope, $location){
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === "/tms/v2/#" + $location.path());
            return active;
        };
        var menu = this;
        menu.items = [];
        $http.get('./data/navigation.json').success(function(data){
            menu.items = data;
        });

        //this.name = "Dashboard";
        this.selectTab = function(setTab){
            this.name = setTab;
        };
        this.isSelected = function(checkTab){
            return this.name === checkTab;
        }

    }]);
    app.controller('popupCtrl', function(){
        this.closePopup = function(){
            $('.popup-wrap').removeClass('open')
        };
    });


})();
