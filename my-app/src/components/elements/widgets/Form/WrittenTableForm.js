// import { ApplyNumString } from "../../../../utilities/ChangeString";

export default function WrittenTableForm({ idx, key, data, jobsNo}) {
  // const name = ApplyNumString(data.applyNum);
  // console.log("name", {name})
  return (
    <tr>
      <td>{idx}</td>
      <td>{data.applyNum ? (data.applyNum).substring(0,8) : ""}</td>
      <td>{data.writtenScore}</td>
      <td>{data.writtenResult}</td>
      <td>{data.writtenCheck ? (data.writtenCheck).substring(0,8) : ""}</td>
      {/* <td>{data.empNo ? (data.empNo).substring(0,8) : ""}</td> */}
    </tr>
  );
}