'use strict'

const Sensor = require('../Sensor')

class lcdtemphumidsensor extends Sensor {
	
	onInit() {
		super.onInit()
		
		this.log(this.getName(), 'has been initiated')
	}
	
}

module.exports = lcdtemphumidsensor