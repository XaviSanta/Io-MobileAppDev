import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SimpleStorage from "react-simple-storage";


export const listOfGenders = [
    "male", "female",
];

const underweight = 'underweight';
const normalWeight = 'normal';
const overweight = 'overweight';
const obese = 'obese';

export default class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bodymassindex: 0,
            calorieAmount: 0,
            vegeterian: false,
            gender: "male",
            height: 0,
            weight: 0,
        }
    }

    onWeightChange = event => {
        this.setState({
            weight: event.target.value,
        })
    };

    onHeightChange = event => {
        this.setState({
            height: event.target.value,
        })
    };

    onGenderChange = event => {
        this.setState({gender:event.target.value});
    };

    onVegeterianChange = event => {
        this.setState({vegetarian: event.target.checked});
    };

    calculateBMI = (height, weight) => {
        const heightInMetres = height / 100;
        return weight / Math.pow(heightInMetres, 2);
    };

    calorieOffer = (BMI) => {
        if (BMI <= 18.5) {
            return 3000;
        } else if (BMI>=18.5 && BMI<24.9) {
            return 2000;
        } else if (BMI>=25 && BMI<29.9) {
            return 1700;
        } else if (BMI>=30) {
            return 1500;
        }
    };

    BMIresult = (BMI) => {
        if (BMI <= 18.5) {
            return underweight;
        } else if  (BMI >= 18.5 && BMI < 24.9) {
            return normalWeight;
        } else if  (BMI >= 25 && BMI < 29.9) {
            return overweight;
        } else if  (BMI >= 30) {
            return obese;
        }
    };

    render() {
        const bmi = this.calculateBMI(this.state.height, this.state.weight);
        const recommendedCalories = this.calorieOffer(bmi);

        const bmiRecommendation = () => {
            if (bmi !== null && !isNaN(bmi) && isFinite(bmi)) {
                return (
                    <div className="my-3">
                        <h2>Your body mass index is {bmi.toFixed(1)} </h2>
                        <h2>It is recommended that you eat {recommendedCalories} calories per day</h2>
                    </div>
                );
            }
        };

        console.log(this.state)

        return (
            <div className="Settings mt-3">
                <SimpleStorage
                    parent={this}
                    prefix={ 'Settings' }
                />

                <Row>
                    <Col sm={{ span: 12 }} lg={{ span: 8, offset: 2}}>
                        <Card>
                            <Card.Body>
                                <h1>Settings</h1>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Append>
                                            <InputGroup.Text>kg</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl type="number" value={this.state.weight || ''} placeholder="Enter your weight" onChange={(e) => this.onWeightChange(e)} />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Append>
                                            <InputGroup.Text>cm</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl type="number" value={this.state.height || ''} placeholder="Enter your height" onChange={(e) => this.onHeightChange(e)} />
                                    </InputGroup>
                                </Form>

                                {bmiRecommendation()}

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Gender
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {listOfGenders.map(gender => {
                                            return <Dropdown.Item key={gender}>{gender}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <h2>Preferences</h2>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked={this.state.vegetarian} onChange={(e) =>  this.onVegeterianChange(e)} />
                                    <label className="custom-control-label" htmlFor="customSwitch1">Vegetarian</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
