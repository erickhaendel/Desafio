(function () {
    'use strict';

    /**
     * Rolagem Infinita
     */
    function infiniteScroll() {

        return {
            link: function (scope, element, attrs) {
                setTimeout(function () {
                    $(window).on('scroll', function () {
                        if ($(window).scrollTop() + $(window).height() >= $(element).height()) {
                            scope.$apply(attrs.infiniteScroll);
                        }
                    });
                }, 1000);
            }
        };
    }
    
    angular.module('desafioApp')
        .directive('infiniteScroll', infiniteScroll);

})();