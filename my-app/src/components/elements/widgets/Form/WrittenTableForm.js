export default function WrittenTableForm({ idx, key, data, jobsNo}) {

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