// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import LoginForm from '../../elements/widgets/Form/Login';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {

  const gogo = useHistory();

  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })

  const [guideTxts, setGuideTxts] = useState({
    pwdGuide: '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
    confirmpwdGuide: '같은 비밀번호를 입력해 주세요'
  });

  const [error, setError] = useState({
    pwdError: '',
    pwdError2: ''
  })

  const isPwd = pass => {
    const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

    return pwdRegex.test(pass);
  }

  const onTextCheck = () => {
    let pwdError = "";
    let pwdError2 = "";

    if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
    if (values.password !== values.confirm_password) pwdError2 = "비밀번호가 다릅니다.";
    setError({
      pwdError, pwdError2
    })

    if (pwdError) return false;
    return true;
  }

  const handleChangeForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handlePutUserLists = (e) => {
    e.preventDefault();

    const valid = onTextCheck();
    if (!valid) console.error("retry");

    else {
      fetch(`/user-service/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      }) // res.json() 해 줘야 되는지 생각..
        .then((res) => {
          if (res.headers.get('token')) {
            localStorage.setItem("token", res.headers.get('token'));
            localStorage.setItem("userId", res.headers.get('userId'));
            localStorage.setItem("email", values.email);
            gogo.push("/");
          }
          else {
            alert("로그인 정보를 확인하세요.");
          }
        })
    }
  }

  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo">
                  <img src="../../images/logo.svg" alt="logo" />
                </div>
                <h4>비밀번호 확인</h4>
                <h6 class="font-weight-light">비밀번호가 일치해야 회원정보 수정 페이지로 넘어갈 수 있습니다.</h6>
                <form class="pt-3" onSubmit={handlePutUserLists}>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="비밀번호" 
                    name="password"
                    value={values.password}
                    onChange={handleChangeForm}/>
                  </div>
                    {
                        error.pwdError 
                            ? 
                                <div style={{ color: "red", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{error.pwdError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{guideTxts.pwdGuide}</div>
                    }
                    <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="비밀번호 확인" 
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChangeForm}/>
                  </div>
                    {
                        error.pwdError2 
                            ? 
                                <div style={{ color: "red", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{error.pwdError2}</div>
                            :
                                <div style={{ color: "gray", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{guideTxts.confirmpwdGuide}</div>
                    }
                  <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">회원정보 수정</button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <a href="#" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="ti-facebook mr-2"></i>Connect using facebook
                    </button>
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