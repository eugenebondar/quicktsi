(function(){
    var app = angular.module('app-directives', ['table-directives', 'filters-directives']);

    app.directive("content", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/content.html"
        };
    });

    app.directive("checkbox-element", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/checkbox.html"
        };
    });

    app.directive("filters", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/filters.html"
        };
    });

    app.directive("toolbar", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/toolbar.html"
        };
    });

    app.directive("selwrap", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/select-wrap.html"
        };
    });

    app.directive("bottomToolbar", function() {
        return {
            restrict: 'E',
            templateUrl: "templates/views/bottom-toolbar.html"
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

})();
