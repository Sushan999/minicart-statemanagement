import React from "react";
import { useState } from "react";

const SignUp = ({ setActiveModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Error");

      alert("SignUp Successfull");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div
      className="fixed top-0 w-full bottom-0 right-0 z-40 flex items-center justify-center bg-black/30"
      onClick={() => setActiveModal(null)}
    >
      <div
        className="bg-white absolute max-w-sm w-full z-50 p-8 rounded-md border"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center">SignUp</h1>
          <div>
            <label htmlFor="username" className="block">
              Username:
            </label>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              className="border w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="border w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="border w-full"
            />
          </div>
          <div className="text-center">
            <button className="" type="submit">
              SignUp
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1">
          Already have an Account?
          <button
            onClick={() => setActiveModal("signin")}
            className="underline"
          >
            {"   "}
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
