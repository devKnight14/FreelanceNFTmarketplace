import { createGlobalStyle } from 'styled-components';
import ArtistCard from '../components/ArtistCard';
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


  .single-advisor-box {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .single-advisor-box .image {
    -webkit-transition: var(--transition);
    transition: var(--transition);
    border: 1px solid #eeeeee;
    overflow: hidden;
    padding: 20px;
  }
  
  .single-advisor-box >.image > img {
    -webkit-transition: var(--transition);
    transition: var(--transition);
    width: 100%;
    height: 100%;
  }
  
  .single-advisor-box .content {
    margin-top: 25px;
  }
  
  .single-advisor-box .content h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .single-advisor-box .content span {
    display: block;
    color: var(--mainColor);
  }
  
  .single-advisor-box:hover .image {
    border-color: transparent;
  }
  
  .single-advisor-box:hover .image img {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
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


const Artist = () => {
  return (
    <>
      <GlobalStyles/>
      <PageBanner pageTitle='Famous Artist' />

      <div className='advisor-area pt-100 pb-70'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img1.jpg"} ArtistName={"Alika Maya"} Ability={"Natural artist"}/>
            </div> 
            
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img2.jpg"} ArtistName={"Jason Smith"} Ability={"Cryptonet artist"}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img3.jpg"} ArtistName={"Ruby Taylor"} Ability={"Ape Artist"}/>  
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img4.jpg"} ArtistName={"Eva Anderson"} Ability={"Duck Artist"}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img5.jpg"} ArtistName={"Liam Noah"} Ability={"Cat Artist"}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img6.jpg"} ArtistName={"William Ava"} Ability={"Sheep Artist"}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img7.jpg"} ArtistName={"Lucas Amelia"} Ability={"Robot Artist"}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <ArtistCard src_img={"/images/advisor/advisor-img8.jpg"} ArtistName={"Ethan Evelyn"} Ability={"Monster Artist"}/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Artist;
