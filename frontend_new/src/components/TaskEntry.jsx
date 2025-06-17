
function TaskEntry({ todo, index, handleDelete }) {
  return (
    <li key={todo.id}>
      <span>{"Task " + (index + 1) + ": " + todo.taskdescription}</span>
      <button onClick={(event) => handleDelete(event, todo.id)}>&#10004;</button>
    </li>
  );
}

export default TaskEntry;