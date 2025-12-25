import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignIn = ({ setActiveModal }) => {
  const { fetchProfile } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Error");

      localStorage.setItem("token", data.token);
      fetchProfile();
      setActiveModal(null);

      alert("SignIN Success");
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
          <h1 className="text-2xl font-semibold text-center">Sign In</h1>
          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="border w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="border w-full"
            />
          </div>
          <div className="text-center">
            <button className="" type="submit">
              SignIn
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1">
          Dont have an Account?
          <button
            onClick={() => setActiveModal("signup")}
            className="underline"
          >
            {" "}
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
