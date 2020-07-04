angular
  .module('clinic')
  .directive('navBar', function NavBar(){
      console.log('in nav')
    return {
      templateUrl: 'views/nav.html',
      controller: 'NavCtrl'
    }
})