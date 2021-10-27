import { useState } from "react";

export default function HRListForm({ key, data, setMyList }) {

  const [empNo, setEmpNo] = useState(data.empNo);

  const handleDelete = (id) => {
    fetch(`/hr-service/hr`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        empNo: empNo // 확실하지 않음 되면 이걸로 사용
      })
    }).then(
      alert("삭제 되었습니다!"),
      fetch(`/hr-service/hr`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setMyList(data);
        })
    )
  }

  const useConfirm = (message = null, onConfirm, onCancel, deleteHR) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
        deleteHR();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };

  const deleteConfirm = () => 1;
  const cancelConfirm = () => 0;
  const confirmDelete = useConfirm(
    "삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    handleDelete
  );

  return (
    <tr>
      <td>{data.empNo}</td>
      <td className="font-weight-bold">{data.corpNo}</td>
      <td>{data.name}</td>
      <td className="font-weight-bold">{data.email}</td>
      <td className="font-weight-bold">{data.parents}</td>
      <td className="font-weight-bold">{data.auth}</td>
      <td className="font-weight-medium"><button type="button" class="badge badge-danger" onClick={() => confirmDelete()}>삭제하기</button></td>
    </tr>
  );
}