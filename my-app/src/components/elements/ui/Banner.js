import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from '../widgets/BannerMenu/Dashboard';
import Jobs from '../widgets/BannerMenu/Jobs';
import Written from '../widgets/BannerMenu/Written';
import Interview from '../widgets/BannerMenu/Interview';
import HRAccount from '../widgets/BannerMenu/HRAccount';
import FindJobs from '../widgets/BannerMenu/FindJobs';

export default function Banner() {

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ width: '300px' }}>
      <ul className="nav">
        <Dashboard />
        <HRAccount />
        <Jobs />
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#process-control" aria-expanded="false" aria-controls="process-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">전형관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="process-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/process/written">필기 전형</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/process/interview">면접 전형</Link></li>
            </ul>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#interviewee-control" aria-expanded="false" aria-controls="interviewee-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">지원자관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="interviewee-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/hr/interviewlist">면접자 리스트</Link></li>
            </ul>
          </div>
        </li> */}
        <FindJobs />
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#mypage" aria-expanded="false" aria-controls="mypage">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">마이페이지</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="mypage">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/hr/check-password">내 정보 수정(HR)</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/user/check-password">내 정보 수정(사용자)</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/user/mylist">나의 지원 현황(사용자)</Link></li>
            </ul>
          </div>
        </li>
      </ul>
      {/* 부트스트랩 5는 되는데 4는 토글이 안됨. */}
    </nav>



  );
}