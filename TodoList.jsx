import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import FormInput from "./FormInput";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 101,
      task: "Wash the clothes",
      isDone: false,
    },
    {
      id: 102,
      task: "Javascript Revision",
      isDone: false,
    },
    {
      id: 103,
      task: "Attend the Mock",
      isDone: false,
    },
  ]);

  function handleTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, isDone: !item.isDone }
        : item
    );

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(
      (item) => item.id !== id
    );

    setTasks(updatedTasks);
  }

  return (
    <>
      <Navbar2 total={tasks.length} />

      <FormInput addTask={handleTask} />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-5">
            <ul className="list-group">

              {tasks.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={item.isDone}
                      onChange={() => toggleTask(item.id)}
                    />

                    <span
                      style={{
                        textDecoration: item.isDone
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.task}
                    </span>
                  </div>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;