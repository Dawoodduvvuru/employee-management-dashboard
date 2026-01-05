import React from "react";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h3>Employee Dashboard</h3>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
}
