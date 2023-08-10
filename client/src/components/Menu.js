import React from "react";
import Header from "./header";

export default function Menu() {
  return (
    <div>
      <Header />
      <div className="menu-content">
        <h1>Welcome to Our Menu</h1>
        <p>Explore our delicious selection of dishes.</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}