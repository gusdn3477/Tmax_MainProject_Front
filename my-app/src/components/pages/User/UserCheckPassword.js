// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';
// import Bread from '../../elements/ui/Bread';
// import LoginForm from '../../elements/widgets/Form/Login';
// import { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../../elements/ui/Banner";
import UserCheckPasswordForm from "../../elements/widgets/Form/UserCheckPasswordForm";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function UserCheckPassword() {

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
                <UserCheckPasswordForm/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}