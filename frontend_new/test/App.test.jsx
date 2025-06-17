import { render, screen } from '@testing-library/react';
import { act } from "react";
import '@testing-library/jest-dom';
import App from '../src/App';

beforeEach(() => {
  fetch.resetMocks();
});

test('renders ToDo Liste title', async () => {
  fetch.mockResponseOnce(JSON.stringify([
    { id: 1, taskdescription: 'Item 1' },
    { id: 2, taskdescription: 'Item 2' }
  ]));

  await act(async () => { render(<App />);})

  const linkElement = await screen.findByText(/Item 1/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeVisible();
});