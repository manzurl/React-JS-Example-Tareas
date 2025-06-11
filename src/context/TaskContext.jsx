//Este componenet engloba todo lo otro y nos sirve para pasar parametros entre todos los elementos

import { tasks as data } from "../data/task"; //importamos el arreglo de tareas, el as se usa para reasignarle un nombre a lo que estamos importando
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext(); //funcion que nos da react para crear un contexto que englobe toda la app

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); // ESTADO

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //recibe el arreglo de tareas y le agrega la tarea nueva
  }

  function deleteTask(taskId) {
    //filter recorre el arreglo y cada elemento lo llama task, y compara su task.id con el taskId pasado de taskCard
    //si es distinto lo deja en el arreglo cuando encuentra el mismo lo retira del arreglo, lo elimina
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    // lo que hacemos es que la primera vez que se ejecute la app me carga los datos en tasks mediante el use effect
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={
          //pasamos como objeto dado que son varias cosas, pasamos arreglo y funciones para poder acceder a ellas desde otros comp hijos
          {
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask,
          }
        }
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
