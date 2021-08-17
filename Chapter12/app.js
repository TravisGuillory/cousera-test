(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope", "$filter"];
  function MsgController($scope, $filter) {
    $scope.name = "Farthead";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage= function() {
        var msg = "You are a Farthead";
        var output = $filter("uppercase")(msg);
        return output;

    };

    $scope.feedFarthead = function () {
        $scope.stateOfBeing = "fed";
      };


  }
})();
