var bodyBg = document.getElementById('body');
var dataPara = document.getElementById('weatherData');
var title = document.getElementById('title');

function bgImg(imgName) {
	bodyBg.style.background = "url(../imgs/" + imgName + ".jpg) no-repeat center center fixed";
	bodyBg.style.backgroundSize = "cover";
}


function backgroundColor() {

	//show weather condition and temp if a search has been made
	if(haveWeather === true) {
		bodyBg.style.background = "whitesmoke";
		dataPara.style.display = "block";
		title.style.display = "none";


		// Setting backgrounds to pictures depending on weather
		if(desString.charAt(0) === '2') {
			bgImg('thunder-sm');

		} else if(desString.charAt(0) === '3' || description === 500) {
			bgImg('drizzle-sm');

		} else if(description >= 501 && description <= 599) {
			bgImg('rain-sm');

		} else if(desString.charAt(0) === '6') {
			bgImg('snow-sm');

		} else if(description === 701 || description === 741) {
			bgImg('mistFog-sm');

		} else if(description === 721) {
			bgImg('haze-sm');

		} else if(description === 800) {
			bgImg('clears-sm');

		} else if(description >= 801 && description <= 803) {
			bgImg('clouds-sm');

		} else if(description === 804) {
			bgImg('overcast-sm');
			
		}

	//hide weather condition and temp before search is made
	} else {
		bodyBg.style.background = "whitesmoke";
		dataPara.style.display = "none";
		title.style.display = "block";
	}
}

backgroundColor();