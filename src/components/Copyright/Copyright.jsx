// Copyright.jsx
import React from "react";
import "./Copyright.css";
import Logo from "../Logo/Logo";

export default function Copyright() {
  return (
    <div className="copyright_container">
      <Logo alt="BDIJ" className="copyright_text" height="16" width="48" />
      <p>
        <a
          href="https://creativecommons.org/licenses/by/4.0/deed.pt-br"
          className="text-gray-900 hover:border-b-2 active:border-b-2 focus:border-black"
        >
          CC-BY-4.0
        </a>
      </p>
    </div>
  );
}
