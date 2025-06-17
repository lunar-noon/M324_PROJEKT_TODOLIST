import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskEntry from '../src/components/TaskEntry';

test('renders ToDo item and button, handles click', () => {
  const todo = { taskdescription: "Hello Task", id: 101 }
  const handleDelete = jest.fn();

  render(<TaskEntry todo={todo} index={1000} handleDelete={handleDelete} />);

  const taskText = screen.getByText(/Hello Task/i);
  expect(taskText).toBeInTheDocument();
  expect(taskText).toBeVisible();

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleDelete).toHaveBeenCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), 101);
});
