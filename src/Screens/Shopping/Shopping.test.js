import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

import Shopping from './Shopping';

describe('Shopping', () => {
  test('should show input bar', () => {
    // act
    render(<Shopping />);

    // assert
    expect(screen.getByPlaceholderText('Add item')).toBeTruthy();
  });
});

