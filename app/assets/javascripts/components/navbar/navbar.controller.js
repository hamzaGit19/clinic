angular
  .module('clinic')
  .controller('NavController', function($scope, Auth, $rootScope){
    vm = this;
    vm.location = location.hash;
    $scope.location = location.hash;
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
    // Auth.currentUser().then(function (user){
    //   $rootScope.user = user
    // });
    $scope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      alert("You have been logged out.")
      $rootScope.user = undefined
    });
})