'use strict';

angular.module('lumbajackApp')
  .directive('contactForm', ['sendMail', function (sendMail) {
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

        var l = Ladda.create(document.querySelector('.contact-btn'));

        var callback = function (data){
          console.log(data);
          
  	  	};
  
  	  	var postMail = function(){
          l.start();
  	      sendMail.post(emailData, callback)
          .then(function(){
            // Success function
            scope.emailData = {
              from: '',
              name: '',
              body: ''
            };
            angular.element('.input__field').parent().removeClass('input--filled');
            l.stop();
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