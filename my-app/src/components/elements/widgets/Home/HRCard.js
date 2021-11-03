import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 마감된 공고만 보여주는 페이지입니다. (마감되지 않은 공고를 채점하면 안되므로)
export default function HRCard({ idx, key, what, data, setData }) {

  if (data.closed === 'F') return "";
  return (
    <div className="card" style={{ width: "60rem", margin: "13px" }}>
      <div className="card-body">
        <p classNameName="card-head">{data.jobsTitle}</p>
        <h5 className="card-title">{data.jobsContext}</h5>
        <p className="card-text">고용형태 :  {data.jobType}</p>
        <p className="card-text">채용유형 :  {data.jobQualify}</p>
        <p className="card-text">지원자격 :  {data.employType}</p>
        {data.applyStart && data.applyEnd ?
          <p className="card-text">지원기간 : {(data.applyStart).substring(0, 10)} ~ {(data.applyEnd).substring(0, 10)}</p> : ""
        }
        <Link to={`/process/${what}/${data.jobsNo}`}>
          <button type="button" className="btn btn-primary">채점하기</button>
        </Link>
      </div>
    </div>
  )
};
