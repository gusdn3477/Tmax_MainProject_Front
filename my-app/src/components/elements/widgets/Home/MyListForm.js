import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyApplyListForm from "./MyApplyListForm";

export default function MyListForm({ idx, key, data }) {
  const [values, setValues] = useState([]);
  const [interview, setInterview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyInfo, setApplyInfo] = useState([]);

  useEffect(() => {
    fetch(
      `/process-service/process/written/${data.jobsNo}/${localStorage.getItem(
        "userId"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setValues(data);
      })
      .then(
        fetch(
          `/process-service/process/interview/${
            data.jobsNo
          }/${localStorage.getItem("userId")}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setInterview(data);
            setLoading(false);
          })
      );

    //   const brandList = newBrand.map(item => (

    //     <div className="col-12 col-md-3">
    //         <div className="row">
    //              <div className="col-12 col-sm-4 brandImg"><i className= {item.img}></i></div>
    //                  <div className="col-12 col-sm-auto">
    //                  <p className="brandTitle">{item.name}</p>
    //                  <p className="brandTxt">{item.content}</p>
    //             </div>
    //         </div>
    //     </div>

    // )).slice(0,4);

    // fetch(`/user-service/users/jobs/${localStorage.getItem("userId")}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((events) => {
    //     console.log(events);
    //     setApplyInfo(events);
    //   });
  }, []);

  useEffect(() => {
    fetch(
      `/user-service/users/apply/${localStorage.getItem("userId")}/${
        data.jobsNo
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((event) => {
        console.log(event);
        setApplyInfo(event);
      });
  }, []);

  const applyList = Object.entries(applyInfo).map((item) => (
    <div class="modal-body">
      <h3>최종 지원이 완료되었습니다.</h3>
      <br></br> 이름 : {item.applyName} <br></br>
      <br></br> 이메일 : {item.applyEmail} <br></br>
      <br></br> 전화번호 : {item.applyContact} <br></br>
      <br></br> 지원날짜 : {item.applyDateTime} <br></br>
      <br></br> data.jobsNo : {data.jobsNo} <br></br>
      <br></br> applyInfo.jobsNo : {item.jobsNo} <br></br>
      <br></br> value.jobsNo : $value <br></br>
    </div>
  ));

  // 이걸로 결과 얻기
  if (loading) return <div></div>;
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
            data-bs-target="#exampleModal"
          >
            내 지원서 보기 {data.jobsNo}
          </button>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
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
              {/* <div class="modal-body">
                <h3>최종 지원이 완료되었습니다.</h3>
                <br></br> 이름 : {applyInfo.applyName} <br></br>
                <br></br> 이메일 : {applyInfo.applyEmail} <br></br>
                <br></br> 전화번호 : {applyInfo.applyContact} <br></br>
                <br></br> 지원날짜 : {applyInfo.applyDateTime} <br></br>
                <br></br> data.jobsNo : {data.jobsNo} <br></br>
                <br></br> applyInfo.jobsNo : {applyInfo.jobsNo} <br></br>
                <br></br> value.jobsNo : $value <br></br>
                
              </div> */}
              <div>{applyList}</div>
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
            <br></br> 지원날짜 : {applyInfo.applyDateTime} <br></br>
            <br></br> data.jobsNo : {data.jobsNo} <br></br>
            <br></br> applyInfo.jobsNo : {applyInfo.jobsNo} <br></br>
            <br></br> value.jobsNo : $value <br></br>
          </div>
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

      {/* 잠시 대기 */}
      <div
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
      </div>
      {/* <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td> */}
    </tr>
  );
}
