var haveWeather = false;
var description;
var desString;

angular.module("ngWeather")
.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
	function fetchWeather(zip) {
		weatherService.getWeather(zip).then(function(data) {
			$scope.weather = data;
			haveWeather = true;
			description = data.weather[0].id;
			desString = data.weather[0].id.toString();
			console.log(description);
			backgroundColor();
		})
	}

	$scope.findWeather = function(zip) {
		$scope.zip = '';
		fetchWeather(zip);
	}
}])