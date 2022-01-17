'use strict'

const Driver = require('../Driver')

class DevelcoHeatDetectorDriver extends Driver {

	onInit() {
		super.onInit()
		this.log('DevelcoHeatDetectorDriver has been initiated')
	}

	onPairListDevices(data, callback) {
		this.getSensorsByCondition(device => device.modelid === 'HESZB-120', callback)
	}

}

module.exports = DevelcoHeatDetectorDriver
