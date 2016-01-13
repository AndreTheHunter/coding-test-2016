//TODO write tests
var expect = require('chai').expect
var simulation = require('../lib/simulation')

describe('simulation', function () {
	it('return "Invalid Date" if the date is invalid', function () {
		expect(simulation(new Date('2016-01-14T09:05:00+100'))).to.equal('Invalid Date')
	})

	it('return no duplicate lines', function () {
		var lines = simulation(new Date()).split('\n')
		expect(lines).to.not.be.empty
		expect(new Set(lines).size).to.equal(lines.length)
	})

})