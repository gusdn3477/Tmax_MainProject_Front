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

export default function JobsDetailForm({data, data2}) {

  const gogo = useHistory();
  const {jobsNo} = useParams();

  const passListToWritten = (id) => {
    fetch(`/process-service/process/${jobsNo}`, { // body에 넣어야 함
      method: "GET"
    }).then(
      //예외처리 있으면 좋을 듯
      alert('마감 완료!')
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
    "해당 공고를 마감하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    passListToWritten
  );

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand />
                <h4>{data?.jobsTitle}</h4>
                <form className="pt-3" >
                  <div className="form-group">
                    {data?.jobsContext}
                  </div>
                  <div className="form-group">
                    채용 형태 : {data?.employType}
                  </div>
                  <div className="form-group">
                    고용 형태 : {data?.jobType}
                  </div>
                  <div className="form-group">
                    지원 자격 : {data?.jobQualify}
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
                  {data?.applyStart && data?.applyEnd ? 
                  <div className="form-group">
                    모집 기간 : {(data?.applyStart).substr(0,10)} ~ {(data?.applyEnd).substr(0,10)}
                  </div> : ''}

                  {localStorage.getItem('empNo') ? 
                  <Fragment>
                  <div className="mt-3">
                    <button type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={confirmDelete}>마감하기</button>
                  </div>
                  {/* <div className="mt-3">
                    <button type="button" className="btn btn-block btn-warning btn-lg font-weight-medium auth-form-btn">수정하기</button>
                  </div> */}
                  <div className="mt-3">
                    <button type="button" className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">삭제하기</button>
                  </div></Fragment> : ''}

                  {localStorage.getItem('userId') ? 
                  <Fragment>
                  <div className="mt-3">
                    <Link to={`/users/apply/${jobsNo}`}>
                      <button type="button" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">지원하기</button>
                    </Link>
                  </div></Fragment> : ''}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}