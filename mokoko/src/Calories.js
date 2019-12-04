import './App.css';
import React, { Component } from 'react';

class Calories extends Component {
  
  render() {

    const localCalories = this.props.calories; 
    const submitHandler = this.props.handleSubmit;
    const caloriesInput = this.props.caloriesInput;

    return (
      <div className="App">
        <div class="d-block p-2 bg-secondary text-white">Calories: {localCalories}
        <form class="form-inline" onSubmit={submitHandler}>
          <div class="form-group ml-4 mb-2 mt-2">
            <label class="sr-only" for="caloriesInput"></label>
            <input
              type="number"
              class="form-control"
              id="caloriesInput"
              placeholder="Enter calories"
              ref={caloriesInput}
            >
            </input>
            <button type="submit" class="btn btn-dark">Submit</button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}

export default Calories;