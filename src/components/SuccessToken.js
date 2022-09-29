import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from '@mui/material';
import { ComponentToPrint } from './ComponentToPrint';
import './SuccessToken.css'

const SuccessToken = () => {
  const componentRef = useRef();

  return (
    <div className='success'>
      
 <img src="assets/successful.PNG"/>
        
              
      <ReactToPrint
        trigger={() =>  <Button id="receiptbtn" variant="outlined">Download Receipt</Button>}
        content={() => componentRef.current}
      />
      <div style={{display:'none'}}>
      <ComponentToPrint  ref={componentRef} />
      </div>
    </div>
  );
};

export default SuccessToken;


