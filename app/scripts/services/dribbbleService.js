(function(){
    'use strict';

    /**
     * Serviço Dribbble
     * @param {*}  
     * @param {*}  
     */
    function dribbbleService($http, $q){

        /*jshint camelcase: false */
        var service = {
            access_token: 'c8fec4330a56c65cfcbf63a278037dd27eae8a7b512a27bcad7bf98beeb19cf2',
            token_type: 'bearer',
            url: 'https://api.dribbble.com/v1/shots/'
        };

        /**
         * Buscar shots Populares
         * @param {number} page - Numero da pagina
         * @return {object} $q
         */
        service.getPopularShots = function (page) {
            var deferred = $q.defer();
            /*jshint camelcase: false */
            $http.get(service.url, {
                params: {
                    page: page,
                    sort: 'views',
                    access_token: service.access_token,
                    token_type: service.token_type
                }
            }).then(function (data) {
                deferred.resolve(data);
            } , function (e) {
                deferred.reject(e);
            });
            return deferred.promise;
        };

        /**
         * Buscar um chat especifico
         * @param {*} id - Identificador do Shot
         * @return {object} $q
         */
        service.getShot = function (id) {
            var deferred = $q.defer();
            /*jshint camelcase: false */
            $http.get(service.url + id, {
                params: {
                    access_token: service.access_token,
                    token_type: service.token_type
                }
            }).then(function (data) {
                deferred.resolve(data);
            } , function (e) {
                deferred.reject(e);
            });
            return deferred.promise;
        };

        return service;
    }

    /**
     * Inicialização do Serviço
     */
    angular.module('desafioApp')
    .factory('dribbbleService' , dribbbleService);

    /**
     * Injeção de dependencias
     */
    dribbbleService.$inject = ['$http', '$q'];
})();