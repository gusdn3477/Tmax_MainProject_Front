import React, {useState} from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ToDoList from '../../elements/widgets/Home/ToDoList';
import OrderDetails from '../../elements/widgets/Home/OrderDetails';
import Projects from '../../elements/widgets/Home/Projects';
import Charts from '../../elements/widgets/Home/Notifications';
import Notifications from '../../elements/widgets/Home/Charts';
import AdvancedTable from '../../elements/widgets/Home/AdvancedTable';
import IntervieweeForm from '../../elements/widgets/Form/IntervieweeListForm';
// import HRListForm from './IntervieweeListForm';

export default function IntervieweeList() {

  const [data, setData] = useState({
    title: "인사팀 리스트",
    name: "이름",
    companyName: "회사코드",
    period: "공고 기간",
    status: "상태(활성화, 비활성화)"
  });

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
                <OrderDetails/>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="card-title">Sales Report</p>
                        <a href="#" className="text-info">View all</a>
                      </div>
                      <p className="font-weight-500">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                      <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                      <canvas id="sales-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <IntervieweeForm data={data}/>
                <ToDoList/>
              </div>
              <div className="row">
                <Projects/>
                <Charts/>
                <Notifications/>
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