(function () {

  'use strict';

  /**
   * @ngdoc function
   * @name desafioApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the desafioApp
   */
  function MainCtrl($scope, dribbbleService) {
    var self = this;

    // Informações iniciais
    self.shots = [];
    self.shot = {};
    self.modal = {
      show: false
    }
    self.page = 1;

    // Buscar shots por uma determinada pagina
    function getShots() {
      dribbbleService.getPopularShots(self.page)
        .then(function (res) {
          self.shots = self.shots.concat(res.data);
        }, function () {
          self.shots = [];
        });
    }

    // Carregar mais Shots
    self.loadMore = function () {
      // Adicionar mais um em paginas para pegar a proxima
      self.page++;
      getShots();
    };

    // Abrir um shot Especifico
    self.openShot = function (id) {
      // Limpar Conteudo
      self.shot = {};
      dribbbleService.getShot(id).then(function (data) {
        self.shot = data.data;
        self.modal.show = true;
      }, function () {
        self.modal.show = false;
      });
    }

    // Fechar modal, clicando no botão ao na overlay
    self.closeModal = function () {
      self.modal.show = false;
    }

    // Iniciar a busca de shots ao carregar controller.
    getShots();
  }

  angular.module('desafioApp')
    .controller('MainCtrl', MainCtrl);
    
})();