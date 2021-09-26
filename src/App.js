import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import RouterURL from "./RouterURL/RouterURL";
// import ProductListt from "./Menu/ProductListt/ProductListt";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <RouterURL />

          <div className="row"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
