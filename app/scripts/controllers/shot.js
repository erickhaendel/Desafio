(function () {
    'use strict';

    function ShotCtrl($routeParams, dribbbleService) {
        var vm = this;

        vm.shots = [];
        vm.shot = {};
        vm.page = 1;
        
        function initialize(){
          dribbbleService.getShot($routeParams.id).then(renderShots, clearShots);
        }
    
    
        function renderShots (shots) {
          vm.shots = vm.shots.concat(shots.data);
        }
    
        /*
        * Limpa a lista de 'shots'
        */
        function clearShots() {
            vm.shots = [];
            // $core.runningSroll = true;
            // $core.setLoading(false);
        }
    
        
        initialize();

    }

    angular.module('desafioApp')
        .controller('ShotCtrl', ShotCtrl);

    ShotCtrl.$inject = ['$routeParams', 'dribbbleService'];
})();