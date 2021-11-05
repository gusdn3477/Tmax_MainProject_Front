import React, { useState, useEffect } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useParams } from 'react-router';
import WrittenTableForm from '../../elements/widgets/Form/WrittenTableForm';

export default function WrittenScore() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [writtenPass, setWrittenPass] = useState();
  const { jobsNo } = useParams();
  const [flag, setFlag] = useState(0);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    fetch(`/process-service/process/written/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .then(
        fetch(`/job-service/jobprocess/${jobsNo}`) // 필기 합격 인원 가져오기
          .then(res => {
            return res.json();
          })
          .then(data => {
            setWrittenPass(data);
            setLoading(false);
          })
      );
  }, []);

  const score = () => {
    setLoading(true);
    setReady(true);
    fetch(`/process-service/process/written-test/score`, { // 점수 매기는 과정.. => 여기서 점수 바뀜
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobsNo: jobsNo
      }),
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        setReady(false);
        console.log('res', res);
        return res;
      }
      )
      .then(
        res => {
        fetch(`/process-service/process/written/${jobsNo}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setData(data);
            console.log('data', data);
            setFlag(1);
            alert("채점 완료!")
            setLoading(false);
          })}
      )
  }

  const PassOrNot = () => { // jobprocess 가져올 수 있어야 함
    if (flag === 0) {
      alert("채점 후에 합/불 여부를 가릴 수 있습니다");
    }
    else {
      setLoading(true);
      fetch(`/process-service/process/written-test/result`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobsNo: jobsNo,
          empNo: localStorage.getItem('empNo'),
          count: writtenPass.writtenPass
        }),
      }).then(res => res.json())
        .then(
          res => {
          fetch(`/process-service/process/written/${jobsNo}`)
            .then(res => {
              return res.json();
            })
            .then(data => {
              setFlag(2);
              setData(data);
              setLoading(false);
              alert("합/불 여부 체크 완료")
            })}
        )
    }
  }

  const PassList = () => { // jobprocess 가져올 수 있어야 함
    if (flag !== 2) {
      alert("합/불 여부가 정해진 뒤에 합격자 명단을 넘길 수 있습니다.");
    }
    else {
      fetch(`/process-service/process/written-test/${jobsNo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
    }
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

  const confirmPassOrNot = useConfirm(
    "합/불 여부를 결정하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    PassOrNot
  );

  const confirmPassList = useConfirm(
    "필기 합격자 명단을 넘기시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    PassList
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
                  <button type="button" className="btn btn-primary" onClick={confirmScore}>채점하기</button>
                  <button type="button" className="btn btn-primary" onClick={confirmPassOrNot}>합/불 여부 결정하기</button>
                  <button type="button" className="btn btn-primary" onClick={confirmPassList}>합격자 명단 넘기기</button>
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