import "./App.css";
import { MyProvider } from "./Context";
import Cart from "./components/cart";
import Header from "./components/header";
import HomePage from "./components/homepage";
import { Link, Router, Route } from "react-router-dom";

function App() {
  return (
    <MyProvider>
      <div className="App"></div>
    </MyProvider>
  );
}

export default App;
