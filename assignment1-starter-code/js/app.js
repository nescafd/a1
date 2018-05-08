(function () {
  'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function  LunchCheckController($scope) {

    $scope.checkLunch = function () {
      if($scope.lunch == "" || $scope.lunch == undefined)
      {
        $scope.message = "Please enter data first"
      } else {
        $scope.message = ($scope.lunch.split(",").length > 4 ) ? "Too much!" : "Enjoy!";
      }

    };
  }


})();
