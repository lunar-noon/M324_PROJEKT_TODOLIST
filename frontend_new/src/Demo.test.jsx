import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './Demo';
test('renders Demo title', () => {
  render(<Demo />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toBeVisible()
  expect(linkElement).toHaveClass("headline")
});