//TODO write tests
var expect = require('chai').expect
var simulation = require('../lib/simulation')

describe('simulation', function () {

	it('returns "Invalid Date" if the date is invalid', function () {
		expect(simulation(new Date('2016-01-14T09:05:00+100'))).to.equal('Invalid Date')
	})

	it('return no consecutive duplicate lines', function () {
		var lines = simulation(new Date('2016-01-14T09:05:00+1000'))
			.split('\n')
			.map(function (line) {
				//remove the date part of the line
				return line.split(' - ')[1]
			})

		expect(lines).to.not.be.empty
		//test for consecutive duplicate lines
		expect(lines.every((function() {
			var prev
			return function(line) {
				if (line === prev)
					return false
				prev = line
				return true
			}
		})())).to.be.true
	})

})