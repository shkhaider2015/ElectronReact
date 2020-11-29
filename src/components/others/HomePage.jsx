import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab, colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";
import React , {useState} from "react";
import RefrenceDate from "./refrenceDate";
import PersonIcon from '@material-ui/icons/Person';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';
import zainlogo from '../../RawData/Mian Asso-01.png'
import logoCreate from '../../RawData/logo/Create.png'
import logoClients from '../../RawData/logo/Clients-01.png'
import logoQUERY from '../../RawData/logo/QUERY.png'
import logoReport from '../../RawData/logo/Report.png'
import logoScan from '../../RawData/logo/SCAN.png'


const useStyle = makeStyles(
  (theme)=> ({

    item : {
        borderRadius:"20%",
        transition: 'transform .3s',
        '&:hover' : {
            transform : 'scale(1.2)',

        }
    }

  })

  
)


function HomePage(){
 const classes = useStyle()


    return(


<div>
   
       <div className="mt-4 container ">
           <div className="row">
               <div style={{position:"relative",left:"7%"}} className="col-9   justify-content-center text-center">

                 <div data-animation="true" className="row m-5 justify-content-around ">
                     <div  className="mt-3 col-5 border shadow ">
                         <div className=" row">
                         <div className="col-6 user-icon ml-0  pl-0 pr-5  ">
                    <img className="mt-4 ml-5" src={logoCreate} height="100rem" alt=""/>
                         </div>
                         <div className="mt-5 ml-3  pt-4  col-3 user-text">
                                  <h5 className="text-danger "> <strong>CREATE</strong></h5> 
                         </div>
                         </div>
                     </div>
                     <div className="mt-3 col-5 border shadow rounded ">
                         <div className=" row">
                         <div className="col-6 ml-2 user-icon  pl-0 pr-5  ">
                         <img className="mt-4 ml-3 mb-4" src={logoClients} height="100rem" alt=""/>
                         </div>
                         <div className="mt-5 ml-3  pt-4  col-3 user-text">
                                  <h5 className="text-danger "> <strong>CLIENTS</strong></h5> 
                         </div>
                         </div>
                     </div>
                     <div className="mt-3 col-5 border  shadow rounded ">
                         <div className=" row">
                         <div className="col-6 user-icon ml-0  pl-0 pr-5  ">
                         <img className="mt-4 ml-5 mb-4" src={logoQUERY} height="110rem" alt=""/>
                         </div>
                         <div className="mt-5 ml-3  pt-4  col-3 user-text">
                                  <h5 className="text-danger "> <strong>QUERY</strong></h5> 
                         </div>
                         </div>
                     </div>
                     <div className="mt-3 col-5 border  shadow rounded ">
                         <div className=" row">
                         <div className="col-6 user-icon ml-0  pl-0 pr-5  ">
                         <img className="mt-4 ml-5 mb-2" src={logoReport} height="110rem" alt=""/>
                         </div>
                         <div className="mt-5 ml-3  pt-4  col-3 user-text">
                                  <h5 className="text-danger  "> <strong>REPORTS</strong></h5> 
                         </div>
                         </div>
                     </div>


                 </div>
         
               </div>
               <div className="col-2">
                <div style={{  borderTopRightRadius:"40px 60px", position:"relative", top:"90px", borderBottomRightRadius:"40px 60px"}} className="mt-5 mb-5 col-12 border mh-30 shadow ">
                         <div className="  row">
                         <div className="col-12 mt-2 user-icon text-center pr-5  ">
                         <img className="mt-3 ml-2 mb-2" src={logoScan} height="110rem" alt=""/>
                       <h5 style={{position:"relative",left:"12px"}} className="text-danger mt-2  mb-4 "> <strong>SCAN QR</strong></h5> 
                         </div>
                      </div>
                      </div>
               </div> 
           </div>
           <div style={{position:"relative", left:"-10rem",top:"5rem"}} className="row container  ">
             <div className="col-12">
                 
                 <img  className="" src={zainlogo} alt="" height="100rem"/>
                 </div></div>
         
       </div>

            

</div>


    )
}

export default HomePage;
