import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useBarcode } from "react-barcodes";
import CardFront from "../../RawData/idcard1.svg";
import CardBack from "../../RawData/idcard2.svg";
import { Button, IconButton } from '@material-ui/core';
import { KeyboardBackspace } from '@material-ui/icons';
import DefaultUser from '../../RawData/defaultuser.png';
import CardPrintBox from "./cardPrintBox";
import { useReactToPrint } from 'react-to-print';




const IdCardGenrator = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { obj } = state

  const [print, setPrint] = React.useState(false);
  const componentRef = React.useRef()

  const { inputRef } = useBarcode({
    value: obj['personal']['id'],
    options: {
      displayValue: false,
      background: '#FFFFFF'
    }

  })

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setPrint(false)
  })

  const handlePrintButton = () =>
  {
    setPrint(true)
  }



  return <div >

<div style={{ display : 'none' }} >
      <CardPrintBox ref={componentRef} obj={obj} handlePrint={handlePrint} print={print} />
</div>


    <div style={{ marginLeft: '3%', marginTop: '2%' }} >
      <IconButton
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspace fontSize="large" color="primary" />
      </IconButton>
    </div>



    <div className="container" >
      <div className="row mt-3" >

        <div className="offset-1 col-5" >

          {/* <img alt="uuy" src={CardFront} /> */}
          <div style={{
            width: "450px",
            height: "650px",
            backgroundImage: `url(${CardFront})`
          }} >

            <img alt="jhj" src={obj['personal']['imageURI'] ? obj['personal']['imageURI'] : DefaultUser} style={{
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
              width: '170px',
              display: 'block',
              marginTop: '50px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} >
              <canvas ref={inputRef} style={{ width: '100%' }} />
            </div>

          </div>

        </div>

        <div className="col-5" >
          {/* <img alt="uuy" src={CardBack} /> */}

          <div style={{
            width: "450px",
            height: "650px",
            padding: '1px',
            backgroundImage: `url(${CardBack})`
          }} >

            {/* <div style={{
      marginLeft: '185px',
      marginRight: '40px',
      marginTop: '530px',
      fontWeight: 'bold'
    }} >
      haider chali pathan colony
    </div> */}

            {/* <div style={{
      marginLeft: '80px',
      marginRight: '40px',
      marginTop: '10px',
      fontWeight: 'bold'
    }} >
      haider chali pathan colony manghopir road banaras
    </div> */}

            {
              obj['personal']['address'].toString().length <= 25
                ? <div style={{
                  marginLeft: '185px',
                  marginRight: '40px',
                  marginTop: '530px',
                  fontWeight: 'bold'
                }} >
                  {obj['personal']['address']}
                </div>
                : <div>
                  <div style={{
                    marginLeft: '185px',
                    marginRight: '40px',
                    marginTop: '530px',
                    fontWeight: 'bold'
                  }} >
                    {obj['personal']['address'].toString().slice(0, 25)}
                  </div>

                  <div style={{
                    marginLeft: '80px',
                    marginRight: '40px',
                    marginTop: '10px',
                    fontWeight: 'bold'
                  }} >
                    {obj['personal']['address'].toString().slice(25, obj['personal']['address'].toString().length)}
                  </div>
                </div>
            }


          </div>
        </div>

      </div>
      <div className="row mt-5" >
            <div className="offset-3 col-6 pl-5 pr-5 " >
              <Button variant="contained" color="primary" disabled={print} style={{ width : '100%' }} onClick={handlePrintButton} >
                Print Card 
              </Button>
            </div>
      </div>
    </div>

  </div>

}


export default IdCardGenrator;