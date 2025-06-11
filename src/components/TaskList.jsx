import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext); //es lo que queremos usar del contexto

  if (tasks.length == 0) {
    // si cuando arranca la app no hay tareas en el arreglo muestra esto
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tasks.map((task) => (
        //para q no de error de key
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

export function Leo() {
  return <h1>hola</h1>;
}
