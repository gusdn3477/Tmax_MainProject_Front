// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import RegisterForm from '../../elements/widgets/Form/Register';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Brand from "../brand/Brand";

export default function EditHR() {

  const gogo = useHistory();

  const [values, setValues] = useState({
    empNo: '',
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const [guideTxts, setGuideTxts] = useState({
    pwdGuide: '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
    confirmPwdGuide: '한번더 입력해 주세요.',
    nameGuide: '',
    phoneGuide: '. 을 입력하지 말아 주세요.'
  });

  const [error, setError] = useState({
    pwdError: '',
    confirmPwd: '',
    nameError: '',
    phoneError: ''
  })

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
    let pwdError = "";
    let confirmPwd = "";
    let nameError = "";
    let phoneError = "";

    if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
    if (!confirmPassword(values.password, values.confirmPassword)) confirmPwd = "비밀번호가 일치하지 않습니다.";
    if (values.userId === values.password) pwdError = "아이디를 비밀번호로 사용 할 수 없습니다.";
    if (!isPhone(values.phone)) phoneError = "휴대폰 형식이 아닙니다.";

    if (values.name.length === 0) nameError = "이름을 입력해주세요.";

    //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
    setError({
      pwdError, confirmPwd, nameError, phoneError
    })

    if (pwdError || confirmPwd || nameError || phoneError) return false;
    return true;
  }

  const handleChangeForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const putHR = (e) => {

    e.preventDefault();
    const valid = onTextCheck();

    if (!valid) {
      console.error("retry");
      alert("정확한 정보를 입력해 주세요");
  }
    else {
      fetch(`/hr-service/hr`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          empNo: localStorage.getItem('empNo'),
          pwd: values.password,
          name: values.name,
          email: values.email
        }),
      }).then(
          alert("success"),
          gogo.push('/') // 아래꺼 써야 할수도
          //window.location.href = '/'

        )
    }
  }

  const deleteHR = (e) => {
    // e.preventDefault();
    fetch(`/hr-service/hr`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        empNo: localStorage.getItem('empNo'), // 토큰에서 가지고 있어야 함. 유저 조회 기능 넣어서 가져온 뒤 비밀번호 비교 후에 짜야 할 듯
        password: values.password
      }),
    }).
      then(
        alert("탈퇴 성공!"),
        localStorage.clear(),
        gogo.push('/')
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
    "삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm,
    deleteHR
  );

  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand />
                <h4>인사담당자 정보 수정</h4>
                {/* <h6 class="font-weight-light">공고를 등록해 보세요!</h6> */}
                <form class="pt-3" onSubmit={putHR}>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputUsername1" 
                    name="email" 
                    value={values.email}
                    onChange={handleChangeForm}
                    placeholder="이메일" readOnly />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" 
                    name="name" 
                    value={values.name}
                    onChange={handleChangeForm}
                    placeholder="이름" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputEmail1" 
                    name="password"
                    value={values.password}
                    onChange={handleChangeForm}
                    placeholder="비밀번호" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputEmail1" 
                    name="confirmPassword" 
                    value={values.confirmPassword}
                    onChange={handleChangeForm}
                    placeholder="비밀번호 확인" />
                  </div>
                  <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">수정하기</button>
                  </div>
                  <div class="mt-3">
                    <button type="button" class="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn" onClick={confirmDelete}>탈퇴하기</button>
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