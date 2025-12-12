// import { createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
// import { applyMiddleware } from "redux";
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";
// const initialState = {
//   task: [],
// };

// // const taskReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case ADD_TASK:
// //       return {
// //         ...state,
// //         task: [...state.task, action.payload],
// //       };

// //     case DELETE_TASK:
// //       const updatedTask = state.task.filter((curTask, index) => {
// //         return index !== action.payload;
// //       });
// //       return {
// //         ...state,
// //         task: updatedTask,
// //       };

// //     case FETCH_TASK:
// //       return {
// //         ...state,
// //         task: [...state.task, ...action.payload],
// //       };

// //     default:
// //       return state;
// //   }
// // };

// const taskReducer = createSlice({
//   name: "task",
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       state.task.push(action.payload);
//       // state.task = [...state.task, action.payload],
//     },
//     deleteTask(state, action) {
//       state.task = state.task.filter(
//         (currTask, index) => index !== action.payload
//       );
//     },
//   },
// });
// // console.log(taskReducer);
// // export const { addTask, deleteTask } = taskReducer.actions;

// //old redux style
// // export const store = createStore(
// //   taskReducer,
// //   composeWithDevTools(applyMiddleware(thunk))
// // );
// // console.log(store);

// //new redux toolkit style
// export const store = configureStore({
//   reducer: {
//     task: taskReducer,
//   },
// });

// export const addTask = (data) => {
//   return { type: ADD_TASK, payload: data };
// };
// export const removeTask = (data) => {
//   return { type: DELETE_TASK, payload: data }; //return plain obvect
// };

// export const fetchTask = () => {
//   //return function thunk
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       const task = await res.json();
//       dispatch({ type: FETCH_TASK, payload: task.map((t) => t.title) });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// // console.log("initialState:", store.getState());

// // store.dispatch({ type: ADD_TASK, payload: "Buy Me Now" });
// // console.log("Updated state :", store.getState());
// // store.dispatch({ type: ADD_TASK, payload: "Buy Me Now 2" });
// // console.log("Updated state :", store.getState());
// // store.dispatch({ type: DELETE_TASK, payload: 1 });
// // console.log("DELETED state :", store.getState());

// // //action creator

// // store.dispatch(addTask("Sus is carzy"));
// // console.log("Updated state :", store.getState());

// console.log(store.dispatch(addTask("Buy Mango")));
// console.log(store.dispatch(addTask("Buy Mangos")));

import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice constants
const initialState = {
  task: [],
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (_task, index) => index !== action.payload
      );
    },
  },
});

// ✅ export slice actions
export const { addTask: addTaskSlice, deleteTask: deleteTaskSlice } =
  taskReducer.actions;

export const { addTask, deleteTask } = taskReducer.actions;

// store
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer, // ✅ use .reducer
  },
});

// ✅ Dispatch RTK slice actions
console.log(store.dispatch(addTaskSlice("Buy Mango")));
console.log(store.dispatch(addTaskSlice("Buy Mangos")));

// ✅ Check updated state
console.log(store.getState());
