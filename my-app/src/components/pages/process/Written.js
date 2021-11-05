import React, {useState} from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useEffect } from 'react';
import HRCard from '../../elements/widgets/Home/HRCard';

export default function Written() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/job-service/${localStorage.getItem('corpNo')}/jobs`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
  }, []);

  if (loading) return <div>잠시만 기다려 주세요</div>;
  return (
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Banner />
          <div className="main-panel">
            <div className="content-wrapper">
            <div class="alert alert-primary" role="alert">마감된 공고만 보입니다.</div>
              <div className="row">
                {
                  data.length > 0 && data.map(
                    (item, idx) => (
                      // 아래는 마감된 공고
                      <HRCard
                        what={"written"}
                        idx={idx + 1}
                        key={item.idx}
                        data={item}
                        setData={setData}
                      />
                    )
                  )
                }
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
}