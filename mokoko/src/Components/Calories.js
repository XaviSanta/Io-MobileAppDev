import '../App.css';
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Calories extends Component {

  render() {

    const localCalories = this.props.calories;
    const submitHandler = this.props.handleSubmit;
    const caloriesInput = this.props.caloriesInput;

    return (
      <div className="App">
        <h3>Calories: {localCalories}</h3>

        <Form>
          <Form.Row>
            <Col md={{ span: 6, offset: 3}}>
              <Form.Control type="number" placeholder="Enter Calories" ref={caloriesInput} />
              <Button type="submit" onClick={submitHandler}>Submit</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default Calories;
