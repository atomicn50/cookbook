import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

import InputBar from '../InputBar'

describe('Input bar', () => {
  test('should show placeholder text', () => {
    // act
    render(<InputBar onPress={jest.fn()} onChangeText={jest.fn()}/>);

    // assert
    expect(screen.getByPlaceholderText('Add item')).toBeTruthy();
  });
});