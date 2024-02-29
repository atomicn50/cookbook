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
      expect(screen.getByRole('button')).toBeTruthy();
    });
  });

  describe('after pressing add ingredient button', () => {
    test('should see ingredient appear in list', () => {
      // arrange
      const textInput = screen.getByPlaceholderText('Add item');
      const button = screen.getByRole('button');

      // act
      fireEvent.changeText(textInput, 'Beans');
      fireEvent.press(button);

      // assert
      expect(screen.getByText('Beans')).toBeTruthy();
    });
  });

  describe('after pressing add ingredient button twice with same ingredient', () => {
    test('should see ingredient and quantity appear in list', () => {
      // arrange
      const textInput = screen.getByPlaceholderText('Add item');
      const button = screen.getByRole('button');

      // act
      fireEvent.changeText(textInput, 'Fish');
      fireEvent.press(button);
      fireEvent.press(button);

      // assert
      expect(screen.getByText('(2)')).toBeTruthy();
      expect(screen.getByText('Fish')).toBeTruthy();
    });
  });
});

