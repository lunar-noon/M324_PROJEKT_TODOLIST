import TaskEntry from './TaskEntry';

function TaskList({ todos, handleDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TaskEntry
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;