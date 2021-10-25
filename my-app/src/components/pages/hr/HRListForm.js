export default function HRListForm({data}) {

  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title mb-0">{data.title}</p>
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <thead>
                <tr>
                  <th>인사담당자 코드</th>
                  <th>기업코드</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>권한(부모)</th>
                  <th>관리자 허가</th>
                  <th>가입 시간</th>
                  <th>삭제하기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Search Engine Marketing</td>
                  <td className="font-weight-bold">$362</td>
                  <td>21 Sep 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>Search Engine Optimization</td>
                  <td className="font-weight-bold">$116</td>
                  <td>13 Jun 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>Display Advertising</td>
                  <td className="font-weight-bold">$551</td>
                  <td>28 Sep 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-warning">Pending</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>Pay Per Click Advertising</td>
                  <td className="font-weight-bold">$523</td>
                  <td>30 Jun 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-warning">Pending</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>E-Mail Marketing</td>
                  <td className="font-weight-bold">$781</td>
                  <td>01 Nov 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-danger">Cancelled</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>Referral Marketing</td>
                  <td className="font-weight-bold">$283</td>
                  <td>20 Mar 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-warning">Pending</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
                <tr>
                  <td>Social media marketing</td>
                  <td className="font-weight-bold">$897</td>
                  <td>26 Oct 2018</td>
                  <td className="font-weight-medium"><div className="badge badge-success">Completed</div></td>
                  <td className="font-weight-medium"><button type="button" class="badge badge-danger">삭제하기</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}