import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Banner() {

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{width:'300px'}}>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#account-control" aria-expanded="false" aria-controls="account-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">계정관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="account-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/hr-manage">인사 담당자 관리</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/hr-create">인사 담당자 추가</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#jobs-control" aria-expanded="false" aria-controls="jobs-control">
            <i className="icon-paper menu-icon"></i>
            <span className="menu-title">공고관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="jobs-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/jobs">공고 목록 조회</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/jobs-create">공고 생성</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#process-control" aria-expanded="false" aria-controls="process-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">필기전형관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="process-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/buttons">필기 전형 채점</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">필기 전형 통계</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#interview-control" aria-expanded="false" aria-controls="interview-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">면접전형관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="interview-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/buttons">면접 담당자 배정</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">면접 점수 등록</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">면접 전형 통계</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#interviewee-control" aria-expanded="false" aria-controls="interviewee-control">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">지원자관리(인사담당자)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="interviewee-control">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/buttons">나의 면접</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">지원자 통계</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#jobs-find" aria-expanded="false" aria-controls="jobs-find">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">공고보기(지원자 관점)</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="jobs-find">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/jobs">공고목록</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">지원자 통계</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#mypage" aria-expanded="false" aria-controls="mypage">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title">마이페이지</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="mypage">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" to="/check-password">내 정보 수정</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">나의 지원 현황(사용자 시점)</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/buttons">지원자 통계(인사담당자 시점)</Link></li>
            </ul>
          </div>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i className="icon-columns menu-icon"></i>
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><Link className="nav-link" href="/basic_elements">Basic Elements</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i className="icon-bar-graph menu-icon"></i>
            <span className="menu-title">Charts</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" href="chartjs">ChartJs</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
            <i className="icon-grid-2 menu-icon"></i>
            <span className="menu-title">Tables</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" href="basic-table">Basic table</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i className="icon-contract menu-icon"></i>
            <span className="menu-title">Icons</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" href="mdi">Mdi icons</Link></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
            <i className="icon-head menu-icon"></i>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <Link to="login"><li className="nav-item"><span className="nav-link" > Login </span></li></Link>
              <Link to="register"><li className="nav-item"> <span className="nav-link"> Register </span></li></Link>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
            <i className="icon-ban menu-icon"></i>
            <span className="menu-title">Error pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="error">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="error-404"> 404 </a></li>
              <li className="nav-item"> <a className="nav-link" href="error-500"> 500 </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="documentation">
            <i className="icon-paper menu-icon"></i>
            <span className="menu-title">Documentation</span>
          </a>
        </li> */}
      </ul>
      {/* 부트스트랩 5는 되는데 4는 토글이 안됨. */}
    </nav>



  );
}