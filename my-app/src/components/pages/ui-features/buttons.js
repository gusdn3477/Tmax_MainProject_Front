import React, { useState } from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Card from '../../elements/widgets/Home/Card';
import { useEffect } from 'react';

// Jobs list로 보시면 됩니다.
export default function Buttons() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/job-service/jobs`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const filterUse = data.filter((data) => data.closed === 'F');

  if(loading) return <div>잠시만 기다려 주세요</div>;
  return (
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <Banner />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                {
                  data.length > 0 && data.map(
                    (item, idx) => (
                      <Card
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
