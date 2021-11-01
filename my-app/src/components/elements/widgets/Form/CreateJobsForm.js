// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import RegisterForm from '../../elements/widgets/Form/Register';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Brand from "../brand/Brand";

export default function CreateJobsForm() {

  const gogo = useHistory();

  const [values, setValues] = useState({
    jobsNo: '',
    corpNo: '',
    empNo: '',
    jobsTitle: '',
    jobsContext: '',
    recruitNum: '',
    favoriteLang: '',
    jobLocation: '',
    jobType: '',
    jobQualify: '',
    applyStart: '',
    applyEnd: '',
    employType: '',
    workDetail: '',
    intv1Start: '',
    intv1End: '',
    intv2Start: '',
    intv2End: '',

    writtenMultiple: '',
    intv1Multiple: '',
    intv2Multiple: '',
    intv2Pass: '',
  })

  const [guideTxts, setGuideTxts] = useState({
    userGuide: '최대 20자 까지 가능합니다.',
    emailGuide: '이메일 형식에 맞게 작성해 주세요.',
    pwdGuide: '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
    confirmPwdGuide: '한번더 입력해 주세요.',
    nameGuide: '',
    phoneGuide: '. 을 입력하지 말아 주세요.'
  });

  const [error, setError] = useState({
    userIdError: '',
    emailError: '',
    pwdError: '',
    confirmPwd: '',
    nameError: '',
    phoneError: ''
  })

  const isUserId = userId => {
    const userIdRegex = /^[a-z0-9_!@$%^&*-+=?"]{1,20}$/
    return userIdRegex.test(userId);
  }

  const isEmail = email => {
    const emailRegex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()¥[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };

  const isPwd = pass => {
    const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

    return pwdRegex.test(pass);
  }

  const isPhone = phone => {
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    return phoneRegex.test(phone)
  }

  const confirmPassword = (pass, confirmPass) => {
    return pass === confirmPass
  }

  const onTextCheck = () => {
    let userIdError = "";
    let emailError = "";
    let pwdError = "";
    let confirmPwd = "";
    let nameError = "";
    let phoneError = "";


    if (!isUserId(values.userId)) userIdError = "아이디 형식을 확인 해 주세요.( 한글 불가 )";
    if (!isEmail(values.email)) emailError = "email 형식이 아닙니다.";
    if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
    if (!confirmPassword(values.password, values.confirmPassword)) confirmPwd = "비밀번호가 일치하지 않습니다.";
    if (values.userId === values.password) pwdError = "아이디를 비밀번호로 사용 할 수 없습니다.";
    if (!isPhone(values.phone)) phoneError = "휴대폰 형식이 아닙니다.";

    if (values.name.length === 0) nameError = "이름을 입력해주세요.";

    //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
    setError({
      userIdError, emailError, pwdError, confirmPwd, nameError, phoneError
    })

    if (userIdError || emailError || pwdError || confirmPwd || nameError || phoneError) return false;
    return true;
  }

  const handleChangeForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handlePutUserLists = (e) => {
    //alert(usersDatas.length);
    //console.log(values);
    e.preventDefault();

    // const valid = onTextCheck();

    // if (!valid) console.error("retry");

    // else {

    fetch(`/job-service/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        corpNo:5,
        empNo: localStorage.getItem('empNo'),
        jobsTitle: values.jobsTitle,
        jobsContext: values.jobsContext,
        recruitNum: values.recruitNum,
        favoriteLang: values.favoriteLang,
        jobLocation: values.jobLocation,
        employType: values.employType,
        jobQualify: values.jobQualify,
        workDetail: values.workDetail,
        applyStart: values.applyStart,
        applyEnd: values.applyEnd,
        intv1Start: values.intv1Start,
        intv1End: values.intv1End,
        intv2Start: values.intv2Start,
        intv2End: values.intv2End,
        writtenMultiple: values.writtenMultiple,
        intv1Multiple: values.intv1Multiple,
        intv2Multiple: values.intv2Multiple
      }),
    }).
      then(
        alert("success"),
        gogo.push('/')
        //window.location.href = '/'
      )
    // }
  }
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand />
                <h4>공고 등록 페이지</h4>
                <h6 className="font-weight-light">공고를 등록해 보세요!</h6>
                <form className="pt-3" onSubmit={handlePutUserLists}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1"
                      name="jobsTitle"
                      value={values.jobsTitle}
                      onChange={handleChangeForm}
                      placeholder="공고명" />
                  </div>
                  <div className="form-group">
                    <textarea cols="30" style={{ height: "150px" }} className="form-control form-control-lg" id="exampleInputUsername1"
                      name="jobsContext"
                      value={values.jobsContext}
                      onChange={handleChangeForm}
                      placeholder="공고 내용"></textarea>
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="recruitNum"
                      value={values.recruitNum}
                      onChange={handleChangeForm}
                      placeholder="채용인원" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="jobType"
                      value={values.jobType}
                      onChange={handleChangeForm}
                      placeholder="고용 유형" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="employType"
                      value={values.employType}
                      onChange={handleChangeForm}
                      placeholder="고용 형태" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="jobQualify"
                      value={values.jobQualify}
                      onChange={handleChangeForm}
                      placeholder="지원자격" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="favoriteLang"
                      value={values.favoriteLang}
                      onChange={handleChangeForm}
                      placeholder="선호 언어" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="jobLocation"
                      value={values.jobLocation}
                      onChange={handleChangeForm}
                      placeholder="근무 지역" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="workDetail"
                      value={values.workDetail}
                      onChange={handleChangeForm}
                      placeholder="업무내용" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="applyStart"
                      value={values.applyStart}
                      onChange={handleChangeForm}
                      placeholder="지원시작일" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="applyEnd"
                      value={values.applyEnd}
                      onChange={handleChangeForm}
                      placeholder="지원마감일" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="intv1Start"
                      value={values.intv1Start}
                      onChange={handleChangeForm}
                      placeholder="1차 면접 시작일" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="intv1End"
                      value={values.intv1End}
                      onChange={handleChangeForm}
                      placeholder="1차 면접 마감일" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="intv2Start"
                      value={values.intv2Start}
                      onChange={handleChangeForm}
                      placeholder="2차 면접 시작일" />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputUsername1"
                      name="intv2End"
                      value={values.intv2End}
                      onChange={handleChangeForm}
                      placeholder="2차 면접 마감일" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                      name="writtenMultiple"
                      value={values.writtenMultiple}
                      onChange={handleChangeForm}
                      placeholder="필기 합격 배수" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                      name="intv1Multiple"
                      value={values.intv1Multiple}
                      onChange={handleChangeForm}
                      placeholder="1차 면접 합격 배수" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                      name="intv2Multiple"
                      value={values.intv2Multiple}
                      onChange={handleChangeForm}
                      placeholder="2차 면접 합격 배수" />
                  </div>

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