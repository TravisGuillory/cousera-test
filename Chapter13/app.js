(function () {
  "use strict";

  angular.module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter('big', BigFilter);

  MsgController.$inject = ["$scope", "bigFilter"];
  function MsgController($scope, bigFilter) {
    $scope.name = "Farthead";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage= function() {
        var msg = "You are a Farthead";
        return msg;
    };

    $scope.sayBigMessage= function() {
        var msg = "You are a Farthead";
        msg = bigFilter(msg)
        return msg;
    };

    $scope.feedFarthead = function () {
        $scope.stateOfBeing = "fed";
      };

  }
  function BigFilter(){
      return function(input){
        input = input || "";
        input = input.replace("a ", "a big ");
        return input;
      };
  }
})();
