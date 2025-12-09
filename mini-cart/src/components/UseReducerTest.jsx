import React, { useReducer } from "react";

const UseReducerTest = () => {
  const reducer = (state, action) => {
    if (action.type === "ADD") {
      alert("Added To Cart");
      return state; // fix
    } else if (action.type === "REMOVE") {
      alert("Removed From Cart");
      return state; // fix
    } else {
      return state; // always return something
    }
  };

  const [value, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "SUCCESS" })}>Success</button>
      <button onClick={() => dispatch({ type: "UNSUCCESS" })}>UnSuccess</button>
    </div>
  );
};

export default UseReducerTest;

// import React, { useReducer } from "react";

// const UseReducerTest = () => {
//   const reducer = (state, action) => {
//     if (action.type === "INCREMENT") {
//       return state + 1;
//     } else {
//       return state - 1;
//     }
//   };
//   const [count, dispatch] = useReducer(reducer, 0);
//   // console.log(useReducer());
//   return (
//     <div className="flex justify-center gap-7 py-9">
//       <div>UseReducerTest</div>

//       <div>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       </div>
//       <div>{count}</div>
//       <div>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       </div>
//     </div>
//   );
// };

// export default UseReducerTest;
