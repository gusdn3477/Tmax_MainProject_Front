import { useState } from "react";

export default function HRListForm({ key, data, setMyList }) {

  const [empNo, setEmpNo] = useState(data.empNo);

  const handleDelete = (id) => {
    fetch(`/hr-service/hr`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        empNo:empNo // 확실하지 않음 되면 이걸로 사용
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

  // const handlePutUserLists = (e) => {
  //   e.preventDefault();

  //   const valid = onTextCheck();

  //   if (!valid) console.error("retry");

  //   else {

  //     fetch(`/hr-service/hr/checkpwd`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: values.userId, // 토큰에서 가지고 있어야 함. 유저 조회 기능 넣어서 가져온 뒤 비밀번호 비교 후에 짜야 할 듯(백엔드 단에서 처리)
  //         password: values.password
  //       }),
  //     }).
  //     then(res => res.json())
  //       .then(
  //         alert("success"),
  //         gogo.push('/')
  //       )
  //   }
  // }

  return (
    <tr>
      <td>{data.empNo}</td>
      <td className="font-weight-bold">{data.corpNo}</td>
      <td>{data.name}</td>
      <td className="font-weight-bold">{data.email}</td>
      <td className="font-weight-bold">{data.parents}</td>
      <td className="font-weight-bold">{data.auth}</td>
      <td className="font-weight-medium"><button type="button" class="badge badge-danger" onClick={()=>handleDelete()}>삭제하기</button></td>
    </tr>
  );
}