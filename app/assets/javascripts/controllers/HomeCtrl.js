angular
  .module('clinic')
  .controller('HomeCtrl', function($scope, $rootScope, Auth){
    $scope.hello = "Hello World"
    $('.withOptions').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplayspeed: 1000,
   });
  })