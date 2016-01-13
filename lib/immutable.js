var R = require('ramda')

function immutable (props) {
	var def = Object.keys(props).reduce(function (o, name) {
		var value = props[name]
		o[name] = {
			configurable: false,
			enumerable: true,
			get: function() {
				return value
			},
			set: function (newValue) {
				var newProps = null
				if (this.value === newValue)
					return this
				newProps = R.clone(props)
				newProps[name] = newValue
				return immutable(newProps)
			}
		}
		return o
	}, {})
	console.dir(def, {colors: true})
	return Object.defineProperties({}, def)
}
module.exports = immutable