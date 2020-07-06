angular
  .module('clinic')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .state('appointment', {
        url: '/appointment/new',
        templateUrl: 'views/appointment.html',
        controller: 'AppointmentCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })