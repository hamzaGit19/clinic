angular
  .module('clinic')
  .controller('NavCtrl', function($scope, Auth, $rootScope){
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
    console.log('in nav 2')

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

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