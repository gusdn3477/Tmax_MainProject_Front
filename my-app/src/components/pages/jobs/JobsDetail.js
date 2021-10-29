import React, {useState, useEffect} from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CreateJobsForm from '../../elements/widgets/Form/CreateJobsForm';
import { useParams } from 'react-router';
import JobsDetailForm from '../../elements/widgets/Form/JobsDetailForm';
import { data } from 'jquery';

export default function JobsDetail() {

  const ip = useState('');
  const [loading, setLoading] = useState(true);
  const [ values, setValues ] = useState();
  const {jobsNo} = useParams();
  // useEffect((jobsNo) => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `/job-service/jobs/${jobsNo}`,
  //     );
  //     const json = await res.json();
  //     setData(json);
  //   };
  //   fetchData();
  // }, [setData]);

  useEffect(()=>{
    fetch(`/job-service/jobs/${jobsNo}`)
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

  if(loading) return <div>잠시만 기다려 주세요</div>;
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
                <JobsDetailForm data={values}/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>

  );
}