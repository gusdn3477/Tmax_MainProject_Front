import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyApplyListForm from "./MyApplyListForm";

export default function MyListForm({ idx, key, data }) {
  const [values, setValues] = useState([]);
  const [interview, setInterview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyInfo, setApplyInfo] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `/process-service/process/written/${data.jobsNo}/${localStorage.getItem("userId")}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setValues(data);
  //     })
  //     .then(
  //       fetch(
  //         `/process-service/process/interview/${data.jobsNo
  //         }/${localStorage.getItem("userId")}`
  //       )
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           setInterview(data);
  //           setLoading(false);
  //         })
  //     );
  // }, []);

  useEffect(() => {
    fetch(`/user-service/users/apply/${localStorage.getItem("userId")}/${data.jobsNo}`
    )
      .then((res) => {
        return res.json();
      })
      .then(res => {
        setApplyInfo(res);
        console.log('data', applyInfo);
        setLoading(false);
      });
  }, []);

  // 이걸로 결과 얻기
  if (loading)
    return (
      <div class="spinner-border text-primary" role="status">
        잠시만 기다려 주세요
      </div>
    );
  return (
    <tr>
      <td>{idx}</td>
      <td>
        <Link to={`/jobs/${data.jobsNo}`}>{data.jobsTitle}</Link>
      </td>
      <td className="font-weight-bold">{data.corpName}</td>
      <td>{data.employType}</td>

      {/* <td>{data.createdAt}</td> */}

      <td>{data.jobLocation}</td>
      <td>
        {/* <MyApplyListForm data2={data} /> */}

        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal`+idx}
          >
            내 지원서 보기
          </button>
        </div>
        <div
          class="modal fade"
          id={`exampleModal`+idx}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  내 지원서
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body" value={data}>
                <h3>최종 지원이 완료되었습니다.</h3>
                <br></br> 이름 : {applyInfo.applyName} <br></br>
                <br></br> 이메일 : {applyInfo.applyEmail} <br></br>
                <br></br> 전화번호 : {applyInfo.applyContact} <br></br>
                <br></br> 지원날짜 : {(applyInfo.applyDateTime).substring(0,10)} <br></br>
                {/* <br></br> data.jobsNo : {data.jobsNo} <br></br> */}
                <br></br> 지원번호 : {applyInfo.jobsNo} <br></br>
              </div>
              {/* <div>{applyList}</div> */}
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        {values.writtenResult ? (
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            확인하기
          </button>
        ) : (
          "미정"
        )}
      </td>

      {/* 잠시 대기 */}
      {/* <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                지원 결과
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">조만간 구현할 예정입니다.</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </tr>
  );
}
