import React, { Component } from 'react';
import Calories from '../Components/Calories'
import MealMaker from '../Components/MealMaker'
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
        let mealFood = this.state.globalFoodArray.filter(item => item.labels.includes(meal));

        let localCaloriesLeft = this.state.caloriesLeft;
        do {
            let randomItem = mealFood[Math.floor(Math.random() * mealFood.length)];

            // Add food to the meal
            if (randomItem.calories < localCaloriesLeft && !generatedMeal.includes(randomItem)) {
                generatedMeal.push(randomItem);
                localCaloriesLeft -= randomItem.calories;
            }
        } while (generatedMeal.length < 3); // TODO: error handling if not enough calories

        this.setState({ caloriesLeft: localCaloriesLeft }, function () {
            console.log(localCaloriesLeft);
            console.log(this.state.caloriesLeft);
        });

        return generatedMeal;
    }

    render() {
        return (
            <div>
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
