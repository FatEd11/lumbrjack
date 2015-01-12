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

  	ctrl.postMail = function(data) {
  		$http.post('/api/contact', data);
  	};

  }]);
