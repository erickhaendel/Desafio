'use strict';

/**
 * @ngdoc function
 * @name desafioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desafioApp
 */
angular.module('desafioApp')
  .controller('MainCtrl', function ($scope, dribbbleService) {
    var self = this;

    self.shots = [];
    self.shot = {};
    self.modal = {
      show : false
    }
    self.page = 1;

    function initialize() {
      dribbbleService.getPopularShots(self.page).then(renderShots, clearShots);
    }


    function renderShots(shots) {
      self.shots = self.shots.concat(shots.data);
    }

    /*
    * Limpa a lista de 'shots'
    */
    function clearShots() {
      self.shots = [];
      // $core.runningSroll = true;
      // $core.setLoading(false);
    }

    self.loadMore = function () {
      self.page++;
      initialize();
    };

    self.openShot = function (id) {
      dribbbleService.getShot(id).then(function (data) {
        self.shot = data.data;
        self.modal.show = true;
        console.log(self.shot);
      }, function () {
        console.log('Falha');
        self.modal.show = false;
      });
    }

    self.closeModal = function(){
      self.modal.show = false;
    }

    self.nothing= function(e){
      console.log(e);
    }

    initialize();
  });
