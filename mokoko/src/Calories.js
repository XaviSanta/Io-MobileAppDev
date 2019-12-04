import './App.css';
import React, { Component } from 'react';

class Calories extends Component {
  
  render() {

    const localCalories = this.props.calories; 
    const submitHandler = this.props.handleSubmit;
    const caloriesInput = this.props.caloriesInput;

    return (
      <div className="App">
        
        Calories: {localCalories}
        <form class="form-inline" onSubmit={submitHandler}>
          <div class="form-group mb-2">
            <label class="sr-only" for="caloriesInput"></label>
            <input
              type="number"
              class="form-control"
              id="caloriesInput"
              placeholder="Enter calories"
              ref={caloriesInput}
            >
            </input>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Calories;