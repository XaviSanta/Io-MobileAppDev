import React, { Component } from 'react';
import Calories from '../Components/Calories'
import MealMaker from '../Components/MealMaker'
import SimpleStorage/*, { clearStorage, resetParentState }*/ from "react-simple-storage";
import { foodDB } from '../foodDB';

const foodArray = foodDB;

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalFoodArray: foodArray,
      calories: null,
      caloriesLeft: null,
      breakfast: [],
      lunch: [],
      dinner: [],
    }

    this.handleInputCaloriesSubmit = this.handleInputCaloriesSubmit.bind(this);
    this.generateDayMeal = this.generateDayMeal.bind(this);
    this.generateMeal = this.generateMeal.bind(this);
    this.caloriesInput = React.createRef(); //For binding with the textInput
  }

  handleInputCaloriesSubmit = event => {
    event.preventDefault();
    this.setCalories(this.caloriesInput.current.value);
  }

  setCalories(cal) {
    this.setState({ calories: cal });
    this.setState({ caloriesLeft: cal });
  }

  generateDayMeal() {
    if (!this.state.calories) { // If there is no calories we cannot generate the meal
      alert('Enter calories');
    }
    else { //TODO: refactor this shit 
      this.setState({ caloriesLeft: this.state.calories }, function () {
        this.setState({ breakfast: this.generateMeal('breakfast') }, function () {
          this.setState({ lunch: this.generateMeal('lunch') }, function () {
            this.setState({ dinner: this.generateMeal('dinner') });
          });
        });
      });
    }
  }

  // argument: 'breakfast','lunch','dinner'
  generateMeal(meal) {
    let generatedMeal = [];
    let labelsGeneratedMeal = [];
    let mealFood = this.state.globalFoodArray.filter(item => item.labels.includes(meal));

    let localCaloriesLeft = this.state.caloriesLeft;
    do {
      let randomItem = mealFood[Math.floor(Math.random() * mealFood.length)];

      // Add food to the meal
      if (this.isSituableForMeal(randomItem, labelsGeneratedMeal, localCaloriesLeft, generatedMeal)) {
        generatedMeal.push(randomItem);
        localCaloriesLeft -= randomItem.calories;
        labelsGeneratedMeal = labelsGeneratedMeal.concat(randomItem.labels)
            .filter(f => !["breakfast", "lunch", "dinner"].includes(f));
        console.log(labelsGeneratedMeal);
      }
      
      mealFood.pop(randomItem);
      mealFood = mealFood.filter(f => f.calories < localCaloriesLeft);
      
    } while (generatedMeal.length < 3 && mealFood.length > 0);

    this.setState({ caloriesLeft: localCaloriesLeft }, function () {
      console.log(localCaloriesLeft);
      console.log(this.state.caloriesLeft);
    });

    return generatedMeal;
  }

  isSituableForMeal(randomItem, labelsGeneratedMeal, localCaloriesLeft, generatedMeal) {
    let isSituable = true;
    randomItem.labels.forEach(l => {
      if(labelsGeneratedMeal.includes(l)){
        isSituable = false;
      }
    });
    
    let isInOtherMeals = 
      this.state.breakfast.includes(randomItem) || 
      this.state.lunch.includes(randomItem) || 
      this.state.lunch.includes(randomItem) 
      ? false : false;

    return randomItem.calories < localCaloriesLeft && 
      !generatedMeal.includes(randomItem) && 
      isSituable &&
      !isInOtherMeals;
  }
  
  render() {
    return (
      <div>
        <SimpleStorage
        parent={this}
        prefix={ 'MainPage' }
        />

        <h1>Meal Maker</h1>
        <Calories
          calories={this.state.calories}
          handleSubmit={this.handleInputCaloriesSubmit}
          caloriesInput={this.caloriesInput}
        />

        <MealMaker
          generateDayMeal={this.generateDayMeal}
          breakfast={this.state.breakfast}
          lunch={this.state.lunch}
          dinner={this.state.dinner}
        />
      </div>
    )
  }
}
