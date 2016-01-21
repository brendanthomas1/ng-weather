angular.module("ngWeather")
.factory('weatherService', ['$http', '$q', function($http, $q) {

	function getWeather(zip) {
		var deffered = $q.defer();

		var req = {
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&appid=9bf36c32d7576ae77280d4735bca625d',
			headers: {},
			data: {}
		}

		$http(req)
		.success(function(data) {
			console.dir(data);
			deffered.resolve(data);
		}).error(function(err) {
			console.log("Error getting weather");
			deffered.reject(err);
		})
		return deffered.promise;
	}

	return {
		getWeather: getWeather
	}
}])