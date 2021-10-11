// 스타일 관련 추가 (2021/10/11)
import "./assets/css/mystyle.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/css/registerChoice.css";
import "./assets/icons8/css/line-awesome.min.css";
import "./assets/css/style.css";
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
import Buttons from "./components/pages/ui-features/buttons";

function App() {
  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/buttons"><Buttons/></Route>
        <Route exact path="/dropdowns"><Register /></Route>
        <Route exact path="/typography"><Register /></Route>
        <Route exact path="/basic_elements"><Register /></Route>
        <Route exact path="/chartjs"><Register /></Route>
        <Route exact path="/basic_table"><Register /></Route>
        <Route exact path="/mdi"><Register /></Route>
        <Route exact path="/error_404"><Register /></Route>
        <Route exact path="/error_500"><Register /></Route>
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
