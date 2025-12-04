import React, { useState, useEffect } from "react";

const PromiseTest = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default PromiseTest;
