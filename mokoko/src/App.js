import React, { Component } from 'react';
import './App.css';
import Calories from './Calories'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      calories: 0,
      caloriesLeft: null,
    }

    this.handleInputCaloriesSubmit = this.handleInputCaloriesSubmit.bind(this);
    this.caloriesInput = React.createRef();
  }

  handleInputCaloriesSubmit = event => {
    event.preventDefault();
    this.setCalories(this.caloriesInput.current.value);
  }

  setCalories(cal) {
    this.setState({ calories: cal })
  }

  render() {
    return(  
      <div className="App">
        <Calories 
          calories={this.state.calories} 
          handleSubmit={this.handleInputCaloriesSubmit}
          caloriesInput={this.caloriesInput}/>
      </div>
    );
  }
}

export default App;
