import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../../assets/images/faces/face28.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from 'react-router';

export default function NavProfile() {

  const gogo = useHistory();

  const handlePutUserLists = (e) => {

    e.preventDefault();

    fetch(`/hr-service/hr/findpwd`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).
      then(
        // alert("success"),
        // gogo.push('/')
        localStorage.clear(),
        window.location.href = '/'
      )

  }

  return (
    <li className="nav-item nav-profile dropdown">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
        <img src={Img} alt="profile" />
      </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
        {/* 누구냐에 따라 다름 */}
        <Link className="dropdown-item" to="/check-password">
          <i className="ti-settings text-primary"></i>
          My page
        </Link>
        <a className="dropdown-item" onClick={handlePutUserLists}>
          <i className="ti-power-off text-primary"></i>
          Logout
        </a>
      </div>
    </li>
  );
}