var TrafficLight = require('./TrafficLight')

var n = new TrafficLight('N', 'red')
var s = new TrafficLight('S', 'red')
var e = new TrafficLight('E', 'green')
var w = new TrafficLight('W', 'green')

var result = (function(){
	var prevResult

	return function result(time, lights) {
		var newResult = lights
			.map(function(light) {
				return light.name + ':' + light.colour
			})
			.join(' ')
		if (newResult !== prevResult) {
			prevResult = newResult
			return time.toLocaleTimeString() + ' - ' + newResult
		}
	}
})()

function simulation(time) {
	var end
	var line
	var lines = []

	if (isNaN(time.valueOf())) {
		return 'Invalid Date'
	}

	end = new Date(time)
	end.setMinutes(end.getMinutes() + 30)

	for (;time <= end; time.setSeconds(time.getSeconds() + 1)) {
		line = result(time, [
			n.changeColour(time),
			s.changeColour(time),
			e.changeColour(time),
			w.changeColour(time)
		])
		if (line != null)
			lines.push(line)
	}

	return lines.join('\n')
}

module.exports = simulation