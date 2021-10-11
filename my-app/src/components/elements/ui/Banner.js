import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Banner(){

    return(
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="icon-layout menu-icon"></i>
            <span className="menu-title"> UI Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="/buttons.html">Buttons</Link></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i className="icon-columns menu-icon"></i>
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i className="icon-bar-graph menu-icon"></i>
            <span className="menu-title">Charts</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
            <i className="icon-grid-2 menu-icon"></i>
            <span className="menu-title">Tables</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i className="icon-contract menu-icon"></i>
            <span className="menu-title">Icons</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
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
          <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
            <i className="icon-ban menu-icon"></i>
            <span className="menu-title">Error pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="error">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/documentation/documentation.html">
            <i className="icon-paper menu-icon"></i>
            <span className="menu-title">Documentation</span>
          </a>
        </li>
      </ul>
    </nav>

    );
}