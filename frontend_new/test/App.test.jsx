import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  await act(async () => { render(<App />); })

  const linkElement = await screen.findByText(/Item 1/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeVisible();
});

test('send todo form', async () => {
  const testString = "Good Morning";

  fetch.mockResponseOnce(JSON.stringify([]));

  render(<App />);

  fetch.mockResponseOnce(JSON.stringify({ id: 123, taskdescription: testString }));

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: testString } });
  expect(input.value).toBe(testString);

  const submitButton = screen.getByRole('button', { name: /absenden/i });
  fireEvent.click(submitButton);

  const newTask = await screen.findByText(`Task 1: ${testString}`);
  expect(newTask).toBeInTheDocument();
  expect(newTask).toBeVisible();

  expect(input.value).toBe("");
});