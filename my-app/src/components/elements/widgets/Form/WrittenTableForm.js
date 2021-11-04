import { useState, useEffect } from "react";

export default function WrittenTableForm({ idx, key, data, jobsNo}) {

  return (
    <tr>
      <td>{idx}</td>
      <td>{data.applyNum}</td>
      {/* {save.writtenScore ? <td>{save.writtenScore}</td> : <td></td>}
      {save.writtenResult ? <td>{save.writtenResult}</td> : <td></td>} */}
      <td>{data.writtenScore}</td>
      <td>{data.writtenResult}</td>
      <td>{data.empNo}</td>
    </tr>
  );
}