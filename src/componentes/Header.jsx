"use client";

import React from "react";
import "../../public/header.css";

export default function Header({ 
  logo = "/Img-Header/logo.png", 
  institutionName = "MPF",
  institutionFullName = "MINISTERIO PÚBLICO FISCAL",
  backgroundColor = "#1a365d",
  textColor = "white",
  showNav = false,
  navItems = []
}) {
  return (
    <header 
      className="header-container"
      style={{
        backgroundColor: backgroundColor,
        color: textColor
      }}
    >
      <div className="header-content">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <div className="institution-info">
            <h1 className="institution-abbr">{institutionName}</h1>
            <p className="institution-fullname">{institutionFullName}</p>
          </div>
        </div>

        {showNav && navItems.length > 0 && (
          <nav className="navigation">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                className="nav-link"
                style={{ color: textColor }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}