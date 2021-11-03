import React, {useState} from 'react';
import Banner from '../../elements/ui/Banner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useEffect } from 'react';
import HRCard from '../../elements/widgets/Home/HRCard';

export default function FirstInterview() {

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
              <div className="row">
                {
                  data.length > 0 && data.map(
                    (item, idx) => (
                      // 아래는 마감된 공고
                      <HRCard
                        idx={idx + 1}
                        key={item.idx}
                        data={item}
                        what={"first-interview"}
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

  // if (loading) return <div>잠시만 기다려 주세요</div>;

  // return (
  //   <div id="wrap">
  //     <Header />
  //     <div className="container-scroller">
  //       <div className="container-fluid page-body-wrapper">
  //         {/* Banner는 왼쪽에 있는 리스트 형식의 메뉴 */}
  //         <Banner />
  //         {/* 여기부터 프사 누르면 나오는 메뉴 */}
  //         <div className="main-panel">
  //           <div className="content-wrapper">
  //             <div className="row">
  //               <WrittenTable/>
  //             </div>
  //           </div>
  //           <Footer />
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  );
}