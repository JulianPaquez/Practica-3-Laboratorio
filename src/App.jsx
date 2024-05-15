import { useState } from "react";
import TaskList from "./componentes/ListaTareas/listaTareas";
import AddTaskForm from "./componentes/AgregarTarea/agregarTarea";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />{" "}
    </div>
  );
}

export default App;
