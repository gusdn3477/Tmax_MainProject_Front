import { useState, useEffect } from "react";

export default function WrittenTableForm({ idx, key, data, setMyList }) {

  const [parents, setParents] = useState();

  const handleDelete = () => {

    fetch(`/hr-service/hr/super`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parents: parents.parents,
        empNo: data.empNo // 확실하지 않음 되면 이걸로 사용
      })
    }).then(
      alert("삭제 되었습니다!"),
      fetch(`/hr-service/hr/${localStorage.getItem('empNo')}`)
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
      <td>{idx}</td>
      <td>{data.applyNum}</td>
      <td>{data.writtenScore}</td>
      <td>{data.writtenResult}</td>
      <td>{data.empNo}</td>
    </tr>
  );
}