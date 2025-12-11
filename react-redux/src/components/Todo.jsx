import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, fetchTask, removeTask } from "../store";

const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleFetchTask = () => {
    dispatch(fetchTask());
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            if (task.trim() !== "") {
              dispatch(addTask(task));
              setTask("");
            }
          }}
        >
          ADD
        </button>
        <button onClick={handleFetchTask}>Fetch Tasks</button>
      </div>

      <div>
        {tasks.map((t, index) => (
          <div key={index}>
            {index}: {t}{" "}
            <button onClick={() => dispatch(removeTask(index))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
