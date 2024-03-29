import { Avatar } from '@material-ui/core';
import React from 'react'
import BOX from "../../RawData/box.png";
import YN from "../../RawData/yesno.png";
import LOGO from '../../RawData/printLogo.png'
import { getDate, getReferenceNumber } from "../../utility/utils";


const PlotAndPaymentInformationForm = ({ obj, print }) => {
    return <div style={{ width: '100%', height: 'auto' }}>
        <div className="container" >

            <div className="row" >
                <div className="col-12" style={{ display: 'grid', placeItems: 'center' }} >
                    <Avatar alt="logo" src={LOGO} variant="rounded" style={{ width: '120px', height: '60px', marginTop: '3%' }} />
                </div>

            </div>

            <div className="bg-danger" style={{ position: 'relative', width: '100%', textAlign: 'center', marginTop: '5%' }} >
                <span style={{ fontSize: 44, fontWeight: 'bold', color: 'white' }} >Plot &amp; Payment Information</span>
            </div>

            {/* Refrenec and Date */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <span>Ref No.: &nbsp;&nbsp;&nbsp; </span>
                    <div>
                        <span> {getReferenceNumber(obj['personal']['cnic'])} </span>
                    </div>
                </div>

                <div style={{ marginLeft: 'auto', marginRight: '0', display: 'flex', flexDirection: 'row' }} >
                    <span>Date: &nbsp; &nbsp; &nbsp;</span>
                    <div >
                        <span> {getDate()} </span>
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: '8%' }} >

                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Plot:</span>
                    <div style={{ borderBottom: 'solid black', width: '70%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['asset']['plotName']} </span> </div>
                </div>
                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Measurement:</span>
                    <div style={{ borderBottom: 'solid black', width: '50%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['asset']['measurement']}</span> </div>
                </div>
                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Sq. Yds, Block:</span>
                    <div style={{ borderBottom: 'solid black', width: '45%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['asset']['square']}, Block {obj['asset']['block']}</span> </div>
                </div>

            </div>


            <div className="row" style={{ marginTop: '8%' }} >

                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Category:</span>
                    <div style={{ borderBottom: 'solid black', width: '57%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['asset']['category']}</span> </div>
                </div>
                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Nature:</span>
                    <div style={{ borderBottom: 'solid black', width: '70%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['asset']['nature']}</span> </div>
                </div>
                <div className="col-4 d-flex" >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Total Cost:</span>
                    <div style={{ borderBottom: 'solid black', width: '55%', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{Number(obj['payment']['totalAmount']) + Number(obj['payment']['expanse'])}</span> </div>
                </div>

            </div>

            <div className="row" style={{ marginTop: '8%' }} >
                <div className="offset-1 col-2" >

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >

                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Ordinary</span>
                        <div style={{ width: '100%', height: '50px', border: 'solid black' }} >

                        </div>

                    </div>

                </div>

                <div className="col-2" >

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >

                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Corner</span>
                        <div style={{ width: '100%', height: '50px', border: 'solid black' }} >

                        </div>

                    </div>

                </div>

                <div className="col-2" >

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >

                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >West Open</span>
                        <div style={{ width: '100%', height: '50px', border: 'solid black' }} >

                        </div>

                    </div>

                </div>

                <div className="col-2" >

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >

                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Road facing</span>
                        <div style={{ width: '100%', height: '50px', border: 'solid black' }} >

                        </div>

                    </div>

                </div>

                <div className="col-2" >

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >

                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Commercial</span>
                        <div style={{ width: '100%', height: '50px', border: 'solid black' }} >

                        </div>

                    </div>

                </div>

            </div>


            <div className="row" style={{ marginTop: '8%' }} >

                <div className="col-3" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >SITE Plan</span>
                    <img alt="Box" src={BOX} style={{ width: '80%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />

                </div>

                <div className="col-3" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Terms &amp; Condition</span>
                    <img alt="tc" src={YN} style={{ width: '90%', height: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <span style={{ fontWeight: 'bold' }} >Issue Date</span> <span style={{ borderBottom: '1px solid black', marginLeft: '2%', width : '30%' }} ></span>
                    </div>
                </div>

                <div className="col-3" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Poccession certificate</span>
                    <img alt="pc" src={YN} style={{ width: '90%', height: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <span style={{ fontWeight: 'bold' }} >Issue Date</span> <span style={{ borderBottom: '1px solid black', marginLeft: '2%', width : '30%' }} ></span>
                    </div>
                </div>

                <div className="col-3" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Alotment Order</span>
                    <img alt="ao" src={YN} style={{ width: '90%', height: 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <span style={{ fontWeight: 'bold' }} >Issue Date</span> <span style={{ borderBottom: '1px solid black', marginLeft: '2%', width : '30%' }} ></span>
                    </div>
                </div>

            </div>

            <div className="row offset-1" style={{ marginTop: '8%' }} >
                <span style={{ fontSize: 20, fontWeight: 'bold' }} >Payment</span>
            </div>
            <div className="row offset-1" style={{ marginTop: '3%' }} >


                <div className="col-6" >


                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }} >
                        <span style={{ fontSize: 12, fontWeight: 'bold' }} >By Cheque</span>
                        <div style={{ width: '30%', borderBottom: '1px solid black', textAlign: 'center' }} > <span style={{ opacity: '0.7' }} > { obj['payment']['paymentMethod'] === "Cheque" ? <span style={{ height : '7px' }} >&#10003;</span> : null } </span>  </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }} >
                        <span style={{ fontSize: 12, fontWeight: 'bold' }} >By Cash</span>
                        <div style={{ width: '30%', borderBottom: '1px solid black', textAlign: 'center' }} > <span style={{ opacity: '0.7' }} > { obj['payment']['paymentMethod'] === "Cash" ? <span style={{ height : '7px' }} >&#10003;</span> : null } </span>  </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }} >
                        <span style={{ fontSize: 12, fontWeight: 'bold' }} >By Payorder</span>
                        <div style={{ width: '30%', borderBottom: '1px solid black', textAlign: 'center' }} > <span style={{ opacity: '0.7' }} > { obj['payment']['paymentMethod'] === "Payorder" ? <span style={{ height : '7px' }} >&#10003;</span> : null } </span>  </div>
                    </div>

                </div>

                <div className="col-6" >
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }} >
                        <span style={{ fontSize: 12, fontWeight: 'bold' }} >Balance</span>
                        <div style={{ width: '30%', borderBottom: '1px solid black', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{obj['payment']['balance']}</span> </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }} >
                        <span style={{ fontSize: 12, fontWeight: 'bold' }} >Cost</span>
                        <div style={{ width: '30%', borderBottom: '1px solid black', textAlign: 'center' }} > <span style={{ fontWeight: 'bold', opacity: '0.7' }} >{Number(obj['payment']['totalAmount']) + Number(obj['payment']['expanse']) }</span> </div>
                    </div>
                </div>

            </div>



        </div>


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
}

export default PlotAndPaymentInformationForm;