import React, { Component } from 'react';
import WaterMeter from '../watermeter';

export default class WaterMeterPage extends Component {
    render() {
        return (
            <div>
                <h1>Water Meter</h1>
                <WaterMeter />
            </div>
        )
    }
}
