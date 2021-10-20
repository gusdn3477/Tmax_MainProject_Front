import React, { useState } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ToDoList from '../../elements/widgets/Home/ToDoList';
import TopProducts from '../../elements/widgets/Home/TopProducts';

export default function MyList() {

  const [data, setData] = useState({
    title: "내가 지원한 공고",
    name: "공고명",
    companyName: "회사명",
    period: "공고 기간",
    status: "공고 결과"
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
              <div className="row">
                <TopProducts data={data} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
