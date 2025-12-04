import React, { useEffect, useRef, useState } from "react";

const UseRefTest = () => {
  const [count, setCount] = useState(0);

  const a = useRef(1);
  const b = useRef();

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Re-render ${a.current}`);
  }, [count]);

  useEffect(() => {
    b.current.style.backgroundColor = "blue";
  }, []);

  return (
    <div className="py-10 text-center">
      <div>UseRefTest</div>
      <div className="flex gap-8 items-center justify-center">
        <button ref={b} onClick={() => setCount(count + 1)}>
          ADD
        </button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>SUB</button>
      </div>
    </div>
  );
};

export default UseRefTest;
