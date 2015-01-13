'use strict';

angular.module('lumbajackApp')
  .factory('sendMail', ['$http', '$q', function ($http, $q) {
  	return {
  		post: function (data) {

        var deferred = $q.defer();

  			$http.post('/api/contact', data)
        .success(function(res){
  				deferred.resolve(res);
  			})
        .error(function(errRes){
  				deferred.reject(errRes);
  			});

        return deferred.promise;
  		}
  	};
  }]);