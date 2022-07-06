import { render, screen } from '@testing-library/react';
import CalculatorApp from './Calculator';

describe('Test Calculator components', () => {
  test('Check if it has button AC', () => {
    render(<CalculatorApp />);
    const linkElement = screen.getByText(/AC/i);
    expect(linkElement).toBeInTheDocument();
  });

/*  test('Check if it has button Labels', () => {
    const component = render(<CalculatorApp />);
    const childElement = component.getByLabelText('Button');
    expect(childElement).toBeInTheDocument();
  }); */
});
