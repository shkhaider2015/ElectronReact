import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useBarcode } from "react-barcodes";
import CardFront from "../../RawData/idcard1.svg";
import CardBack from "../../RawData/idcard2.svg";
import { IconButton } from '@material-ui/core';
import { KeyboardBackspace } from '@material-ui/icons';
import DF from "../../RawData/default.jpg";




const IdCardGenrator = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { obj } = state

  const { inputRef } = useBarcode({
    value: obj['personal']['id'],
    options: {
      displayValue: false,
      background : '#FFFFFF00'
    }

  })




  return <div className="container" >

    <div className="row" >

      <div className="col-12" >
        <IconButton
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspace fontSize="large" color="primary" />
        </IconButton>
      </div>

    </div>

    <div className="row mt-5" >

      <div className="col-6" >

        {/* <img alt="uuy" src={CardFront} /> */}
        <div style={{
          width: "450px",
          height: "650px",
          backgroundImage: `url(${CardFront})`
        }} >

          <img alt="jhj" src={obj['personal']['imageURI'] ? obj['personal']['imageURI'] : DF } style={{
            width: '153px',
            height: '155px',
            marginTop: '192px',
            marginLeft: '149px',
            marginRight: 'auto'
          }} />

          <div
            style={{
              marginLeft: '180px',
              marginTop: '40px',
              fontWeight: 'bold'
            }}
          > {obj['personal']['name']} </div>

          <div
            style={{
              marginLeft: '180px',
              marginTop: '23px',
              fontWeight: 'bold'
            }}
          > {obj['personal']['name']} </div>

          <div style={{
            width : '170px',
            display : 'block',
            marginTop : '50px',
            marginLeft : 'auto',
            marginRight : 'auto'
          }} >
            <canvas ref={inputRef} style={{ width : '100%' }} />
          </div>

        </div>

      </div>

      <div className="col-6" >
        {/* <img alt="uuy" src={CardBack} /> */}

        <div style={{
          width: "450px",
          height: "650px",
          backgroundImage: `url(${CardBack})`
        }} >


        </div>
      </div>

    </div>
  </div>

}


export default IdCardGenrator;