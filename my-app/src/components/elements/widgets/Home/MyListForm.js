import { useState, useEffect } from "react";

export default function MyListForm({idx, key, data}) {

  const [myList, setMyList] = useState([]);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`/process-service/process/written/${data.jobsNo}/${localStorage.getItem('userId')}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
        console.log(data);
        setValues(data);
        setLoading(false);
    }).then(
    );
  },[]);

  if(loading) return <div>잠시만 기다려 주세요.</div>
  return (
    <tr>
      <td>{idx}</td>
      <td>{data.jobsNo}</td>
      <td className="font-weight-bold">{data.corpNo}</td>
      <td>{data.jobsTitle}</td>
      <td>{data.createdAt}</td>
      <td>{data.employType}</td>
      <td>{data.jobLocation}</td>
      <td>{data.written_result ? <button type="button" class="btn btn-primary">확인하기</button> : "미정" }</td>
      {/* <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
      <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td> */}
    </tr>
  );
}