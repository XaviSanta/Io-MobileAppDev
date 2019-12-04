import './App.css';
import React, { Component } from 'react';

class Calories extends Component {
  
  render() {

    const localCalories = this.props.calories; 
    const submitHandler = this.props.handleSubmit;
    const caloriesInput = this.props.caloriesInput;

    return (
      <div className="App">
        <form className="from-inline" onSubmit={submitHandler}>
          <div class="form-group">
            <label for="caloriesInput">Calories</label>
            <input
              type="number"
              class="form-control"
              id="caloriesInput"
              placeholder="Enter calories"
              ref={caloriesInput}
            >
            </input>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>

        Calories: {localCalories}
      </div>
    );
  }
}

export default Calories;