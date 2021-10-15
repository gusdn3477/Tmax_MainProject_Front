import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
export default function MyAccountChangeForm() {

    const [address, setAddress] = useState(''); // 주소
    const [addressDetail, setAddressDetail] = useState(''); // 상세주소
    const [isOpenPost, setIsOpenPost] = useState(false);

    const gogo = useHistory();
    const [usersDatas, setUsersDatas] = useState([]);
    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
        phone: '',
        name: '',
        address: '',
    })

    const [guideTxts, setGuideTxts] = useState({
        userGuide: '최대 20자 까지 가능합니다.',
        pwdGuide: '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
        confirmPwdGuide: '한번더 입력해 주세요.',
        nameGuide: '',
        phoneGuide: '. 을 입력하지 말아 주세요.'
    });

    const [error, setError] = useState({
        userIdError: '',
        pwdError: '',
        confirmPwd: '',
        nameError: '',
        phoneError: ''
    })

    const isUserId = userId => {
        const userIdRegex = /^[a-z0-9_!@$%^&*-+=?"]{1,20}$/
        return userIdRegex.test(userId);
    }

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
        if (!isPhone(values.phone)) phoneError = "휴대폰 형식이 아닙니다.";

        if (values.name.length === 0) nameError = "이름을 입력해주세요.";

        //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
        setError({
            pwdError, confirmPwd, nameError, phoneError
        })

        if (pwdError || confirmPwd || nameError || phoneError) return false;
        return true;
    }


    useEffect(() => {
        fetch(`/user-service/users/${localStorage.getItem('userId')}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUsersDatas(data);
                setValues(data);
                console.log(data);
            });
    }, []);

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

            fetch(`/user-service/users/${localStorage.getItem('userId')}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pwd: values.password,
                    name: values.name,
                    phone: values.phone,
                    address: values.address
                }),
            }).
                then(
                    alert("회원정보 수정 완료"),
                    gogo.push('/')
                )
        }
    }

    const deleteUser = () => {
        fetch(`/user-service/users/${localStorage.getItem('userId')}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).
            then(
                alert("탈퇴 성공!"),
                localStorage.clear(),
                gogo.push('/')
            )
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
                                <h4>Hello! let's get started</h4>
                                <h6 class="font-weight-light">Sign in to continue.</h6>
                                <form class="pt-3" onSubmit={handlePutUserLists}>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" name="email" value={values.email} onChange={handleChangeForm} />
                                    </div>
                                    {
                                        error.emailError
                                            ?
                                            <div style={{ color: "red", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{error.emailError}</div>
                                            :
                                            <div style={{ color: "gray", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{guideTxts.userGuide}</div>
                                    }
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChangeForm} />
                                    </div>
                                    {
                                        error.pwdError
                                            ?
                                            <div style={{ color: "red", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{error.pwdError}</div>
                                            :
                                            <div style={{ color: "gray", fontSize: "12px", margin: '-5px 0 10px 15px' }}>{guideTxts.pwdGuide}</div>
                                    }
                                    <div class="mt-3">
                                        <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                                    </div>
                                    <div class="my-2 d-flex justify-content-between align-items-center">
                                        <div class="form-check">
                                            <label class="form-check-label text-muted">
                                                <input type="checkbox" class="form-check-input" />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a href="#" class="auth-link text-black">Forgot password?</a>
                                    </div>
                                    <div class="mb-2">
                                        <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                                            <i class="ti-facebook mr-2"></i>Connect using facebook
                                        </button>
                                    </div>
                                    <div class="text-center mt-4 font-weight-light">
                                        지원자 계정으로 가입하고 싶으시다면 <Link to="/register-for-user" class="text-primary">Create</Link>
                                    </div>
                                    <div class="text-center mt-4 font-weight-light">
                                        인사담당자 계정으로 가입하고 싶으시다면 <Link to="/register" class="text-primary">Create</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="myaccount-area pb-80 pt-100">
        //     <div className="container">
        //         <div className="row">
        //             <div className="ml-auto mr-auto col-lg-9">
        //                 <div className="myaccount-wrapper">
        //                     <div className="accordion" id="accordionPanelsStayOpenExample">
        //                         <div className="accordion-item single-my-account mb-20 card">
        //                             <div className="panel-heading card-header" id="panelsStayOpen-headingOne">
        //                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        //                                     <h3 className="panel-title">회원정보 수정</h3>
        //                                 </button>
        //                             </div>
        //                             <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        //                             <div className="card-body">
        //                                 <div className="myaccount-info-wrapper">
        //                                 <form  onSubmit={handlePutUserLists}>
        //                                     <div className="account-info-wrapper">
        //                                         <h4>형식에 맞춰 작성해 주시면 됩니다.</h4>
        //                                     </div>
        //                                     <div className="row">
        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>Email</label>
        //                                                 <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>변경 불가 항목</div> 
        //                                                 <input 
        //                                                     type="email"
        //                                                     name="email"
        //                                                     value={usersDatas.email}
        //                                                     onChange={handleChangeForm}
        //                                                     readOnly
        //                                                 />
        //                                             </div>
        //                                         </div>


        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>Password</label>
        //                                                 <input 
        //                                                     type="password"
        //                                                     name="password"
        //                                                     value={values.password}
        //                                                     onChange={handleChangeForm}
        //                                                 />
        //                                             </div>
        //                                         </div>
        //                                         {
        //                                             error.pwdError 
        //                                                 ? 
        //                                                     <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.pwdError}</div>
        //                                                 :
        //                                                     <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.pwdGuide}</div>
        //                                         }

        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>Confirm Pass</label>
        //                                                 <input 
        //                                                     type="password"
        //                                                     name="confirmPassword"
        //                                                     value={values.confirmPassword}
        //                                                     onChange={handleChangeForm}
        //                                                 />
        //                                             </div>
        //                                         </div>

        //                                         {
        //                                             error.confirmPwd
        //                                                 ? 
        //                                                     <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.confirmPwd}</div>
        //                                                 :
        //                                                     <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.confirmPwdGuide}</div>
        //                                         }
        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>Name</label>
        //                                                 <input 
        //                                                     type="text"
        //                                                     name="name"
        //                                                     value={values.name}
        //                                                     onChange={handleChangeForm}
        //                                                 />
        //                                             </div>
        //                                         </div>
        //                                         {
        //                                             error.nameError 
        //                                                 ? 
        //                                                     <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.nameError}</div>
        //                                                 :
        //                                                     <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.nameGuide}</div>
        //                                         }
        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>Phone</label>
        //                                                 <input 
        //                                                     type="tel"
        //                                                     name="phone"
        //                                                     value={values.phone}
        //                                                     onChange={handleChangeForm}
        //                                                 />
        //                                             </div>
        //                                         </div>
        //                                         {
        //                                             error.phoneError
        //                                                 ? 
        //                                                     <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.phoneError}</div>
        //                                                 :
        //                                                     <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.phoneGuide}</div>
        //                                         }

        //                                         <div className="col-lg-12 col-md-12">
        //                                             <div className="billing-info">
        //                                                 <label>주소</label>
        //                                                 <input 
        //                                                     type="text"
        //                                                     name="address"
        //                                                     value={values.address}
        //                                                     onChange={handleChangeForm}
        //                                                 />
        //                                             </div>
        //                                         </div>
        //                                     </div>

        //         <div className="billing-back-btn">
        //             <div className="billing-btn">
        //                 <button type="submit">회원정보 수정</button>
        //             </div>
        //         </div>

        //         <div className="billing-back-btn">
        //             <div className="billing-btn">
        //                 <button type="submit" onClick={deleteUser}>회원탈퇴</button>
        //             </div>
        //         </div>
        //         </form>
        //     </div>
        // </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );

}