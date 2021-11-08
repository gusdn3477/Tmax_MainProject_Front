import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card({ idx, key, data, setData }) {
  const handleDelete = (id) => {
    fetch(`/catalog-service/catalogs/${id}`, {
      // body에 넣어야 함
      method: "DELETE",
    }).then(
      alert("삭제 되었습니다!"),
      fetch(`/catalog-service/catalogs`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
    );
  };

  if (data.closed === "T")
    return (
      <div className="card" style={{ width: "60rem", margin: "13px" }}>
        <div className="card-inverse-info card-inverse-info-position">
          마감된 공고입니다.
        </div>
        <div className="card-body">
          <h5 className="card-title ">{data.jobsTitle}</h5>
          <h6 className="card-description">{data.jobsContext}</h6>
          <p className="card-text">고용형태 : {data.jobType}</p>
          <p className="card-text">채용유형 : {data.jobQualify}</p>
          <p className="card-text">지원자격 : {data.employType}</p>
          {data.applyStart && data.applyEnd ? (
            <p
              className="card-text"
              style={{ color: "red", fontWeight: "bold" }}
            >
              지원기간 : {data.applyStart.substring(0, 10)} ~{" "}
              {data.applyEnd.substring(0, 10)}
            </p>
          ) : (
            ""
          )}
          <Link to={`/jobs/${data.jobsNo}`}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "0.5rem" }}
            >
              공고보기
            </button>
          </Link>
        </div>
      </div>
    );
  else {
    return (
      <div className="card" style={{ width: "60rem", margin: "13px" }}>
        <div className="card-body">
          <h5 className="card-title">{data.jobsTitle}</h5>
          <h6 className="card-description">{data.jobsContext}</h6>
          <p className="card-text">고용형태 : {data.jobType}</p>
          <p className="card-text">채용유형 : {data.jobQualify}</p>
          <p className="card-text">지원자격 : {data.employType}</p>
          {data.applyStart && data.applyEnd ? (
            <p className="card-text">
              지원기간 : {data.applyStart.substring(0, 10)} ~{" "}
              {data.applyEnd.substring(0, 10)}
            </p>
          ) : (
            ""
          )}
          <Link to={`/jobs/${data?.jobsNo}`}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "0.5rem" }}
            >
              공고보기
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
