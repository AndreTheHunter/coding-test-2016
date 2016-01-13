function setColour (light, timestamp) {
	var minutes = timestamp / 60 / 1000
	var beYellow = light.colour === 'green' && (minutes % 5) >= 4.5
	var beGreen

	light = light.clone()
	if (beYellow) {
		light.colour = 'yelllow'
	}	else {
		beGreen = Math.floor(minutes / 5) % 2 === 0
		if (light.startGreen)
			light.colour = beGreen ? 'green' : 'red'
		else
			light.colour = beGreen ? 'red' : 'green'
	}
	return light
}

module.exports = setColour