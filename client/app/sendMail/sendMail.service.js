'use strict';

angular.module('lumbajackApp')
  .factory('sendMail', ['$http', function ($http) {
  	return {
  		post: function (data, callback) {
  			$http.post('/api/contact', data).then(function(res){
  				callback(res);
  			}, function(errRes){
  				callback(errRes);
  			});
  		}
  	};
  }]);