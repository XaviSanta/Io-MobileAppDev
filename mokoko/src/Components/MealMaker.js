import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

class MealMaker extends Component {

  render() {
    const generateDayMeal = this.props.generateDayMeal;
    const breakfast = this.props.breakfast;
    const lunch = this.props.lunch;
    const dinner = this.props.dinner;

    return(
      <div className="MealMaker"  style={{backgroundColor: "#AAA523"}}>
        <Button 
          onClick={generateDayMeal}>
            Generate Meal
        </Button>

        <div style={{backgroundColor: "#BBBAAA"}}>
          Breakfast
          <div>
            {breakfast.map((item, index) =>
              <div key={index}>
                <p>{item.name}, {item.calories} cal</p>
              </div>
            )}
          </div>
        </div>
        <div style={{backgroundColor: "#CCCBBB"}}>
          Lunch
          <div>
            {lunch.map((item, index) =>
              <div key={index}>
                <p>{item.name}, {item.calories} cal</p>
              </div>
            )}
          </div>
        </div>
        <div style={{backgroundColor: "#DDDCCC"}}>
          Dinner
          <div>
            {dinner.map((item, index) =>
              <div key={index}>
                <p>{item.name}, {item.calories} cal</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
        
  }
}

export default MealMaker;