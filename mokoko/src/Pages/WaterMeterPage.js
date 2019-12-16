import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const COLOR_WATER = '#3e98c7';

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

        <SimpleStorage
          parent={this}
          prefix={ 'WaterMeterPage' }
          // blacklist={ ['password'] }
        />

        <h1>Water Meter</h1>
        <p>Track your daily water intake.</p>

        <div className="container">
          <Row>
            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <CircularProgressbarWithChildren value={waterPercentage.toFixed(0)}>
                <h2 class="font-weight-bold" style={{ color: COLOR_WATER, fontSize: '10vw' }}>
                  {waterPercentage.toFixed(0)}%
                </h2>
                <div style={{ color: COLOR_WATER }}>
                  {this.state.water}ml / {this.state.recommended}ml
                </div>
              </CircularProgressbarWithChildren>
            </Col>
          </Row>
        </div>

        <Button className="m-1 py-1 px-2" onClick={() => this.addWater(100)}>Add</Button>
        <Button className="m-1 py-1 px-2" onClick={() => this.dropWater(100)}>Drop</Button>
      </div>
    )
  }
}
