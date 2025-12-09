import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b border-gray-500 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 ">
        <div className="text-2xl font-semibold">
          <Link to="/">CartContext</Link>
        </div>
        <div>
          <Link
            to="/cart"
            className="px-4 py-1 border rounded-md cursor-pointer"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
