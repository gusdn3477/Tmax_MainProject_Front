import React, { useState, useEffect } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ToDoList from '../../elements/widgets/Home/ToDoList';
import TopProducts from '../../elements/widgets/Home/MyListForm';
import MyListForm from '../../elements/widgets/Home/MyListForm';

export default function MyList() {

  const [myList, setMyList] = useState([]);
  useEffect(() => {
    fetch(`/user-service/apply/${localStorage.getItem('userId')}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMyList(data);
      });
  }, []);

  return (
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Banner />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title mb-0">나의 지원현황</p>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>공고번호</th>
                              <th>회사명</th>
                              <th>공고명</th>
                              <th>공고 기간</th>
                              <th>채용 유형</th>
                              <th>근무 지역</th>
                              <th>지원 일자</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              myList.length > 0 && myList.map(
                                (item => {
                                  <MyListForm 
                                    key={item.id}
                                    data={item}
                                    setMyList = {setMyList}
                                  />
                                })
                              )
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
