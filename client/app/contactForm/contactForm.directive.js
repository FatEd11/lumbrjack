'use strict';

angular.module('lumbajackApp')
  .directive('contactForm', ['sendMail', '$timeout', function (sendMail, $timeout) {
    return {
      templateUrl: 'app/contactForm/contactForm.html',
      restrict: 'EA',
      scope: {},
      link: function (scope) {

      	// SEND EMAIL FUNCTIONS

        var emailData = {
          from: '',
          name: '',
          body: ''
        };

        scope.messageSent = false;
        var sentMessage = function(){
          scope.messageSent = true;
          $timeout(function(){
            scope.messageSent=false;
          }, 5000);
        };

        var l = Ladda.create(document.querySelector('.contact-btn'));
  
  	  	var postMail = function(){
          l.start();
  	       sendMail.post(emailData)
           .then(function(){
            scope.emailData = {
              from: '',
              name: '',
              body: ''
            };
            angular.element('.input__field').parent().removeClass('input--filled');
            l.stop();
            scope.contactForm.$setPristine();
            sentMessage();
          });
  	    };
  
  	    scope.emailData = emailData;
  	    scope.postMail = postMail;

        // FORM ANIMATION FUNCTIONS

        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        var inputs = angular.element('.input__field');

        angular.forEach(inputs, function(inputEl){
          var inputElement = angular.element(inputEl);
          inputElement.on('focusout', function(){
            var valueE = inputElement.val().replace(rtrim, '');
            if (valueE !== '') {
              inputElement.parent().addClass('input--filled');
            } else {
              inputElement.parent().removeClass('input--filled');
            }
          });
        });

      }
    };
  }]);