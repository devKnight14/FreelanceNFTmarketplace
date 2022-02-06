import React, { memo, useState } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Artist_Card = styled.div`
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
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


//react functional component
const ArtistCard = ({src_img, ArtistName, Ability}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <>
        <Artist_Card />
          <div className='single-advisor-box'>
            <div className='image'>
              <img src={src_img} alt='image' onClick={ () => handleClickOpen()} />
            </div>
            <div className='content'>
              <h3>{ArtistName}</h3>
              <span>{Ability}</span>
            </div>
          </div> 
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`You can hire ${Ability}.`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you hire {ArtistName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Hire</Button>
        </DialogActions>
      </Dialog>
      </>            
    );
};
 
export default memo(ArtistCard);