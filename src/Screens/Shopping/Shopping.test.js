import { describe, expect, test, beforeEach } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

import Shopping from './Shopping';

describe('Shopping', () => {
  beforeEach(() => {
    render(<Shopping />);
  });

  test('should show input bar', () => {
    expect(screen.getByPlaceholderText('Add item')).toBeTruthy();
  });

  test('should show the add ingredient button', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  });
});

