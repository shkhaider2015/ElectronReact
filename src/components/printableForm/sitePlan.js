import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';
import diagram from '../../RawData/diagram.png'
import MyRoutes from "../../components/myRoutes/myRoutes";
import { getDate, getReferenceNumber } from "../../utility/utils";
const useStyle = makeStyles(
    (theme) => (
        {
            plotImageStyle: {
                position: 'relative',
                top: "20%"
            },

        }
    )
)


function SitePlan({ obj, print }) {

    const RefNo = "767767"
    const North = ""
    const South = ""
    const East = ""
    const West = ""

    return (



        <div className="mt-5 container">

            <div className="mt-5 row">
                <div className="mt-5 col-12  heading">
                    <h3 className="mt-5 mb-5 rounded text-center bg-danger text-white p-2"><em>SITE PLAN</em></h3>
                </div>
            </div>

            <div className="mt-5 row justify-content-around mb-5 ">
                <div style={{ width: "70%", border: "1px solid black", borderRadius: 30, padding: 0 }} className="mt-5  col-4 p-1 text-center">
                    <div className="p-3 row  mt-1  ">
                        <div className=" ml-2 col-5  "><h5><em>Ref No. :</em></h5></div>
                        <div className="ml-2 col-5   border-bottom">{getReferenceNumber(obj['personal']['cnic'])}</div>
                    </div>
                    <div className="row p-3 mt-1 ">
                        <div className=" ml-2 col-5 "><h5> <em>Date : </em></h5></div>
                        <div className="ml-2 col-5  border-bottom">{getDate()}</div>
                    </div>
                </div>
                <div style={{ width: "70%", border: "1px solid black", borderRadius: 30, padding: 0 }} className="mt-5 col-4 p-1 text-center">
                    <div className="p-3 row  mt-1  ">
                        <div className=" col-5   "><h5><em style={{ marginTop: 'auto', marginBottom: 'auto' }} >Block { } </em></h5></div>
                        <div className=" col-5   "><h5><em style={{ marginTop: 'auto', marginBottom: 'auto' }} >{obj['asset']['block']} </em></h5></div>

                    </div>
                </div>
            </div>

            <div className="mt-5 row" >
                <div className="col-12">
                    <div className="mt-5 row">
                        <div className="offset-1 col-3 text-left ">Site Plan for Plot No.</div>
                        <div className="col-3 text-left pl-4  border-bottom">{obj['asset']['sitePlane']}</div>
                        <div className=" col-2  text-center ">Type :</div>
                        <div className="col-2 text-left pl-4  border-bottom">{obj['asset']['type']}</div>
                    </div>
                </div>

                <div className="mt-5 col-12">
                    <div className="row">
                        <div className="offset-1 col-3 pl-3 text-left ">Purpose only of :</div>
                        <div className="col-3 text-left pl-4  border-bottom">{obj['asset']['purpose']}</div>
                        <div className=" col-2 pl-4 text-center ">Sq. Yds :</div>
                        <div className="col-2 text-left pl-4  border-bottom">{obj['asset']['square']}</div>
                    </div>
                </div>
            </div>


            <div className="row mt-5 ">
                <div className="offset-2 col-6 mt-5  mb-5 ">
                    <img src={diagram} height="100%" width="100%" />
                </div>
                <div className="col-2">
                    <div style={{ position: "relative", right: "83%", top: "30%" }}><em>{North}</em></div>
                    <div style={{ position: "relative", right: "83%", top: "27.5%" }}><em>{South}</em></div>
                    <div style={{ position: "relative", right: "83%", top: "25%" }}><em>{East}</em></div>
                    <div style={{ position: "relative", right: "83%", top: "23%" }}><em>{West}</em></div>
                </div>
                <div className="col-2">
                    <div style={{ position: "relative", right: "421%", top: "48.5%" }}>{obj['asset']['plotNumber']}</div>
                    <div style={{ position: "relative", right: "421%", top: "48.5%" }}>{obj['asset']['square']}</div>

                </div>



            </div>

            <div className="mt-5 row" >

                <div className=" col-12 ">
                    <div className="row">
                        <div className="offset-1  col-4  text-left ">Name of Allotted Mr./Mrs./Miss :</div>
                        <div className="col-3 text-left pl-4  border-bottom">{obj['personal']['name']}</div>
                    </div>
                </div>

                <div className="mt-5 col-12 ">
                    <div className="row">
                        <div className="offset-1  col-4 pl-3 text-left ">S/o, D/o, W/o. :</div>
                        <div className="col-3 text-left pl-4  border-bottom">{obj['personal']['fatherName']}</div>
                    </div>
                </div>

            </div>


            <div className="row" >
                <footer style={{ marginTop: "10%" }} className="col-12 page-footer font-small blue">

                    <div className="mt-2 col-12">
                        <div className="row justify-content-around">
                            <div style={{ borderBottom: "1px solid black" }} className="col-3 col-2 mb-2 text-left pl-4"></div>
                            <div style={{ borderBottom: "1px solid black" }} className=" col-2 mb-2 text-left pl-4"></div>

                        </div>
                        <div className="row justify-content-around">
                            <div className=" col-3 text-center ">   Raed, Understood and Accepted   </div>
                            <div className="  col-2 text-center ">For <span className="text-danger"><strong>Mian Town</strong></span></div>


                        </div>
                    </div>
                </footer>

            </div>

            <div className="row" >

                <footer className="mt-5 col-12 page-footer font-small blue">
                    <div className="mt-1 col-12 ">
                        <div className="row">
                            <div className=" col-2 text-center ">CALL US:</div>

                        </div>
                        <div className="row">
                            <div className="col-2 text-center ">+92-</div>

                        </div>
                    </div>
                </footer>

            </div>


            <div className="row" >

            {
                print
                    ? <div style={{ display: 'flex', flexDirection: 'column', bottom: '50px', width: '100%', position: 'fixed', textAlign: 'center' }} >
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Powered By <b>HESOGENS</b> </span>
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Digital Service Provider</span>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                            <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                        </div>
                    </div>
                    : null
            }


            </div>

        </div>




    )
}


export default SitePlan


