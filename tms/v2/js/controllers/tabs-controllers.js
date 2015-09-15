(function(){
    var app = angular.module('tabs-controllers', []);

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
    app.controller('ProfileTabCtrl', ['$http', function($http){
        var acc = this;
        acc.items = [];
        $http.get('./data/profile.json').success(function(data){
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
    app.controller('CustomerTabCtrl', ['$http', function($http){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);
    app.controller('ExternalTabCtrl', ['$http', function($http){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);
    app.controller('DriverlTabCtrl', ['$http', function($http){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    }]);
})();
