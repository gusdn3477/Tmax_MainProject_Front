import React, { useState, useEffect } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useParams } from 'react-router';
import FirstInterviewTableForm from '../../elements/widgets/Form/FIrstInterviewTableForm';

export default function FirstInterviewScore() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstInterviewPass, setFirstInterviewPass] = useState();
  const { jobsNo } = useParams();
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    fetch(`/process-service/process/first-interview/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .then(
        fetch(`/job-service/jobprocess/${jobsNo}`) // 1차 합격 인원 가져오기
          .then(res => {
            return res.json();
          })
          .then(data => {
            setFirstInterviewPass(data);
            console.log(data);
            setLoading(false);
          })
      );
  }, []);


  const PassOrNot = () => { // jobprocess 가져올 수 있어야 함
    setLoading(true);
    fetch(`/process-service/process/written-test/result`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobsNo: jobsNo,
        empNo: localStorage.getItem('empNo'),
        count: firstInterviewPass.firstInterviewPass
      }),
    }).then(res => res.json)
      .then(
        res => {
          fetch(`/process-service/process/first-interview/${jobsNo}`)
            .then(res => {
              return res.json();
            })
            .then(data => {
              setData(data);
              setLoading(false);
              alert("합/불 여부 체크 완료")
            })
        }
      )
  }

  const useConfirm = (message = null, onConfirm, onCancel, deleteHR) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
        deleteHR();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };

  const deleteConfirm = () => 1;
  const cancelConfirm = () => 0;

  const confirmPassOrNot = useConfirm(
    "합/불 여부를 결정하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    PassOrNot
  );

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
                      <p className="card-title mb-0">1차 면접 대상자 목록</p>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>번호</th>
                              <th>수험번호</th>
                              <th>점수 입력</th>
                              <th>점수</th>
                              <th>합/불 여부</th>
                              <th>채점자 인사코드</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.length > 0 && data.map(
                                (item, idx) => (
                                  <FirstInterviewTableForm
                                    idx={idx + 1}
                                    key={item.idx}
                                    data={item}
                                    jobsNo={jobsNo}
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
                <div>
                  <button type="button" className="btn btn-primary" 
                  style={{marginTop:"-22px", marginRight:"10px", float:"right"}} onClick={confirmPassOrNot}>합/불 여부 결정하기</button>
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