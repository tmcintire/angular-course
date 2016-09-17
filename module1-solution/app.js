(function () {
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkTooMuch = function() {
      if ($scope.lunchMenu === undefined || $scope.lunchMenu === ""){
        $scope.result = "Please enter data first";
      } else {
        var num = $scope.lunchMenu.split(',').length;
        if (num <= 3) {
          $scope.result = "Enjoy!";
        } else if(num > 3) {
          $scope.result = "Too much!";
        }
      }
    };
  };
})();
