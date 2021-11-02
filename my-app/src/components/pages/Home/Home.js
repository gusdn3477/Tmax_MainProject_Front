import React from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import OrderDetails from '../../elements/widgets/Home/OrderDetails';
import SalesReport from '../../elements/widgets/Home/SalesReport';
import DetailedReport from '../../elements/widgets/Home/DetailedReport';
import Projects from '../../elements/widgets/Home/Projects';
import Notifications from '../../elements/widgets/Home/Charts';
import Charts from '../../elements/widgets/Home/Notifications';
import Welcome from '../../elements/widgets/Home/Welcome';
import { useHistory, Redirect } from 'react-router';
import { useState } from 'react';

export default function Home() {

  const gogo = useHistory();
  const [loading, setLoading] = useState(true);

  if (localStorage.getItem('token')) { // 토큰이 있는 경우
    return (
      <div id="wrap">
        <Header />
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper">
            {/* Banner는 왼쪽에 있는 리스트 형식의 메뉴 */}
            <Banner />
            {/* 여기부터 프사 누르면 나오는 메뉴 */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="row">
                      <Welcome />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <OrderDetails />
                  <SalesReport />
                </div>
                <div className="row">
                  <DetailedReport />
                </div>
                <div className="row">
                  {/* <ToDoList/> */}
                </div>
                <div className="row">
                  <Projects />
                  <Notifications />
                  <Charts />
                  {/* <Bar/> */}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    // gogo.push('/login')
    return(
      <Redirect to="/login"/>
    )
  }
}