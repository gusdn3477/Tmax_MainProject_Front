import { useState, useEffect } from "react";

export default function Card() {

  const [data, setData] = useState({
    title: "공고 리스트",
    name: "공고명",
    companyName: "회사명",
    period: "공고 기간",
    status: "신입/정규"
  });

  return (
    <div className="col-md-6 mb-4 stretch-card transparent">
      <div className="card card-tale">
        <div className="card-body">
          <p className="mb-4">{data.companyName}</p>
          <p className="fs-30 mb-2">{data.name}</p>
          <p>{data.status}</p>
          <p>{data.period}</p>
        </div>
      </div>
    </div>
  );
}