// Footer.jsx
import React from "react";
import "./Footer.css";
import Copyright from "../../components/Copyright/Copyright";
import ServiceStatus from "../../components/ServiceStatus/ServiceStatus";
import Legal from "../../components/Legal/Legal";

function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_grid">
        <div className="footer_column">
          <Copyright />
          <div className="footer_wrapper">
            <ServiceStatus serviceName="API" url="https://api.bdij.com.br" />
            <ServiceStatus
              serviceName="SPARQL"
              url="https://web.bdij.com.br/query/sparql"
            />
          </div>
          <Legal />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
