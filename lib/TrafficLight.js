function TrafficLight(name, colour) {
	this.name = name
	//TODO add colour name validation
	this.colour = colour
	this.startGreen = colour === 'green'
}

//time (minutes) between light changes
TrafficLight.INTERVAL = 5

//sets the colour of a light at a specific time
TrafficLight.prototype.changeColour = function changeColour(timestamp) {
	var minutes = timestamp / 60 / 1000
	//yellow if it is green or yellow and the time is greater or equal to 4.5 minutes in the current interval
	var beYellow = (this.colour === 'green' || this.colour === 'yellow') && (minutes % TrafficLight.INTERVAL) >= 4.5
	var beGreen

	if (beYellow) {
		this.colour = 'yellow'
	}	else {
		//green if the current interval is even
		beGreen = Math.floor(minutes / TrafficLight.INTERVAL) % 2 === 0
		if (this.startGreen)
			this.colour = beGreen ? 'green' : 'red'
		else
			this.colour = beGreen ? 'red' : 'green'
	}
	return this
}

module.exports = TrafficLight