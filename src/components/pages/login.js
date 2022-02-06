import React, { useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { navigate } from '@reach/router';
import isEmpty from "../../validation/isEmpty";
import { setCurrentUserAction } from '../../store/actions/thunks';
import { useDispatch } from 'react-redux';
import api from '../../core/api';
import { Axios } from '../../core/axios';
import {NotificationManager} from 'react-notifications';
import $ from 'jquery';
import PageBanner from "../components/PageBanner";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar {
    position: relative;
  }
  header#myHeader.navbar.white {
    background: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }

  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }

  .mainbreadcumb {
    background: -webkit-gradient(linear,left bottom,left top,from(#0062ff),to(#081587)) !important;
    background: linear-gradient(
    0deg
    ,#0062ff,#081587);
      position: relative;
      z-index: 1;
      padding-top: 70px;
      padding-bottom: 120px;
  }
  .page-title-content{
    height : 0px;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleChangeEdit = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (isEmpty(user.email)) { 
      $('#email').focus();
      NotificationManager.warning("Please input your Email address.", "Warning");
      return; 
    }
    if (/\S+@\S+\.\S+/.test(user.email) === false) {
      $('#email').focus();
      NotificationManager.warning("Please input a valid Email address", "Warning"); 
      return; 
    }
    if (isEmpty(user.password)) { 
      $('#password').focus();
      NotificationManager.warning("Please input your password.", "Warning");
      return; 
    }

    await Axios.post(`${api.baseUrl}${api.doAuth}`,
      { "identifier": user.email, "password": user.password }, {}
    ).then(response => 
    {
      localStorage.setItem("jwtToken", response.data.jwt);
      dispatch(setCurrentUserAction(response.data.user));
      NotificationManager.success("Successfully sign in", "Success");
      navigate('/home');
    }).catch(error => {
        if (error && error.response && error.response.data && error.response.data.message)
          NotificationManager.error(error.response.data.message, 'Error');
        else
          NotificationManager.error('Internal Server Error', 'Error');
    })
  }

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                <div className="spacer-10"></div>
                <h1>Create, sell or collect digital items. Please sign in and engoy.</h1>
                {/* <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p> */}
              </div>
              <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                <div className="box-login">
                  <h3 className="mb10">Sign In</h3>
                  <p>Login using an existing account or create a new account <span><a href="/register">here</a></span>.</p>
                  <form name="contactForm" id='contact_form' className="form-border" action='#'>

                    <div className="field-set">
                      <input type='email' name='email' id='email' onChange={(ev) => handleChangeEdit(ev)} className="form-control" placeholder="email" />
                    </div>

                    <div className="field-set">
                      <input type='password' name='password' id='password' className="form-control" placeholder="password" 
                        onChange={(ev) => handleChangeEdit(ev)} 
                        onKeyUp={(ev) => { if (ev.keyCode === 13) handleSubmit(ev); }}
                      />
                    </div>

                    <div className="field-set">
                      <input type='button' id='send_message' onClick={(ev) => handleSubmit(ev)} value="Sign in" className="btn btn-main btn-fullwidth color-2" />
                    </div>

                    <div className="clearfix"></div>

                    {/* <div className="spacer-single"></div>
                    <ul className="list s3">
                      <li>Login with:</li>
                      <li><span >Facebook</span></li>
                      <li><span >Google</span></li>
                    </ul> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default Login;
