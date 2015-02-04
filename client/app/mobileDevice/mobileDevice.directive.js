'use strict';

angular.module('lumbrjackApp')
  .directive('mobileDevice', function () {
    return {
      templateUrl: 'app/mobileDevice/mobileDevice.html',
      restrict: 'EA',
      scope: {
      	mobileImage: '@',
      	mobileAlt: '@',
        deviceType: '@',
        colour: '@',
        orientation: '@'
      },
      link: function (scope) {

        var type = scope.deviceType || 'iphone6';
        var topBar=false, sleep=false, home=false, bottomBar=false, volume=false, sensor=false, speaker=false;

        if (type !== 'ipad') {topBar=true;}
        if (type !== 'ipad' && type !== 'htc-one' && type !== 'lumia920') {sleep=true;}
        if (type !== 'ipad' && type !== 'htc-one' && type !== 's5') {volume=true;}
        if (type !== 'ipad' && type !== 'nexus5' && type !== 'lumia920') {sensor=true;}
        if (type !== 'ipad' && type !== 'nexus5') {speaker=true;}
        if (type !== 'nexus5' && type !== 'lumia920' && type !== 'htc-one') {home=true;}
        if (type !== 'ipad' && type !== 's5' && type !== 'nexus5' &&
            type !== 'lumia920' && type !== 'htc-one') {bottomBar=true;}

        // Public

      	scope.image = '/assets/images/' + scope.mobileImage;
      	scope.alt = scope.mobileAlt;
        scope.type = type;
        scope.topBar = topBar;
        scope.sleep = sleep;
        scope.home = home;
        scope.bottomBar = bottomBar;
        scope.volume = volume;
        scope.sensor = sensor;
        scope.speaker = speaker;
      }
    };
  });