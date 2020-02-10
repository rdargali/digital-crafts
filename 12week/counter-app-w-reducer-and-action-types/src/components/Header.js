import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/todo">To Do List</Link>
    </div>
  );
}
