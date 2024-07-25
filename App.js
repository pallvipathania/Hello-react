import React from "react";
import ReactDOM from "react-dom/client";
/**
 *header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 * -RestaurantCard
 * Footer
 * -copyright
 * -link
 * -Address
 * -contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
app.render(<AppLayout />);
