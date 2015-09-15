(function(){
    var app = angular.module('app-directives', ['table-directives', 'filters-directives', 'addition-directives', 'dashboard-directives']);

    app.directive("content", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/content.html"
        };
    });
    app.directive('logoFileLoad', function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/logo-file-load.html",
            scope: {},
            link: function(scope, el, attrs) {
                var file = el.find('input');
                scope.fileName = 'LOGO';
                file.bind('change', function(event) {
                    var files = event.target.files;
                    scope.$apply(function() {
                        scope.fileName = files[0].name;
                        console.log(scope.fileName);
                    });
                });
            }
        };
    });

    app.directive('fileLoad', function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/file-load.html",
            scope: {},
            link: function(scope, el, attrs) {
                var file = el.find('input');
                scope.fileName = 'Add New Document';
                file.bind('change', function(event) {
                    var files = event.target.files;
                    scope.$apply(function() {
                        scope.fileName = files[0].name;
                        console.log(scope.fileName);
                    });
                });
            }
        };
    });

    /** Toggle slide */

    app.directive('slideToggle', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var target = document.querySelector(attrs.slideToggle);
                element.bind('click', function () {
                    $(this).toggleClass('open');
                    $(target).slideToggle();
                });
            }
        }
    });

    app.directive("manageReports", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/manage-reports.html"
        };
    });
    app.directive("taxReports", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/tax-reports.html"
        };
    });
    app.directive("account", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/account.html"
        };
    });
    app.directive("setting", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/setting.html"
        };
    });
    app.directive("functionality", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/functionality.html"
        };
    });
    app.directive("ifta", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/ifta.html"
        };
    });
    app.directive("notes", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/subpages/notes.html"
        };
    });
    app.directive("timepicker", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/timepicker.html",
            scope:true,
            link: function(scope, elem, attrs, ctrl) {
                var timepicker = $(attrs.timeSelector);
                $(document).click(function(e){
                    if ($(e.target).closest(timepicker).length) return;
                    scope.$apply(function(){
                        ctrl.show = false;
                    });
                    e.stopPropagation();
                });
            },
            controller: function() {
                var self = this;
                self.value = '';
                self.timePeriod = "";
                self.hours = "0";
                self.minutes = "00";
                self.show = false;
                self.setTimePeriod = function(val) {
                    self.timePeriod = val;
                };
                self.isTimePeriodSelected = function(val) {
                    return self.timePeriod === val;
                };
                self.setHours = function(val) {
                    self.hours = val;
                };
                self.isHoursSelected = function(val) {
                    return self.hours === val;
                };
                self.setMinutes = function(val) {
                    self.minutes = val;
                };
                self.isMinutesSelected = function(val) {
                    return self.minutes === val;
                };
                self.changed = function(val) {
                    self.value = self.hours+":"+self.minutes+" "+self.timePeriod;
                };
                self.showTime = function() {
                    self.show = true;
                };
            },
            controllerAs: 'time'
        };
    });



})();
