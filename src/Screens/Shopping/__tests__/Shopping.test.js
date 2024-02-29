import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import InputBar from '../InputBar';

describe('Input bar', () => {
  test('should show placeholder text', () => {
    // arrange
    const onPress = jest.fn();
    const onChangeText = jest.fn();

    // act
    render(<InputBar onPress={onPress} onChangeText={onChangeText}/>);

    // assert
    expect(screen.getByPlaceholderText('Add item')).toBeTruthy;
  });
});