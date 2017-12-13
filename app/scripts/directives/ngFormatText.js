(function () {

    'use strict';

    function ngFormatText() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var text = attrs.text ? attrs.text : '';
                var length = attrs.length ? attrs.length : 30;
                if (text.length > length) {
                    text = String(text).replace(/<[^>]+>/gm, '').substring(0, length) + '...';
                }

                element.empty().append(text);
            }
        };
    }

    angular.module('desafioApp')
        .directive('ngFormatText', ngFormatText);

})();
