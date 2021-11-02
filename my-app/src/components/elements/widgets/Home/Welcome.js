import { useEffect, useState } from "react";

export default function Welcome() {

  let today = new Date();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(localStorage.getItem('userId')){
      fetch(`/user-service/users/${localStorage.getItem('userId')}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
    }

    if(localStorage.getItem('empNo')){
      fetch(`/hr-service/hr/detail/${localStorage.getItem('empNo')}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
    }
  }, []);

  if(loading) return <div>불러오는 중입니다.</div>
  return (
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 className="font-weight-bold">Welcome {data.name}님</h3>
          <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3 unread alerts!(알림 구현시 사용)</span></h6>
        </div>
        <div className="col-12 col-xl-4">
          <div className="justify-content-end d-flex">
            <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
              <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="mdi mdi-calendar"></i>{today.toLocaleDateString()}
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                <a className="dropdown-item" href="#">January - March</a>
                <a className="dropdown-item" href="#">March - June</a>
                <a className="dropdown-item" href="#">June - August</a>
                <a className="dropdown-item" href="#">August - November</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}