import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lorem ipsum dolor sit amet, consectetur/i);
  expect(linkElement).toBeInTheDocument();
});
