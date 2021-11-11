// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import RegisterForm from '../../elements/widgets/Form/Register';
// import { Fragment } from 'react';
import { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Brand from "../brand/Brand";

export default function JobsDetailForm({ data, data2 }) {
  const gogo = useHistory();
  const { jobsNo } = useParams();

  const passListToWritten = (id) => {
    fetch(`/process-service/process/${jobsNo}`, {
      // body에 넣어야 함
      method: "GET",
    }).then(
      //예외처리 있으면 좋을 듯
      alert("마감 완료!"),
      gogo.replace('/hr/jobs')
    );
  };
  const handleDelete = (id) => {
    if (localStorage.getItem('empNo') == data?.empNo){
      fetch(`/job-service/jobs`, {
      // body에 넣어야 함
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          empNo: localStorage.getItem('empNo'),
          jobsNo : jobsNo
        }),
    }).then(
      //예외처리 있으면 좋을 듯
      alert("삭제 완료!"),
      gogo.replace('/hr/jobs')
    );
  }
  else{
    alert("공고생성자 외에는 삭제할수 없습니다")
  }
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
  const confirmEnd = useConfirm(
    "해당 공고를 마감하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    passListToWritten
  );
  const confirmDelete = useConfirm(
    "해당 공고를 삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    handleDelete
  );

  return (
  <div>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700;900&display=swap" rel="stylesheet"></link>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-8 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand />
                <h2 style={{fontFamily:"Noto Snas KR", fontWeight:"900", paddingLeft:"2%", lineHeight:"1.4"}}>{data?.jobsTitle}</h2>
                
                <form className="pt-5">
                  
                  <div className="form-group display-5" style={{ marginBottom: "4rem"}}>
                    {data?.jobsContext}
                  </div>{/*
                  <div className="form-group">
                    채용 구분 : {data?.employType}
                  </div>
                  <div className="form-group">
                    근무 형태 : {data?.jobType}</div>
                  <div className="form-group">
                    자격 요건 : {data?.jobQualify}
                  </div>
                  <div className="form-group">
                    채용인원 : {data?.recruitNum}명
                  </div>
                  <div className="form-group">
                    우대언어 : {data?.favoriteLang}
                  </div>
                  <div className="form-group">
                    근무지역 : {data?.jobLocation}
                  </div>
                  <div className="form-group">
                    상세 내용 : {data?.workDetail}
                  </div>
                  {data?.applyStart && data?.applyEnd ? (
                    <div className="form-group">
                      모집 기간 : {(data?.applyStart).substr(0, 10)} ~{" "}
                      {(data?.applyEnd).substr(0, 10)}
                    </div>
                  ) : (
                    ""
                  )} */}

                  <div className="table-responsive">
                    <table className="simple_table">
                      <thead>
                        <tbody>
                          <tr>
                            <th scope="row" >채용구분  </th>
                            <td>{data?.employType}</td>
                          </tr>
                          <tr>
                            <th>근무형태</th>
                            <td>{data?.jobType}</td>
                          </tr>
                          
                          {data?.applyStart && data?.applyEnd ? (
                            <tr>
                              <th> 지원기간  </th>
                              <td>{(data?.applyStart).substr(0, 10)} ~{" "}
                                {(data?.applyEnd).substr(0, 10)}
                              </td>
                            </tr>
                          ) : (
                            ""
                          )}
                          <tr>
                            <th>우대언어</th>
                            <td>{data?.favoriteLang}</td>
                          </tr> 
                          <tr>
                            <th>담당업무</th>
                            <td>{data?.workDetail}</td>
                          </tr> 
                          <tr>
                            <th>근무지역</th>
                            <td>{data?.jobLocation}</td>
                          </tr>
                          <tr>
                            <th>채용인원</th>
                            <td>{data?.recruitNum} 명</td>
                          </tr>
                          <tr>
                            <th>자격요건</th>
                            <td>{data?.jobQualify}</td>
                          </tr>
                        </tbody>
                      </thead>
                    </table>
                  </div>

                  <div class="row align-items-center" style={{ margin: "3rem 10% 2rem " }}>
                    {localStorage.getItem("empNo") ? (
                      <Fragment>
                        <div className="mt-3 col-auto w-50" >
                          <button
                            type="button" 
                            className="btn btn-block btn-inverse-primary btn-icon-text btn-lg font-weight-medium auth-form-btn"
                            onClick={confirmEnd}
                          >
                            <i className="fas fa-file btn-icon-prepend"></i>
                            마감하기
                          </button>
                        </div>
                        {/* <div className="mt-3">
                      <button type="button" className="btn btn-block btn-warning btn-lg font-weight-medium auth-form-btn">수정하기</button>
                    </div> */}
                        <div className="mt-3 col-auto w-50  ">
                          <button
                            type="button"
                            className="btn btn-block btn-inverse-danger btn-icon-text btn-lg font-weight-medium auth-form-btn"
                            onClick={confirmDelete}                          
                          >
                            <i className="fas fa-trash btn-icon-prepend"></i>
                            삭제하기
                          </button>
                        </div>
                      </Fragment>
                    ) : (
                      ""
                    )}

                    {localStorage.getItem("userId") ? (
                      <Fragment>
                        <div className="mt-3 col-auto">
                          <Link to={`/users/apply/${jobsNo}`}>
                            <button
                              type="button"
                              className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            >
                              지원하기
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
}
