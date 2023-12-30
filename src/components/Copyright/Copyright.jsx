// Copyright.jsx
import React from "react";
import "./Copyright.css";
import Logo from "../Logo/Logo";

export default function Copyright() {
  return (
    <div className="copyright_container">
      <Logo alt="BDIJ" className="copyright_text" height="16" width="48" />
      <p>© 2023</p>
    </div>
  );
}
