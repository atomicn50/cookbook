import { useState, Component } from 'react';
import { View } from 'react-native';

import InputBar from './InputBar/InputBar';
import IngredientList from './IngredienList/IngredientList';
import BoughtIngredients from './BoughtIngredients/BoughtIngredients';
import ClearListButton from './ClearListButton/ClearListButton';
import styles from './styles';

export default class Shopping extends Component {
  state = {
    input: '',
    ingredients: {},
  }

  handleInputChange = (input) => {
    this.setState({
      input: input
    })
  }

  handleAutocompleteOnPress = (ingredient) => {
    this.setState((prevState) => {
      const { ingredients } = prevState;
      const updatedIngredients = {
        ...ingredients,
        [ingredient]: {
          hasIngredientBeenBought: false,
          quantity: (ingredients[ingredient]?.quantity || 0) + 1,
        }
      };
      return {
        input: ingredient,
        ingredients: updatedIngredients
      };
    }, () => {
      this.handleInputChange('');
    });
  }

  onPress = () => {
    const { input, ingredients } = this.state;

    if (input && ingredients[input]) {
      this.setState((prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          [input]: {
            hasIngredientBeenBought: false,
            quantity: prevState.ingredients[input].quantity + 1,
          },
        }
      }));
    } else {
      input && this.setState(prevState => ({
        ingredients: {
          ...prevState.ingredients,
          [input]: {
            hasIngredientBeenBought: false,
            quantity: 1,
          },
        }
      }));
    }
  }

  handleCheckIngredient = (ingredient) => {
     this.setState(prevState => {
      const { ingredients } = prevState;

    return {
      ingredients: {
        ...ingredients,
        [ingredient]: {
          ...ingredients[ingredient],
          hasIngredientBeenBought: !ingredients[ingredient]?.hasIngredientBeenBought,
        },
      }};
    });
  }

  handleRemoveIngredient = (ingredient) => {
    this.setState((prevState) => {
      const newState = {
        ingredients: { ...prevState.ingredients },
      };
      delete newState.ingredients[ingredient];
      return newState;
    });
  }

  render() {
    const ingredientsData = Object.entries(this.state.ingredients);
    const boughtIngredientsData = ingredientsData.filter(([_, { hasIngredientBeenBought }]) => hasIngredientBeenBought);
    
    return (
      <View style={styles.screen}>
        <InputBar
          onPress={this.onPress}
          handleAutocompleteOnPress={this.handleAutocompleteOnPress}
          handleInputChange={this.handleInputChange}
          input={this.state.input}
        />
        <IngredientList
          ingredients={ingredientsData}
          handleCheckIngredient={this.handleCheckIngredient}
          handleRemoveIngredient={this.handleRemoveIngredient}
        />
        <BoughtIngredients
          boughtIngredients={boughtIngredientsData}
          handleCheckIngredient={this.handleCheckIngredient}
        />      
        <ClearListButton onPress={() => this.setState({ingredients: {}})}/>
      </View>
    );
  }
}