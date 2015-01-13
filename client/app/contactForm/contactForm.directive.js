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

        
      }
    };
  }]);