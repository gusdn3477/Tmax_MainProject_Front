import React, { useState, useEffect } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useParams } from 'react-router';
import JobsDetailForm from '../../elements/widgets/Form/JobsDetailForm';

export default function JobsDetail() {

  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState();
  const [process, setProcess] = useState();
  const { jobsNo } = useParams();

  useEffect(() => {
    fetch(`/job-service/jobs/${jobsNo}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setValues(data);
      }).then(
        fetch(`/job-service/jobprocess/${jobsNo}`)
          .then(res => {
            return res.json();
          })
          .then(data=>{
            setProcess(data);
          }).then(res => {
            return res;
          }).then(res => 
            setLoading(false))
      );
  }, []);

  if (loading) return <div class="spinner-border text-primary" role="status"></div>;
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
              <JobsDetailForm data={values} data2={process} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
}