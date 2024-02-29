import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {
  test('should render the button', async () => {
    // act
    render(<DeleteButton onPress={() => {}}/>);

    // assert
    expect(screen.getByRole('button')).toBeTruthy();
  });
});