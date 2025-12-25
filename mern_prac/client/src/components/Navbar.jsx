import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="container mx-auto px-4 flex justify-between  py-2 shadow-md ">
      <div className="text-xl font-medium">FULLPRACTICE</div>
      <div>
        {user ? (
          <button onClick={logout}>
            <span>Welcome!,{user.username}</span>
          </button>
        ) : (
          <button
            onClick={() => setActiveModal("signin")}
            className="border rounded-md px-3 py-1"
          >
            Sign In
          </button>
        )}
      </div>

      {activeModal === "signin" && <SignIn setActiveModal={setActiveModal} />}
      {activeModal === "signup" && <SignUp setActiveModal={setActiveModal} />}
    </div>
  );
};

export default Navbar;
