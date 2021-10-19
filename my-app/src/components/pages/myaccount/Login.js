// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import LoginForm from '../../elements/widgets/Form/Login';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../../elements/ui/Banner";
import Brand from "../../elements/widgets/brand/Brand";
import CheckPasswordForm from "../../elements/widgets/Form/CheckPasswordForm";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

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
    <div id="wrap">
      <Header />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          {/* Banner는 왼쪽에 있는 리스트 형식의 메뉴 */}
          <Banner />
          {/* 여기부터 프사 누르면 나오는 메뉴 */}
          <div className="main-panel">
            <div className="content-wrapper">
                <CheckPasswordForm/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}