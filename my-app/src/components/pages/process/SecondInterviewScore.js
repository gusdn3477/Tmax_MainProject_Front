import React, { useState } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import WrittenTableForm from '../../elements/widgets/Form/WrittenTableForm';

export default function SecondInterviewScore() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { jobsNo } = useParams();

  useEffect(() => {
    fetch(`/process-service/process/second-interview/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>잠시만 기다려 주세요</div>;
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
                      <p className="card-title mb-0">2차 면접 대상자 목록</p>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>번호</th>
                              <th>수험번호</th>
                              <th>채점자 인사코드</th>
                              <th>점수</th>
                              <th>합/불 여부</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.length > 0 && data.map(
                                (item, idx) => (
                                  <WrittenTableForm
                                    idx={idx + 1}
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