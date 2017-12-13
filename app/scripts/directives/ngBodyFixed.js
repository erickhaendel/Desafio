(function () {

    'use strict';

    function ngBodyFixed() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                scope.$watch(attrs.ngBodyFixed, function (n, o) {
                    if (n) { 
                        $('body').addClass('no-scroll') ;
                    } else {
                        $('body').removeClass('no-scroll') ;
                    };
                });
            }
        };
    }

    angular.module('desafioApp')
        .directive('ngBodyFixed', ngBodyFixed);

})();
