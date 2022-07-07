import { render, screen } from '@testing-library/react';
import CalculatorApp from '../components/Calculator';

describe('Test Calculator components', () => {
  test('Test number of buttons', async () => {
    render(<CalculatorApp />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(19);
  });
});
