// 스타일 관련 추가 (2021/10/11)
import "./assets/css/mystyle.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/css/registerChoice.css";
import "./assets/icons8/css/line-awesome.min.css";
import "./assets/css/style.css";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ToTop from './utilities/ToTop';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import './App.css';
import Home from "./components/pages/Home/Home";
import Login from './components/pages/User/Login';
import Register from './components/pages/User/UserRegister';
import Buttons from "./components/pages/ui-features/buttons";
import Dropdown from "./components/pages/ui-features/dropdown";
import Typography from "./components/pages/ui-features/typography";
import JobsList from "./components/pages/jobs/JobsList";
import HRList from "./components/pages/hr/HRList";
import CreateJobs from "./components/pages/jobs/CreateJobs";
import IntervieweeList from "./components/pages/interviee/IntervieweeList";
import Written from "./components/pages/process/Written";
import Interview from "./components/pages/process/Interview";
import EditHR from "./components/elements/widgets/Form/EditHR";
import EditUser from "./components/elements/widgets/Form/EditUser";
import MyList from "./components/pages/ui-features/MyList";
import HRRegister from "./components/pages/hr/HRRegister";
import UserRegister from "./components/pages/User/UserRegister";
import HRCheckPassword from "./components/pages/hr/HRCheckPassword";
import UserCheckPassword from "./components/pages/User/UserCheckPassword";
import Error_404 from "./components/pages/samples/error-404";
import HRFindPassword from "./components/pages/hr/HRFindPassword";
import UserFindPassword from "./components/pages/User/UserFindPassword";
import HRCreate from "./components/pages/hr/HRCreate";

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

        {/* 인사 담당자 부분 */}

        {/* 인사담당자 회원가입 */}
        <Route exact path="/hr/register"><HRRegister /></Route> 
        <Route exact path="/hr/check-password"><HRCheckPassword/></Route>

        {/* 받을 정보 통일 */}
        <Route exact path="/hr/findpwd"><HRFindPassword/></Route> 
        <Route exact path="/hr/edit/profile"><EditHR/></Route>
        {/* <Route exact path="/hr/interviewlist"><IntervieweeList/></Route> */}
        {/* 해야됨 */}
        <Route exact path="/hr/manage"><HRList/></Route>
        {/* 인사담당자 추가 */}
        <Route exact path="/hr/create"><HRCreate/></Route>
        {/* 인사담당자 상세 조회 -> 일단 보류 */}
        {/* <Route exact path="/hr/:hrId"><ProductMake/></Route> */}
        

        {/* 지원자 계정 설정 부분 */}
        <Route exact path="/user/register"><UserRegister /></Route>
        <Route exact path="/user/check-password"><UserCheckPassword/></Route>
        <Route exact path="/user/findpwd"><UserFindPassword/></Route>
        <Route exact path="/user/edit/profile"><EditUser/></Route>
        <Route exact path="/user/mylist"><MyList/></Route>
        {/* 유저 상세 조회 -> 일단 보류 */}
        {/* <Route exact path="/user/:userId"><MyList/></Route> */}
        

        {/* 공고 관리 부분 */}
        {/* 공고 전체 보기 */}
        <Route exact path="/jobs"><Buttons/></Route>
        {/* <Route exact path="/jobs/list"><JobsList/></Route> */}
        <Route exact path="/jobs/create"><CreateJobs/></Route>
        {/* 이 두개는 필요. 공고번호별로 보기, 회사별로 보기 */}
        {/* <Route exact path="/jobs/:jobsNo"><CreateJobs/></Route> */}
        {/* <Route exact path="/jobs/:corpNo"><CreateJobs/></Route> */}

        {/* 전형 관리 부분 => 인사담당자 부분이니까*/}
        <Route exact path="/process/written"><Written/></Route>
        <Route exact path="/process/interview"><Interview/></Route>
        {/* 공고별 필기 전형자 보기 / 공고별 1,2차 면접 전형자 보기*/}
        {/* <Route exact path="/process/written/:jobsNo/:empNo"><Written/></Route>
        <Route exact path="/process/interview/:jobsNo/:empNo"><Interview/></Route> */}
        
        {/* 예외 처리 부분 */}
        <Route component={Error_404}/>
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
