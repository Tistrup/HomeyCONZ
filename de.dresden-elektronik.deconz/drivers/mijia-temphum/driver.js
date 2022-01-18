'use strict'

const Driver = require('../Driver')

class MijiaTempHumDriver extends Driver {
	
	onInit() {
		super.onInit()
		this.log('MijiaTempHumDriver has been initiated')
	}
	
	onPairListDevices(data, callback) {
                this.getSensorsByCondition(device => device.modelid === 'lumi.sensor_ht' || device.modelid === 'TS0201', callback)
	}
	
}

module.exports = MijiaTempHumDriver
