import React, { Component } from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import { MoreVert } from '@material-ui/icons';
import "./reportCSS.css";


const Sidecomponent = ({ obj, checked }) =>
{

    

    return(<div  className={checked[0] === checked[1] ? ('mt-2 ml-1 mr-1 pb-1  row rounded shadow-sm clinet-back') : "mt-2 ml-1 mr-1 pb-1  row rounded shadow-sm clinet-hover" }  > 
        
    <div className="m-2 col-sm-3 col-xs-3  col-md-3 col-lg-3 client-pic">
        <Avatar  alt={obj['personal']['name']} src={obj['personal']['imageURI']} style={{ height: '50px', width: '50px', margin: '15%' }} />

    </div>
    <div className="offset-1 col-sm-7 col-xs-12  col-md-7 col-lg-7 mt-4 pt-1 client-Name">
        {/* <h6>{obj['personal']['name']}</h6> */}
        <span style={{ fontSize : '100%' }} > {obj['personal']['name']} </span>
    </div>

</div>)
}

export default Sidecomponent;