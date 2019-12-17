import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class MealMaker extends Component {

  render() {
    const generateDayMeal = this.props.generateDayMeal;
    const generateMeal = this.props.generateMeal;
    const breakfast = this.props.breakfast;
    const lunch = this.props.lunch;
    const dinner = this.props.dinner;

    return(
      <div className="MealMaker"  style={{backgroundColor: "#AAA523"}}>
        <Button
          className="my-2 btn-sm" 
          onClick={generateDayMeal}>
            Generate Meal
        </Button>
        <div style={{backgroundColor: "#BBBAAA"}}>
          Breakfast&nbsp;&nbsp;
          <button
            className="my-2 btn-sm" 
            onClick={() => generateMeal('breakfast', 20)}>
              <i className="fa fa-refresh"></i>
          </button>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
            {breakfast.map((item, index) =>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
              </tr>
            )}
            </tbody>
          </Table>
        </div>
        <div style={{backgroundColor: "#CCCBBB"}}>
          Lunch&nbsp;&nbsp;
          <button
            className="my-2 btn-sm" 
            onClick={() => generateMeal('lunch', 35)}>
              <i className="fa fa-refresh"></i>
          </button>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
            {lunch.map((item, index) =>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
              </tr>
            )}
            </tbody>
          </Table>
        </div>
        <div style={{backgroundColor: "#DDDCCC"}}>
          Dinner&nbsp;&nbsp;
          <button
            className="my-2 btn-sm" 
            onClick={() => generateMeal('dinner', 45)}>
              <i className="fa fa-refresh"></i>
          </button>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
            {dinner.map((item, index) =>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
              </tr>
            )}
            </tbody>
          </Table>
        </div>
      </div>
    )
        
  }
}

export default MealMaker;