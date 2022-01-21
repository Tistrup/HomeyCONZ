'use strict'

const Driver = require('../Driver')

class lcdtemphumidsensor extends Driver {
	
	onInit() {
		super.onInit()
		this.log('lcdtemphumidsensor has been initiated')
	}
	
	onPairListDevices(data, callback) {
                this.getSensorsByCondition(device => device.modelid === 'TS0201', callback)
	}
	
}

module.exports = lcdtemphumidsensor
