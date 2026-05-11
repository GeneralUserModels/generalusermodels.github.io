import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project destination links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /research on general user models/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /papers/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /applications/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /learning next action predictors/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /creating general user models/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /tada 🎉/i })).toBeInTheDocument();
  expect(screen.getByText(/^from human-computer interaction$/i)).toBeInTheDocument();
  expect(screen.getByText(/^from computer use$/i)).toBeInTheDocument();
  expect(screen.getByText(/arxiv 2026/i)).toBeInTheDocument();
  expect(screen.getByText(/uist 2025/i)).toBeInTheDocument();
  expect(screen.getByText(/best paper honorable mention/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /^project$/i })[0]).toHaveAttribute('href', '/nap/');
  expect(screen.getAllByRole('link', { name: /^project$/i })[1]).toHaveAttribute('href', '/gum/');
  expect(screen.getAllByRole('link', { name: /^project$/i })[2]).toHaveAttribute('href', '/tada/');
  expect(screen.getByRole('link', { name: /^demo$/i })).toHaveAttribute('href', '/gum/docs/');
  expect(screen.getAllByRole('link', { name: /^pdf$/i })[0]).toHaveAttribute(
    'href',
    'https://arxiv.org/abs/2603.05923'
  );
  expect(screen.getAllByRole('link', { name: /^pdf$/i })[1]).toHaveAttribute(
    'href',
    'https://arxiv.org/abs/2505.10831'
  );
  expect(screen.getByRole('link', { name: /^code$/i })).toHaveAttribute(
    'href',
    'https://github.com/GeneralUserModels/gum'
  );
  expect(screen.getByRole('link', { name: /^repository$/i })).toHaveAttribute(
    'href',
    'https://github.com/GeneralUserModels/tada'
  );
});
