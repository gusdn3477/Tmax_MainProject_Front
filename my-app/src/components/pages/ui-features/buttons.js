import React, { useState } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ToDoList from '../../elements/widgets/Home/ToDoList';
import Card from '../../elements/widgets/Home/Card';

// Jobs로 보시면 됩니다.
export default function Buttons() {

  const [data, setData] = useState({
    title: "공고 리스트",
    name: "공고명",
    companyName: "회사명",
    period: "공고 기간",
    status: "공고 현황"
  });
  // const [name, setName] = useState("공고 명단");
  return (
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Banner />
          <div className="main-panel">
            <div className="content-wrapper">
              {/* <div className="row">
                <TopProducts data={data} />
              </div> */}
              {/* <div className="row"> */}
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              {/* </div> */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
