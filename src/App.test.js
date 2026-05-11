import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project destination links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /user models that feel more personal/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore gum/i })).toHaveAttribute('href', '/gum/');
  expect(screen.getByRole('link', { name: /^docs$/i })).toHaveAttribute('href', '/gum/docs/');
  expect(screen.getByRole('link', { name: /visit tada/i })).toHaveAttribute('href', '/tada/');
});
