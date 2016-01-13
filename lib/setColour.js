//sets the colour of a light at a specific time
function setColour (light, timestamp) {
	var minutes = timestamp / 60 / 1000
	//yellow if it is green and the time is greater or equal to 4.5 minutes in the current 5 minute block
	var beYellow = light.colour === 'green' && (minutes % 5) >= 4.5
	var beGreen

	light = light.clone()
	if (beYellow) {
		light.colour = 'yellow'
	}	else {
		//green if the current 5 minute block is even
		beGreen = Math.floor(minutes / 5) % 2 === 0
		if (light.startGreen)
			light.colour = beGreen ? 'green' : 'red'
		else
			light.colour = beGreen ? 'red' : 'green'
	}
	return light
}

module.exports = setColour