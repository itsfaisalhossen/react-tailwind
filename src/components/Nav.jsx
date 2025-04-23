import React from "react";

const Nav = () => {
  return (
    <div className="flex h-12 bg-amber-200 items-center px-8 justify-around">
      <div>
        <h3>Logo</h3>
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="flex gap-8">
        <button>SignIn</button>
        <button>AsignUp</button>
      </div>
    </div>
  );
};

export default Nav;
