import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState(""); //capturamos place holder
  const [description, setDescription] = useState(""); //capturamos place holder
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //esta linea hace q el formulario no se reinicie (como es por defecto ) cuando apretamos el boton
    //creamos un nuevo objeto par despues guardar en tareas
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
