import { Component } from 'react';
import { View } from 'react-native';

import memoizeOne from 'memoize-one';

import INGREDIENTS from '../../constants/ingredients'
import InputBar from './InputBar/InputBar';
import Autocomplete from './Autocomplete/Autocomplete';
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
    const { input, ingredients } = this.state;

    const ingredientsArray = Object.entries(ingredients);
    const ingredientsData = ingredientsArray.filter(([_, { hasIngredientBeenBought }]) => !hasIngredientBeenBought);
    const boughtIngredientsData = ingredientsArray.filter(([_, { hasIngredientBeenBought }]) => hasIngredientBeenBought);

    const getAutocompleteData = (ingredientList, input) => (
      ingredientList
        .filter(i => input?.length > 1 && i.startsWith(input))
        .slice(0, 3)
    );

    const memoizedGetData = memoizeOne(getAutocompleteData);
    
    return (
      <View style={styles.screen}>
        <InputBar
          onPress={this.onPress}
          handleInputChange={this.handleInputChange}
          input={this.state.input}
        />
        <Autocomplete
          data={memoizedGetData(INGREDIENTS, input)}
          onPress={this.handleAutocompleteOnPress}
          input={input}
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