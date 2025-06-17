import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => {
  fetch.resetMocks();
});

test('renders ToDo Liste title', async () => {

  fetch.mockResponseOnce(JSON.stringify({ items: [{ id: 1, description: 'Item 1' }, { id: 2, description: 'Item 2' }] }));
  render(<App />);
  const linkElement = screen.getByText(/ToDo Liste/i);
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toBeVisible()
});