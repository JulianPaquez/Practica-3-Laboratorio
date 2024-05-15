import { useState } from "react";
import PropTypes from "prop-types";

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskText} onChange={handleChange} />
      <button type="submit">Agregar tarea</button>
    </form>
  );
}

AddTaskForm.propTypes = {
  addTask: PropTypes.string.isRequired,
};

export default AddTaskForm;
