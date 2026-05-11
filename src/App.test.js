import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project destination links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /open gum site/i })).toHaveAttribute('href', '/gum/');
  expect(screen.getByRole('link', { name: /read docs/i })).toHaveAttribute('href', '/gum/docs/');
  expect(screen.getByRole('link', { name: /open tada site/i })).toHaveAttribute('href', '/tada/');
});
