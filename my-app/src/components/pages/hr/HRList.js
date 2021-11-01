import React, { useState, useEffect } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import HRListForm from './HRListForm';

export default function HRList() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/hr-service/hr/${localStorage.getItem('empNo')}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if(loading) return <div>잠시만 기다려 주세요</div>;
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
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title mb-0">인사담당자 명단</p>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>번호</th>
                              <th>이름</th>
                              <th>이메일</th>
                              <th>인사담당자 코드</th>
                              <th>직급</th>
                              <th>관리자 허가</th>
                              <th>삭제하기</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                              data.length > 0 && data.map(
                                (item, idx) => (
                                  <HRListForm
                                    idx={idx+1}
                                    key={item.idx}
                                    data={item}
                                    setMyList={setData}
                                  />
                                )
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