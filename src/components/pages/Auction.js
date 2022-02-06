import React from 'react';
import ColumnAuctionRedux from '../components/ColumnAuctionRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import PageBanner from '../components/PageBanner';

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

  .page-title-area {
    background: -webkit-gradient(linear, left bottom, left top, from(#0062ff), to(#081587));
    background: linear-gradient(0deg, #0062ff, #081587);
    position: relative;
    z-index: 1;
    padding-top: 120px;
    padding-bottom: 120px;
  }
  
  .page-title-content {
    text-align: center;
  }
  
  .page-title-content h1 {
    font-size: 40px;
    margin-bottom: 0;
    color: var(--whiteColor);
  }
  
  .page-title-content p {
    color: var(--whiteColor);
    margin-top: 15px;
    font-size: 18px;
    opacity: .8;
  }
  
  .page-title-content .default-btn {
    margin-top: 15px;
    color: var(--whiteColor);
    background-color: var(--optionalColor);
  }
  
  .page-title-content .default-btn:hover {
    background-color: var(--whiteColor);
    color: var(--blackColor);
  }
`;

const explore= () => (
<div>
<GlobalStyles/>
<PageBanner pageTitle='Live Auction' />

  <section className='container'>
    <ColumnAuctionRedux  authorId={""} situation={"minted"} status={"on_auction"} limit={20} />
  </section>

  <Footer />
</div>

);
export default explore;