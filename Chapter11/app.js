(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Farthead";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage= function() {
      return  "You are a Farthead!"

    };

    $scope.feedFarthead = function () {
        $scope.stateOfBeing = "fed";
      };


  }
})();
