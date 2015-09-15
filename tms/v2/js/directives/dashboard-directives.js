(function(){
    var app = angular.module('dashboard-directives', []);
    app.directive('loadsRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;

                var loadsTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                loadsTriggerRelink();
                $rootScope.$on(attr.loadsRelinkEvent, loadsTriggerRelink);
            }
        };
    });
    app.directive('invoiceRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;

                var invoiceTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                invoiceTriggerRelink();
                $rootScope.$on(attr.invoiceRelinkEvent, invoiceTriggerRelink);
            }
        };
    });
    app.directive('progressRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;

                var progressTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                progressTriggerRelink();
                $rootScope.$on(attr.progressRelinkEvent, progressTriggerRelink);
            }
        };
    });
    app.directive('lpanelRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;
                var lpanelTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                lpanelTriggerRelink();
                $rootScope.$on(attr.lpanelRelinkEvent, lpanelTriggerRelink);
            }
        };
    });
    app.directive('ipanelRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;
                var ipanelTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                ipanelTriggerRelink();
                $rootScope.$on(attr.ipanelRelinkEvent, ipanelTriggerRelink);
            }
        };
    });
    app.directive('lmonthRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;
                var lmonthTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                lmonthTriggerRelink();
                $rootScope.$on(attr.lmonthRelinkEvent, lmonthTriggerRelink);
            }
        };
    });
    app.directive('imonthRelinkEvent', function($rootScope) {
        return {
            transclude: 'element',
            restrict: 'A',
            link: function(scope, element, attr, ctrl, transclude) {
                var previousContent = null;
                var imonthTriggerRelink = function() {
                    if (previousContent) {
                        previousContent.remove();
                        previousContent = null;
                    }
                    transclude(function (clone) {
                        element.parent().append(clone);
                        previousContent = clone;
                    });
                };
                imonthTriggerRelink();
                $rootScope.$on(attr.imonthRelinkEvent, imonthTriggerRelink);
            }
        };
    });
    app.directive("piechart", function() {
        var linkFunction = function(scope, element, attrs){
            var progress = 0,
                canvas = element.children()[0],
                context = canvas.getContext('2d'),
                x = canvas.width / 2,
                y = canvas.height / 2,
                radius = 41,
                grayStartAngle = Math.PI,
                grayEndAngle = 4 * Math.PI;

            scope.color = attrs.color;
            scope.fulfill = attrs.fulfill;
            scope.value = attrs.value;

            function drawProgress(context, progress){
                context.clearRect(0, 0, canvas.width, canvas.height);
                // textAlign aligns text horizontally relative to placement
                context.textAlign = 'center';
                // textBaseline aligns text vertically relative to font style
                context.textBaseline = 'middle';

                context.beginPath();
                context.arc(x, y, radius, grayStartAngle, grayEndAngle);
                context.lineWidth = 9;
                context.strokeStyle = '#e5eaed';
                context.stroke();

                if (attrs.fulfill == "100") {
                    context.beginPath();
                    context.arc(x, y, radius, 0, 2 * Math.PI, false);
                    context.fillStyle = '#0AA699';
                    context.fill();
                    context.stroke();

                    context.font = '16px Arial';
                    context.fillStyle = "#ffffff";
                    context.fillText(scope.value, x, y);

                } else {
                    context.fillStyle = '#8990a0';
                    context.fillText("("+scope.fulfill+"%)", x, y+7);
                    context.font = '12px Arial';
                    // textAlign aligns text horizontally relative to placement
                    context.textAlign = 'center';
                    // textBaseline aligns text vertically relative to font style
                    context.textBaseline = 'middle';
                    context.font = '12px Arial';
                    context.fillStyle = scope.color;
                    context.fillText(scope.value, x, y-7);
                }
                var startAngle = 1.5 * Math.PI;
                var endAngle = ((3.6 * scope.fulfill) * Math.PI / 180)*progress/100 + 1.5 * Math.PI ;
                var counterClockwise = false;

                context.beginPath();
                context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
                context.lineWidth = 9;
                context.strokeStyle = scope.color;
                context.lineCap = 'round';
                context.stroke();
            }

            setInterval(function(){
                if (progress <= 100) {
                    drawProgress(context, progress);
                    progress += 1;
                }
            }, 15);

        };
        return {
            restrict: 'E',
            templateUrl: "templates/canvas/piechart.html",
            link: linkFunction
        };
    });
    app.directive("loadsStats", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/loads-stats.html"
        };
    });
    app.directive("loadsPanel", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/loads-panel.html"
        };
    });
    app.directive("loadsByMonths", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/loads-by-months.html"
        };
    });
    app.directive("invoicesPanel", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/invoices-panel.html"
        };
    });
    app.directive("invoicesStats", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/invoices-stats.html"
        };
    });
    app.directive("invoicesByMonths", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/invoices-by-months.html"
        };
    });
    app.directive("progressPanel", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/pages/dashboard/progress-panel.html"
        };
    });
})();
