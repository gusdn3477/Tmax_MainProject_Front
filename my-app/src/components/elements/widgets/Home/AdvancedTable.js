export default function AdvancedTable() {
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Advanced Table</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Quote#</th>
                      <th>Product</th>
                      <th>Business type</th>
                      <th>Policy holder</th>
                      <th>Premium</th>
                      <th>Status</th>
                      <th>Updated at</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}