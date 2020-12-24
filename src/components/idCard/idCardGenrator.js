import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import  QR from "react-qr-code";



const downloadQR = () => {
    const svg = document.getElementById("qrcode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
  
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
  
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };
  
const IdCardGenrator = () =>
{
    const navigate = useNavigate();
    const { state } = useLocation();
    const { obj } = state

    return(
        <div style={{ marginLeft : '2%' }} >
            <h1>Id Card genrator</h1>
            <h3>Check name {obj['personal']['name']} </h3>
            <QR value={obj} fgColor="#eb4034" />
            <button onClick={() => downloadQR() } >Doenload</button>

        </div>
    )
}


export default IdCardGenrator;