// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import RegisterForm from '../../elements/widgets/Form/Register';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Brand from "../brand/Brand";

export default function JobsDetailForm({data}) {

  // const [values, setValues] = useState({
  //   jobsNo: '',
  //   corpNo: '',
  //   empNo: '',
  //   jobsTitle: '',
  //   jobsContext: '',
  //   recruitNum: '',
  //   favoriteLang: '',
  //   jobLocation: '',
  //   jobType: '',
  //   jobQualify: '',
  //   applyStart: '',
  //   employType: '',
  //   workDetail: '',
  //   applyEnd: '',
  //   intv1Start: '',
  //   intv1End: '',
  //   intv2Start: '',
  //   intv2End: '',

  //   writtenMultiple: '',
  //   writtenPass: '',
  //   intv1Multiple: '',
  //   intv1Pass: '',
  //   intv2Multiple: '',
  //   intv2Pass: '',
  // })

  // const handlePutUserLists = () => {
  //   //alert(usersDatas.length);
  //   //console.log(values);

  //   fetch(`/user-service/users`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: values.userId,
  //       pwd: values.password,
  //       name: values.name,
  //       email: values.email,
  //       phone: values.phone,
  //       address: values.address
  //     }),
  //   }).
  //     then(
  //       alert("success"),
  //       gogo.push('/')
  //       //window.location.href = '/'

  //     )
  // }
  
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand />
                <h4>{data.jobsTitle}</h4>
                <form className="pt-3" >
                  <div className="form-group">
                    {data.jobsContext}
                  </div>
                  <div className="form-group">
                    고용 형태 : {data.jobType}
                  </div>
                  <div className="form-group">
                    지원 자격 : {data.jobQualify}
                  </div>
                  <div className="form-group">
                    채용인원 : {data.recruitNum}명
                  </div>
                  <div className="form-group">
                    우대언어 : {data.favoriteLang}
                  </div>
                  <div className="form-group">
                    근무지역 : {data.jobLocation}
                  </div>
                  {data.applyStart && data.applyEnd ? 
                  <div className="form-group">
                    지원 날짜 : {(data.applyStart).substr(0,10)} ~ {(data.applyEnd).substr(0,10)}
                  </div> : ''}

                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">등록하기</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}