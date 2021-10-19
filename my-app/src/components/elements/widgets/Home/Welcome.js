export default function Welcome() {
  return (
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 className="font-weight-bold">Welcome 홍길동</h3>
          <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3 unread alerts!(알림 구현시 사용)</span></h6>
        </div>
        <div className="col-12 col-xl-4">
          <div className="justify-content-end d-flex">
            <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
              <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
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