import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useBarcode } from "react-barcodes";


const IdCardGenrator = () =>
{
    const navigate = useNavigate();
    const { state } = useLocation();
    const { obj } = state

    const { inputRef } = useBarcode({
      value : obj['personal']['id'],
      options : {
        displayValue : true
      }

    })




    return(
        <div style={{ marginLeft : '2%' }} >

            <h3 onClick={() => navigate(-1)} >Click Here To go back</h3>
            <h1>Id Card genrator</h1>
            <h3>Check name {obj['personal']['name']} </h3>
            <canvas ref={inputRef} />
            
        </div>
    )
}


export default IdCardGenrator;