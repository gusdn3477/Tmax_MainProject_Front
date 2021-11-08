import React, { useState } from "react";
import Banner from "../../elements/ui/Banner";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Card from "../../elements/widgets/Home/Card";
import { useEffect } from "react";
import Pagination from "../../../utilities/Pagination";
import { paginate } from "../../../utilities/paginate";

// Jobs list로 보시면 됩니다.
export default function HRJobsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobpage, setJobpage] = useState({
    jobdata: [],
    pageSize: 5,
    currentPage: 1,
  });

  useEffect(() => {
    fetch(`/job-service/${localStorage.getItem("corpNo")}/jobs`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (page) => {
    setJobpage({ ...jobpage, currentPage: page });
  };

  const { jobdata, pageSize, currentPage } = jobpage;
  const pagedJobs = paginate(data, currentPage, pageSize);

  if (loading)
    return (
      <div class="spinner-border text-primary" role="status">
        잠시만 기다려 주세요
      </div>
    );
  return (
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Banner />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                {pagedJobs.map((job, idx) => (
                  <Card idx={idx + 1} key={job.idx} data={job} setData={job} />
                ))}
              </div>
              <Pagination
                itemsCount={data.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
