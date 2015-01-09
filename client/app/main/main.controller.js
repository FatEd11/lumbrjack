'use strict';

angular.module('lumbajackApp')
  .controller('MainCtrl', ['$http', function ($http) {
  	var ctrl = this;

  	ctrl.emailData = {
  		from: '',
  		name: '',
  		body: ''
  	};

  	var handleSuccess = function (data){
  		console.log(data);
  	};

  	var postMail = function(data, callback) {
  		$http.post('/api/contact', data).success(callback);
  	};

  	ctrl.postMail = postMail(ctrl.emailData, handleSuccess);

  }]);
