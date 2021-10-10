import React from "react";
import logo from './logo.svg';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ToTop from './utilities/ToTop';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import './App.css';
import Home from "./components/pages/Home/Home";
import Login from './components/pages/User/Login';
import Register from './components/pages/User/Register';

function App() {
  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
