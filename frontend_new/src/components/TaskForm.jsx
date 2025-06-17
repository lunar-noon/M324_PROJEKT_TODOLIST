
function TaskForm({ taskdescription, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="taskdescription">Neues Todo anlegen:</label>
      <input
        type="text"
        value={taskdescription}
        onChange={handleChange}
      />
      <button type="submit">Absenden</button>
    </form>
  );
}

export default TaskForm;