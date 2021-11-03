import React, { useState } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import WrittenTableForm from '../../elements/widgets/Form/WrittenTableForm';

export default function WrittenScore() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { jobsNo } = useParams();

  useEffect(() => {
    fetch(`/process-service/process/written/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);


  // const checkEmail = () => {
  //   fetch(`/hr-service/hr/checkemail`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email : values.email
  //     }),
  //   }).
  //   then(res => res.text()).
  //   then(res => {
  //     if(res === "true"){
  //       alert("이미 등록된 계정입니다.")
  //     }
  //     else{
  //       alert("사용 가능한 이메일입니다.");
  //     }
  //   })
  // }

  const score = () => {
    fetch(`/process-service/process/written-test/score`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobsNo : jobsNo
        }),       
    })
      .then(res => {
        return res.json();
      })
      .then(
        fetch(`/process-service/process/written/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        alert("채점 완료!")
      })
      )
  }

  const PassOrNot = () => { // jobprocess 가져올 수 있어야 함
    fetch(`/process-service/process/written-test/result`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobsNo : jobsNo,
          empNo : localStorage.getItem('empNo')
        }),       
    })
      .then(res => {
        return res.json();
      })
      .then(
        fetch(`/process-service/process/written/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        alert("합/불 여부 체크 완료")
      })
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
  const confirmScore = useConfirm(
    "채점하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    score
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
                      <p className="card-title mb-0">필기 대상자 목록</p>
                      <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th>번호</th>
                              <th>수험번호</th>
                              <th>점수</th>
                              <th>합/불 여부</th>
                              <th>채점자 인사코드</th>
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
                <div>
                  <button type="button" className="btn btn-primary" onClick={confirmScore}>채점하기</button>
                  <button type="button" className="btn btn-primary" onClick={confirmScore}>합/불 여부 결정하기</button>
                  <button type="button" className="btn btn-primary">합격자 명단 넘기기</button>
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