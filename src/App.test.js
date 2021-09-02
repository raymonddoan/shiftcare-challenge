import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the application', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shiftcare/i);
  expect(linkElement).toBeInTheDocument();
});
