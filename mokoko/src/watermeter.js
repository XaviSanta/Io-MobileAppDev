
import React, { Component } from 'react';
import '.src/css/css';

class WaterMeter extends React.Component
{

	constructor(props) {
		super(props);
		this.water = 0;
		this.recommended = 2000;
	}


	addWater(x)
	{
		var a=this.water+x;
		this.setState({water:a});

	}
	dropWater(y)
	{
		var b=this.water-y;
		this.setState({water: b});
	}




	render()
	{

  return (



    <div className="App">
      <header className="Water Meter">

      </header>

			<div class="radial-progress" data-progress={this.water / this.recommended}>
				<div class="circle">
					<div class="mask full">
						<div class="fill"></div>
					</div>
					<div class="mask half">
						<div class="fill"></div>
						<div class="fill fix"></div>
					</div>
					<div class="shadow"></div>
				</div>
				<div class="inset">
					<div class="percentage">
  						<p>{this.water / this.recommended}</p>
					</div>
				</div>
			</div>
	  <button onclick={() => this.addWater(100)}>Add</button>
	  <button onclick={() => this.dropWater(100)}>drop</button>

    </div>
  );

	}
}

export default WaterMeter;
