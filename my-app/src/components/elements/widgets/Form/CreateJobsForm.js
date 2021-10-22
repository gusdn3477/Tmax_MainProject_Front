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

  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소
  const [isOpenPost, setIsOpenPost] = useState(false);

  const gogo = useHistory();

  const [usersDatas, setUsersDatas] = useState([]);

  const [values, setValues] = useState({
    userId: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    name: '',
    address: '',
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

    const valid = onTextCheck();

    if (!valid) console.error("retry");

    else {

      fetch(`/user-service/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: usersDatas.length + 1,
          userId: values.userId,
          pwd: values.password,
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address
        }),
      }).
        then(
          alert("success"),
          gogo.push('/')
          //window.location.href = '/'

        )
    }
  }
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <Brand/>
                <h4>공고 등록 페이지</h4>
                <h6 className="font-weight-light">공고를 등록해 보세요!</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="공고명" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="기업명" />
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>기업 코드</option>
                      {/* <option>Country</option> */}
                      <option>1001</option>
                      <option>1002</option>
                      <option>1003</option>
                      <option>1004</option>
                      <option>1005</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea cols="30" style={{height:"150px"}} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="공고 내용"></textarea>
                    {/* <input type="text" style={{height:"150px"}} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="공고 내용" /> */}
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>채용 유형</option>
                      {/* <option>Country</option> */}
                      <option>무관</option>
                      <option>신입</option>
                      <option>경력</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>고용 형태</option>
                      {/* <option>Country</option> */}
                      <option>정규직</option>
                      <option>계약직</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="채용 인원" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="필기 합격 배수" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="1차 면접 합격 배수" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="2차 면접 합격 배수" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="우대사항" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="지원자격" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="주요 업무" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="근무 지역" />
                  </div>
                  <div className="mb-4">
                    {/* <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        I agree to all Terms & Conditions
                      </label>
                    </div> */}
                  </div>
                  <div className="mt-3">
                    <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">등록하기</a>
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