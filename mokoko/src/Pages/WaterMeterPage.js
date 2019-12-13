import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class WaterMeterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      recommended: 2000
    }
  }

  addWater(amount) {
    let newWater = this.state.water + amount;
    this.setState({ water: newWater });
  }

  dropWater(amount) {
    let newWater = this.state.water - amount;
    if (newWater < 0) {
      newWater = 0;
	  }
	  this.setState({ water: newWater });
  }
  render() {
    const waterPercentage = (this.state.water / this.state.recommended) * 100;

    return (
      <div className="WaterMeterPage">


        <div className="container">
          <div className="row">
          <div className="col-4 offset-4">
            <CircularProgressbar value={waterPercentage.toFixed(0)} text={`${waterPercentage.toFixed(0)}%`} />
          </div>
          </div>
        </div>

        <button onClick={() => this.addWater(100)}>Add</button>
        <button onClick={() => this.dropWater(100)}>drop</button>
      </div>
    )
  }
}
