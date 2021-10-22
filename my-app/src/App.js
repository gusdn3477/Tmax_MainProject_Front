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
import Dropdown from "./components/pages/ui-features/dropdown";
import Typography from "./components/pages/ui-features/typography";
import JobsList from "./components/pages/jobs/JobsList";
import ProductMake from "./components/pages/Product/ProductMake";
import HRList from "./components/pages/hr/HRList";
import CreateJobs from "./components/pages/jobs/CreateJobs";
import IntervieweeList from "./components/pages/interviee/IntervieweeList";
import Written from "./components/pages/process/Written";
import Interview from "./components/pages/process/Interview";
import EditHR from "./components/elements/widgets/Form/EditHR";
import EditUser from "./components/elements/widgets/Form/EditUser";
import MyList from "./components/pages/ui-features/MyList";
import HRRegister from "./components/pages/hr/Register";
import UserRegister from "./components/pages/User/Register";
import HRCheckPassword from "./components/pages/hr/HRCheckPassword";
import UserCheckPassword from "./components/pages/User/UserCheckPassword";

function App() {
  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/dropdowns"><Dropdown /></Route>
        <Route exact path="/typography"><Typography /></Route>
        <Route exact path="/basic-elements"><Register /></Route>
        <Route exact path="/chartjs"><Register /></Route>
        <Route exact path="/basic_table"><Register /></Route>
        <Route exact path="/mdi"><Register /></Route>
        <Route exact path="/error-404"><Register /></Route>
        <Route exact path="/error-500"><Register /></Route>

        {/* 공통 부분 */}
        <Route exact path="/login"><Login /></Route>

        {/* 인사 담당자 계정 설정 부분 */}
        <Route exact path="/hr/register"><HRRegister /></Route>
        <Route exact path="/hr/check-password"><HRCheckPassword/></Route>
        <Route exact path="/hr/edit/profile"><EditHR/></Route>
        <Route exact path="/hr/interviewlist"><IntervieweeList/></Route>


        {/* 지원자 계정 설정 부분 */}
        <Route exact path="/user/register"><UserRegister /></Route>
        <Route exact path="/user/check-password"><UserCheckPassword/></Route>
        <Route exact path="/user/edit/profile"><EditUser/></Route>
        <Route exact path="/user/mylist"><MyList/></Route>

        {/* 인사팀 계정 생성 및 수정 부분 */}
        <Route exact path="/hr/manage"><HRList/></Route>
        <Route exact path="/hr/create"><ProductMake/></Route>

        {/* 공고 관리 부분 */}
        <Route exact path="/jobs"><Buttons/></Route>
        <Route exact path="/jobs/list"><JobsList/></Route>
        <Route exact path="/jobs/create"><CreateJobs/></Route>

        {/* 전형 관리 부분 */}
        <Route exact path="/process/written"><Written/></Route>
        <Route exact path="/process/interview"><Interview/></Route>
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
