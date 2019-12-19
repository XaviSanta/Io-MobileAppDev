import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export const listOfGenders = [
"fag","anan","baban","nigga","want to some black dick,","seyfi"
];

export default class Settings extends Component {

  constructor(props) {
    super(props);

    this.state =
      {
        bodymassindex: 0,
        calorieAmount: 0,
        vegeterian: false,
        gender: "fag",
        height: 0,
        weight: 0,
        

      }
      // this.SettingInputs = React.createRef();

  }
  

  submitHandler2 = event => {
    event.preventDefault();
    this.SetSettings(this.SettingInputs.current.value);
  }

  onWeightChange = event => {
    this.setState({
      weight: event.target.value,
    })
  }

  onHeightChange = event => {
    this.setState({
      height: event.target.value,
    })
  }

  SetSettings(heightInput,WeightInput,genderInput,vegeterianInput)
  {
    this.setState({height:heightInput});
    this.setState({gender:genderInput});
    this.setState({vegeterian:vegeterianInput});

  }
   

  render() {

 
    return (
      <div className="Settings">
        <h1>Settings</h1>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> height</Form.Label>
            <Form.Control type="height" placeholder="Enter your height" onChange={(e) => this.onHeightChange(e)} />
            <Form.Text className="text-muted">
              
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label> Weight</Form.Label>
            <Form.Control type="weight" placeholder="Enter your weight" onChange={(e) => this.onWeightChange(e)} />
          </Form.Group>
         
        </Form><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Gender
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {listOfGenders.map(gender => {
      return <Dropdown.Item>{gender}</Dropdown.Item>
    })}
  </Dropdown.Menu>
</Dropdown>

<h1>  </h1>

<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1" />
  <label class="custom-control-label" for="customSwitch1">Vegeterian</label>
</div>

<Button variant="primary" type="submit" onClick={this.submitHandler2}>
            Submit
  </Button>
 </div>
  
     
    


    )
  }
} 
// console.log(heightInput,WeightInput,genderInput,vegeterianInput);
// console.log(height,weight,gender,vegeterian);
