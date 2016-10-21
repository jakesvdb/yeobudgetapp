
angular.module('angularJsApp') 
.controller('categoriesCtrl', function ($scope) {

        $scope.categories = [
        {
          id: 'Nexus S',
          description: 'Fast just got faster with Nexus S.',
          monthly: 1,
          budgetAmount: 200.00
        }, {
          id: 'Motorola XOOM™ with Wi-Fi',
          description: 'The Next, Next Generation tablet.',
          monthly: 2,
          budgetAmount: 200.00
        }, {
          id: 'MOTOROLA XOOM™',
          description: 'The Next, Next Generation tablet.',
          monthly: 3,
          budgetAmount: 200.00
        }
      ];
});