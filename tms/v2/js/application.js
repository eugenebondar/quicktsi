(function() {
    var app = angular.module('app', ['app-controllers', 'app-directives', 'ngRoute', '720kb.datepicker', 'chart.js']);

    app.config(function($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
    });

    app.controller('AppController', function () {
    });


})();
