var expect = require('chai').expect
var setColour = require('../lib/setColour')
var TrafficLight = require('../lib/TrafficLight')

function minutes (minutes) {
	return minutes * 60 * 1000
}

function test(time, green, red) {
	expect(setColour(green, time).colour).to.equal('green')
	expect(setColour(red, time).colour).to.equal('red')
}

describe('setColour', function () {
	var green = new TrafficLight('test', 'green')
	var red = new TrafficLight('test', 'red')

	it('should not change the colour of a light at 0 minutes', function () {
		test(0, green, red)
	})

	it('should not change the colour of a light at 4 minutes', function () {
		test(minutes(4), green, red)
	})

	it('should change the colour of a light after 5 minues', function () {
		test(minutes(5), red, green)
	})

	it('should change the colour of a light back after 10 minues', function () {
		test(minutes(10), green, red)
	})

	it('should not change the colour of a light at 4.4 minutes', function () {
		test(4.4, green, red)
	})

	it('should change the colour light to yellow 30 secods before it turns red (from green)', function () {
		var time = minutes(4.5)

		expect(setColour(green, time).colour).to.equal('yelllow')
		expect(setColour(red, time).colour).to.equal('red')
	})
})