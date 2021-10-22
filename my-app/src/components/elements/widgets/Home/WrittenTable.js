export default function WrittenTable() {
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">필기전형 대상자 목록</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="table table-striped table-borderless" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>수험번호</th>
                      <th>이름</th>
                      <th>필기점수</th>
                      <th>필기 합/불 여부</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th>15010701</th>
                      <th>박현우</th>
                      <th>98</th>
                      <th>미정</th>
                    </tr>
                    <tr>
                      <th>15010702</th>
                      <th>윤희상</th>
                      <th>98</th>
                      <th>합격</th>
                    </tr>
                    <tr>
                      <th>15010703</th>
                      <th>권진희</th>
                      <th>98</th>
                      <th>미정</th>
                    </tr>
                    <tr>
                      <th>15010704</th>
                      <th>김영모</th>
                      <th>98</th>
                      <th>미정</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn col-md-4" href="../../index.html">채점하기</a>
        </div>
        <div className="mt-3">
          <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn col-md-4" href="../../index.html">합격자 명단 넘겨주기(채점 완료시에 가능)</a>
        </div>
      </div>
    </div>
  );
}