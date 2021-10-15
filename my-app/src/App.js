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
import RegisterForUser from "./components/pages/User/Register_for_user";
import Buttons from "./components/pages/ui-features/buttons";
import Dropdown from "./components/pages/ui-features/dropdown";
import Typography from "./components/pages/ui-features/typography";
import JobsList from "./components/pages/jobs/JobsList";
import MyAccountChange from "./components/pages/myaccount/MyAccountChange";
import ChangePassword from "./components/pages/myaccount/CheckPassword";
import ProductMake from "./components/pages/Product/ProductMake";
import HRList from "./components/pages/hr/HRList";

function App() {
  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exate path="/register-for-user"><RegisterForUser/></Route>
        <Route exact path="/jobs"><Buttons/></Route>
        <Route exact path="/dropdowns"><Dropdown /></Route>
        <Route exact path="/typography"><Typography /></Route>
        <Route exact path="/basic-elements"><Register /></Route>
        <Route exact path="/chartjs"><Register /></Route>
        <Route exact path="/basic_table"><Register /></Route>
        <Route exact path="/mdi"><Register /></Route>
        <Route exact path="/error-404"><Register /></Route>
        <Route exact path="/error-500"><Register /></Route>
        <Route exact path="/hr-manage"><HRList/></Route>
        <Route exact path="/jobs-list"><JobsList/></Route>
        <Route exact path="/accountchange"><MyAccountChange/></Route>
        <Route exact path="/check-password"><ChangePassword/></Route>
        <Route exact path="/create"><ProductMake/></Route>
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
