import { describe, expect, test, beforeEach } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

import InputBar from './InputBar/InputBar';
import Shopping from './Shopping';

describe('Shopping', () => {
  beforeEach(() => {
    render(<Shopping />);
  });

  describe('on first render', () => {
    describe('Input bar', () => {
      test('should show input bar', () => {
        expect(screen.getByPlaceholderText('Add item')).toBeTruthy();
      });

      describe('add ingredient button', () => {
        test('should render', () => {
          expect(screen.getByTestId('add-ingredient-button')).toBeTruthy();
        });

        describe('when no input has been added', () => {
          test('button should not be able to be pressed', () => {
            // arrange
            const onPressMock = jest.fn();
            render(<InputBar onPress={onPressMock} />);
            const button = screen.getByTestId('add-ingredient-button')

            // act
            fireEvent.press(button);

            // assert
            expect(onPressMock).not.toHaveBeenCalled();
          });
        });
      });
    });

    test('should show clear shopping list button', () => {
      expect(screen.getByText('Clear Shopping List')).toBeTruthy();
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

  describe('Ingredient list', () => {
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
          fireEvent.press(screen.getByTestId('Bananas-checkbox-button'));
  
          // assert
          expect(screen.getByText('Bought')).toBeTruthy();
          expect(screen.getByText('Bananas')).toBeTruthy();
      });
    });

    describe('after pressing the remove ingredient button', () => {
      test('ingredient should disappear from list', () => {
        // arrange
        const textInput = screen.getByPlaceholderText('Add item');
        const addIngredientButton = screen.getByTestId('add-ingredient-button');

        // act
        fireEvent.changeText(textInput, 'Quinoa');
        fireEvent.press(addIngredientButton);

        // remove ingredient button only appears after ingredient is added
        fireEvent.press(screen.getByTestId('ingredient-delete-button'));

        // assert
        expect(screen.queryByText('Quinoa')).toBeNull();
      });
    });
  });


  describe('Bought ingredients', () => {
    describe('after pressing the checkbox next to an ingredient in the bought list', () => {
      test('ingredient should appear back in shopping list and bought should not show', () => {
          // arrange
          const textInput = screen.getByPlaceholderText('Add item');
          const addIngredientButton = screen.getByTestId('add-ingredient-button');
  
          // act
          fireEvent.changeText(textInput, 'Bananas');
          fireEvent.press(addIngredientButton);
  
          // press the first time to mark that ingredient is bought
          fireEvent.press(screen.getByTestId('Bananas-checkbox-button'));
  
          // press again to mark that ingredient is not bought
          fireEvent.press(screen.getByTestId('bought-ingredient-checkbox-button'));
  
          // assert
          expect(screen.queryByText('Bought')).toBeNull();
          expect(screen.getByText('Bananas')).toBeTruthy();
      });
    });
  });

  describe('Clear shopping list', () => {
    describe('when pressed', () => {
      test('should remove all items from ingredient list and bought list', () => {
        // arrange
        const textInput = screen.getByPlaceholderText('Add item');
        const addIngredientButton = screen.getByTestId('add-ingredient-button');
        const clearButton = screen.getByText('Clear Shopping List');

        // act
        fireEvent.changeText(textInput, 'Kale');
        fireEvent.press(addIngredientButton);

        fireEvent.changeText(textInput, 'Spinach');
        fireEvent.press(addIngredientButton);

        // press to mark that Kale is bought
        fireEvent.press(screen.getByTestId('Kale-checkbox-button'));

        // clear list
        fireEvent.press(clearButton);

        // assert
        expect(screen.queryByText('Kale')).toBeNull();
        expect(screen.queryByText('Spinach')).toBeNull();
      });
    });
  });
});