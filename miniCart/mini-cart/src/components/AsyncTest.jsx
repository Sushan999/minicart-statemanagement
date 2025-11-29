import React, { useState, useEffect } from "react";

const PromiseTest = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/4"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </div>
  );
};

export default PromiseTest;
