import { useState, useEffect } from "react";

export default function Card({ idx, key, data, setData }) {

  const handleDelete = (id) => {
    fetch(`/catalog-service/catalogs/${id}`, { // body에 넣어야 함
      method: "DELETE"
    }).then(
      alert("삭제 되었습니다!"),
      fetch(`/catalog-service/catalogs`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setData(data);
        })
    )
  }

  return (
    <div class="card" style={{ width: "60rem", margin: "13px" }}>
      <div class="card-body">
        <p className="card-head">{data.jobsTitle}</p>
        <h5 class="card-title">{data.jobsContext}</h5>
        <p class="card-text">고용형태 :  {data.jobType}</p>
        <p class="card-text">채용유형 :  {data.jobQualify}</p>
        <p class="card-text">지원자격 :  {data.employType}</p>
        {data.applyStart && data.applyEnd ?
          <p class="card-text">지원기간 : {(data.applyStart).substring(0, 10)} ~ {(data.applyEnd).substring(0, 10)}</p> : ""
        }
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}