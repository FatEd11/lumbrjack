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

        var callback = function (data){
          console.log(data);
  	  	};
  
  	  	var postMail = function(){
  	      sendMail.post(emailData, callback).then(function(){
            emailData = {
              from: '',
              name: '',
              body: ''
            };
          });
  	    };
  
  	    scope.emailData = emailData;
  	    scope.postMail = postMail;

        // FORM ANIMATION FUNCTIONS

        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        var inputs = angular.element('input.input__field');

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