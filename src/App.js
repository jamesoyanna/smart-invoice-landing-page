import React from "react"
import Home from "./pages/Home";
import { Redirect, Route,Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
//import Scss
import "./theme.scss";
//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Redirect from="/" exact to="home" />
      </Switch>
    </>
  );
}

export default App;