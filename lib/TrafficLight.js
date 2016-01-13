function TrafficLight(name, colour) {
	this.name = name
	//TODO add colour name validation
	this.colour = colour
	this.startGreen = colour === 'green'
}
TrafficLight.prototype.clone = function clone() {
	return new TrafficLight(this.name, this.colour)
}
module.exports = TrafficLight