import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialstate = {
  task: [],
};

const taskReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

export const store = createStore(taskReducer, composeWithDevTools());
console.log(store);

export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};
export const removeTask = (data) => {
  return { type: DELETE_TASK, payload: data };
};

// console.log("initialstate:", store.getState());

// store.dispatch({ type: ADD_TASK, payload: "Buy Me Now" });
// console.log("Updated state :", store.getState());
// store.dispatch({ type: ADD_TASK, payload: "Buy Me Now 2" });
// console.log("Updated state :", store.getState());
// store.dispatch({ type: DELETE_TASK, payload: 1 });
// console.log("DELETED state :", store.getState());

// //action creator

// store.dispatch(addTask("Sus is carzy"));
// console.log("Updated state :", store.getState());
