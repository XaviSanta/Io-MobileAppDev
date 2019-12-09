import '../App.css';
import React, { Component } from 'react';

class Calories extends Component {
  
  render() {

    const localCalories = this.props.calories; 
    const submitHandler = this.props.handleSubmit;
    const caloriesInput = this.props.caloriesInput;

    return (
      <div className="App">
        <div className="d-block p-2 bg-secondary text-white">Calories: {localCalories}
        <form className="form-inline" onSubmit={submitHandler}>
          <div className="form-group ml-4 mb-2 mt-2">
            <input
              type="number"
              className="form-control mb-2"
              id="caloriesInput"
              placeholder="Enter calories"
              ref={caloriesInput}
            >
            </input>
            <button type="submit" className="btn btn-dark">Submit</button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}

export default Calories;