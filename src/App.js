import React from "react"
import AppContainer from "./components/AppContainer";
import { Redirect, Route,Switch } from "react-router-dom";
import  Login  from "./pages/Login";
import GettingStarted from "./pages/GettingStarted";
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
        <Route exact path="/login" component={Login} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/home" component={AppContainer} />
        <Redirect from="/" exact to="home" />
      </Switch>
    </>
  );
}

export default App;