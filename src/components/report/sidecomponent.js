import React, { Component } from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./reportCSS.css";


const Sidecomponent = ({ obj, checked }) =>
{

    

    return(<div  className={checked[0] === checked[1] ? ('mt-2 pb-1 pb-1 row rounded shadow-sm clinet-back') : "mt-2 pb-1 pb-1 row rounded shadow-sm clinet-hover" } > 
        
    <div className="m-2 col-3 client-pic">
        <Avatar  alt={obj['name']} src={obj['imageURI']} style={{ height: '40px', width: '40px', margin: '15%' }} />

    </div>
    <div className="col-8 mt-4 pt-1 client-Name">
        <h6>{obj['name']}</h6>
    </div>

</div>)
}

export default Sidecomponent;