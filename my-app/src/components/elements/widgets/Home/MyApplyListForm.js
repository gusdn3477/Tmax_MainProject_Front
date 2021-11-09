import { useState, useEffect } from "react";

export default function MyApplyListForm({ data2 }) {
  const [applyInfo, setApplyInfo] = useState([]);

  console.log(data2); //jobsNo

  useEffect(() => {
    fetch(`/user-service/users/${localStorage.getItem("userId")}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApplyInfo(data);
      });
  }, []);

  return (
    <div>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          내 지원서 보기
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                내 지원서
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h3>최종 지원이 완료되었습니다.</h3>
              {applyInfo.email}
              {applyInfo.name}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
