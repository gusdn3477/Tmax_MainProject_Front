import { useState, useEffect } from "react";

export default function FirstInterviewTableForm({ idx, key, data, jobsNo }) {

  return (
    <tr>
      <td>{idx}</td>
      <td>{data.applyNum}</td>
      <td>{data.firstInterviewScore}</td>
      <td></td>
      <td>{data.firstInterviewer}</td>
    </tr>
  );
}