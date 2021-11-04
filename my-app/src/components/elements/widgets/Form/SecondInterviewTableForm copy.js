import { useState, useEffect } from "react";

export default function SecondInterviewTableForm({ idx, key, data, jobsNo }) {

  return (
    <tr>
      <td>{idx}</td>
      <td>{data.applyNum}</td>
      <td>{data.secondInterviewScore}</td>
      <td></td>
      <td>{data.secondInterviewer}</td>
    </tr>
  );
}