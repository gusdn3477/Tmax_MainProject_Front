import React from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import OrderDetails from '../../elements/widgets/Home/OrderDetails';
import SalesReport from '../../elements/widgets/Home/SalesReport';
import DetailedReport from '../../elements/widgets/Home/DetailedReport';
import TopProducts from '../../elements/widgets/Home/TopProducts.js';
import ToDoList from '../../elements/widgets/Home/ToDoList';
import Projects from '../../elements/widgets/Home/Projects';
import Notifications from '../../elements/widgets/Home/Charts';
import Charts from '../../elements/widgets/Home/Notifications';
import AdvancedTable from '../../elements/widgets/Home/AdvancedTable';

export default function Home() {
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
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">Welcome 회원이름</h3>
                      <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3 unread alerts!</span></h6>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="justify-content-end d-flex">
                        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                          <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                          </button>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                            <a className="dropdown-item" href="#">January - March</a>
                            <a className="dropdown-item" href="#">March - June</a>
                            <a className="dropdown-item" href="#">June - August</a>
                            <a className="dropdown-item" href="#">August - November</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card tale-bg">
                    <div className="card-people mt-auto">
                      <img src="images/dashboard/people.svg" alt="people" />
                      <div className="weather-info">
                        <div className="d-flex">
                          <div>
                            <h2 className="mb-0 font-weight-normal"><i className="icon-sun mr-2"></i>31<sup>C</sup></h2>
                          </div>
                          <div className="ml-2">
                            <h4 className="location font-weight-normal">Bangalore</h4>
                            <h6 className="font-weight-normal">India</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin transparent">
                  <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-tale">
                        <div className="card-body">
                          <p className="mb-4">Today’s Bookings</p>
                          <p className="fs-30 mb-2">4006</p>
                          <p>10.00% (30 days)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-dark-blue">
                        <div className="card-body">
                          <p className="mb-4">Total Bookings</p>
                          <p className="fs-30 mb-2">61344</p>
                          <p>22.00% (30 days)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                      <div className="card card-light-blue">
                        <div className="card-body">
                          <p className="mb-4">Number of Meetings</p>
                          <p className="fs-30 mb-2">34040</p>
                          <p>2.00% (30 days)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card transparent">
                      <div className="card card-light-danger">
                        <div className="card-body">
                          <p className="mb-4">Number of Clients</p>
                          <p className="fs-30 mb-2">47033</p>
                          <p>0.22% (30 days)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <OrderDetails/>
                <SalesReport/>
              </div>
              <div className="row">
                <DetailedReport/>
              </div>
              <div className="row">
                {/* <TopProducts/> */}
                <ToDoList/>
              </div>
              <div className="row">
                <Projects/>
                <Notifications/>
                <Charts/>
              </div>
              <div className="row">
                <AdvancedTable/>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
}