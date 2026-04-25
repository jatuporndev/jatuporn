import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /ABOUT/i })).toBeInTheDocument();
});
