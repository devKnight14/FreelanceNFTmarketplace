import React from 'react';
import Particle from '../components/Particle';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import ColumnNewRedux from '../components/ColumnNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import {Link} from "@reach/router";
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { useSelector } from "react-redux"; 
import * as selectors from '../../store/selectors';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`
  .page-title-area
  {
    background: -webkit-gradient(linear,left bottom,left top,from(#0062ff),to(#081587));
    background: linear-gradient(
    0deg
    ,#0062ff,#081587);
      position: relative;
      z-index: 1;
      padding-top: 120px;
      padding-bottom: 120px;
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
  .navbar{
    background: #fff;
  }

`;

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const Homeone= () => {
  
  const isAuthorized = useSelector(selectors.isAuthorized);


  return(
  <div>
     <GlobalStyles />

    <div className='page-title-area'>
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-3">
            <Particle />
              <div className="spacer-single"></div>
              <div className="spacer-double"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">Create, sell or collect digital items.</h1>
              </Reveal>
              {/* <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead col-white">
              This is the previre website for you, I will update it following your requirements.
              </p>
              </Reveal> */}
              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
              { (isAuthorized === true) ? 
                <span className="btn-main lead"><NavLink to="/explore" >Explore</NavLink></span> 
                :
                <div className="row">
                  <span className="btn-main lead col-md-2"><NavLink to="/login" >Sign In</NavLink></span>                   
                  &nbsp;&nbsp;&nbsp;
                  <span className="btn-main lead col-md-2"><NavLink to="/register" >Sign Up</NavLink></span>
                </div>
              }
              <div className="mb-sm-30"></div>
              </Reveal>
          </div>
        </div>
    </div>
      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Popular Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        
        <ColumnNewRedux limit={8} />
                
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux authorId={""} limit={10}/>
          </div>
        </div>
      </section>

      <section className='container-fluid bg-gray'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Create and sell your NFTs</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <FeatureBox/>
        </div>
      </section>

    <Footer />

  </div>
);
  }

export default Homeone;