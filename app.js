var simulation = require('./lib/simulation')

var args = process.argv.slice(2)
var start = args.length ? new Date(args[0]) : new Date('2016-01-01T09:00:00+1000')

console.log(simulation(start))
