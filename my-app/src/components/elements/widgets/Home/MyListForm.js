import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyListForm({ idx, key, data }) {

  const [values, setValues] = useState([]);
  const [interview, setInterview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/process-service/process/written/${data.jobsNo}/${localStorage.getItem('userId')}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setValues(data);
      }).then(
        fetch(`/process-service/process/interview/${data.jobsNo}/${localStorage.getItem('userId')}`)
          .then(res => {
            return res.json();
          }).then(data => {
            console.log(data);
            setInterview(data);
            setLoading(false);
          })
      );
  }, []);

  // 이걸로 결과 얻기
  if (loading) return <div></div>
  return (
    <tr>
      <td>{idx}</td>
      <td><Link to={`/jobs/${data.jobsNo}`}>{data.jobsNo}</Link></td>
      <td className="font-weight-bold">{data.corpNo}</td>
      <td>{data.jobsTitle}</td>
      {/* <td>{data.createdAt}</td> */}
      <td>{data.employType}</td>
      <td>{data.jobLocation}</td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">내 지원서 보기</button></td>
      <td>{values.writtenResult ? <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">확인하기</button> : "미정"}</td>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">내 지원서</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              조만간 구현할 예정입니다.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">지원 결과</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              조만간 구현할 예정입니다.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
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