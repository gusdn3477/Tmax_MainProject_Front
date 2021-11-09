import { useState, useEffect } from "react";

export default function FirstInterviewTableForm({ idx, key, data, jobsNo, setData }) {

  const [values, setValues] = useState('');
  const [interviwer, SetInterviewer] = useState(data.firstInterviewer);
  const [loading, setLoading] = useState(false);

  const score = () => {
    fetch(`/process-service/process/first-interview/score`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        applyNum: data.applyNum,
        firstInterviewScore: values.score,
        firstInterviewer: localStorage.getItem('empNo')
      }),
    })
      .then(res => {
        setValues('');
        return res;
      })
      .then(
        res =>
          fetch(`/process-service/process/first-interview/${jobsNo}`)
            .then(res => {
              return res.json();
            })
        .then(res => {
          setData(res);
          console.log('res', res);
          setLoading(false);
          alert("채점 완료!");
        })
        )
  }

  const handleChangeForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
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

  const confirmScore = useConfirm(
    "채점하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    score
  );

  return (
    <tr>
      <td>{idx}</td>
      <td>{data.applyNum ? (data.applyNum).substring(0,8) : ""}</td>
      <td><input type="text" class="form-control" id="exampleInputPassword1" name="score" onChange={handleChangeForm} /></td>
      <td><button type="button" className="btn btn-primary" onClick={confirmScore}>채점하기</button></td>
      <td>{data.firstInterviewScore}</td>
      <td>{data.firstInterviewResult}</td>
      <td>{data.firstInterviewer ? (data.firstInterviewer).substring(0,8) : ""}</td>
    </tr>
  );
}