import { describe, expect, test, beforeEach } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

import Shopping from './Shopping';

describe('Shopping', () => {
  beforeEach(() => {
    render(<Shopping />);
  });

  describe('on first render', () => {
    test('should show input bar', () => {
      expect(screen.getByPlaceholderText('Add item')).toBeTruthy();
    });
  
    test('should show the add ingredient button', () => {
      expect(screen.getByTestId('add-ingredient-button')).toBeTruthy();
    });
  });

  describe('after pressing add ingredient button', () => {
    test('should see ingredient appear in list', () => {
      // arrange
      const textInput = screen.getByPlaceholderText('Add item');
      const addIngredientButton = screen.getByTestId('add-ingredient-button');

      // act
      fireEvent.changeText(textInput, 'Beans');
      fireEvent.press(addIngredientButton);

      // assert
      expect(screen.getByText('Beans')).toBeTruthy();
    });
  });

  describe('after pressing add ingredient button twice with same ingredient', () => {
    test('should see ingredient and quantity appear in list', () => {
      // arrange
      const textInput = screen.getByPlaceholderText('Add item');
      const addIngredientButton = screen.getByTestId('add-ingredient-button');

      // act
      fireEvent.changeText(textInput, 'Fish');
      fireEvent.press(addIngredientButton);
      fireEvent.press(addIngredientButton);

      // assert
      expect(screen.getByText('(2)')).toBeTruthy();
      expect(screen.getByText('Fish')).toBeTruthy();
    });
  });

  describe('after pressing the checkbox next to an ingredient', () => {
    test('ingredient should appear in bought list', () => {
        // arrange
        const textInput = screen.getByPlaceholderText('Add item');
        const addIngredientButton = screen.getByTestId('add-ingredient-button');

        // act
        fireEvent.changeText(textInput, 'Bananas');
        fireEvent.press(addIngredientButton);

        // checkbox button only appears after ingredient is added
        fireEvent.press(screen.getByTestId('ingredient-checkbox-button'));

        // assert
        expect(screen.getByText('Bought')).toBeTruthy();
        expect(screen.getByText('Bananas')).toBeTruthy();
    });
  });
});

