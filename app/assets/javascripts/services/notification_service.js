(function (){
  'use strict';
  angular
    .module('clinic')
    .factory('notificationService', notificationService);

  function notificationService () {
    function repositionCorner () {
      var $navbar = $('body navbar'),
        $corner = $('.notifyjs-corner'),
        navbarBottom = 0;
      if ($navbar.length) {
        navbarBottom = $navbar.position().top + $navbar.height();
      }
      if (!$navbar.length && $corner.length && $corner.css('top') !== 0) {
        return $corner.css('top', 0);
      }
      if ($navbar.length && $corner.length && $corner.css('top') !== navbarBottom) {
        return $corner.css('top', navbarBottom);
      }
    }

    var service = {
      info: function (message) {
        $.notify(message, {
          className: 'info',
          autoHide: true
        });
        repositionCorner();
      },
      error: function (message) {
        $.notify(message, {
          className: 'error',
          autoHide: true
        });
        repositionCorner();
      },
      error_click_to_hide: function (message) {
        $.notify(message, {
          className: 'error',
          autoHide: false,
        });
        repositionCorner();
      },
      error_delay: function (message, ms) {
        $.notify(message, {
          className: 'error',
          autoHide: true,
          autoHideDelay: ms
        });
        repositionCorner();
      },
      success_click_to_hide: function (message) {
        $.notify(message, {
          className: 'success',
          autoHide: false,
        });
        repositionCorner();
      },
      success: function (message) {
        $.notify(message, {
          className: 'success',
          autoHide: true
        });
        repositionCorner();
      },
      notify: function (message, options) {
        $.notify(message, options);
        repositionCorner();
      },
      hide: function () {
        $('.notifyjs-bb-style-base').trigger('notify-hide');
      }
    };

    return service;
  }
})();
