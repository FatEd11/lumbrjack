'use strict';

angular.module('lumbajackApp')
  .controller('MainCtrl', ['$http', 'sendMail', function ($http, sendMail) {
  	var ctrl = this;

  	var emailData = {
  		from: '',
  		name: '',
  		body: ''
  	};

  	var handleSuccess = function (data){
  		console.log(data);
  	};

  	var postMail = function(){
      sendMail.post(emailData, handleSuccess);
    };

    ctrl.emailData = emailData;
    ctrl.postMail = postMail;

  }]);
