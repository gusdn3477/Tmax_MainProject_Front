export default function WrittenTableForm({ idx, key, data, jobsNo}) {

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