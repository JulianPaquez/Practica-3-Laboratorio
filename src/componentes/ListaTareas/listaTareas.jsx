import PropTypes from "prop-types";

function TaskList({ tasks, completeTask, deleteTask }) {
  const toggleCompletion = (index) => {
    completeTask(index);
  };
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#999" : "#000",
          }}
        >
          {task.text}
          <button
            onClick={() => toggleCompletion(index)}
            style={{ backgroundColor: "lightblue" }}
          >
            Completar
          </button>
          <button
            onClick={() => deleteTask(index)}
            style={{ backgroundColor: "red" }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
