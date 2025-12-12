import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskSlice, addTask } from "../store";

const Todo = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.task);
  const handleFetchTask = () => {
    // dispatch(fetchTask());
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
            <button onClick={() => dispatch(deleteTaskSlice(index))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
