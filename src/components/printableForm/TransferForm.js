import React from 'react'
import { getDateFromMillis, getReferenceNumber } from '../../utility/utils';


const TransferForm = ({ obj }) => {
    return  ( <div>
        <div className="container" >
            
            <div className="bg-danger"  style={{ position: 'relative', width: '100%', textAlign: 'center', marginTop: '5%' }} >
                    <span style={{ fontSize: 44, fontWeight: 'bold', color: 'white' }} >Transfer Form</span>
                </div>

            {/* Refrenec and Date */}
            <div   style={{ display: 'flex', flexDirection: 'row', marginTop: '3%', width : '100%' }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <span>Ref No. &nbsp;&nbsp;&nbsp; </span>
                    <div>
                        <span>{getReferenceNumber(obj['personal']['cnic'])}</span>
                    </div>
                </div>

                <div style={{ marginLeft: 'auto', marginRight: '0', display: 'flex', flexDirection: 'row' }} >
                    <span>Date &nbsp; &nbsp; &nbsp;</span>
                    <div >
                        <span> {getDateFromMillis(obj['extra']['addedDate'])} </span>
                    </div>
                </div>
            </div>


            <div   style={{ marginTop: '10%', width : '100%' }} >
                <span style={{ fontSize: 34, fontWeight: 'bold' }} >OWNER INFORMATION</span>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Mr./Mrs./Miss: &nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >{ obj['extra']['transforFrom']['name'] }</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >S/o, D/o, W/o: &nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >{ obj['extra']['transforFrom']['fatherName'] }</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >CNIC: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '90%', borderBottom: '1px solid black' }} >{ obj['extra']['transforFrom']['cnic'] }</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Address: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '87%', borderBottom: '1px solid black' }} >{ obj['extra']['transforFrom']['address'] }</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', marginTop: '2%' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Phone No.:&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <div style={{ width: '60%', borderBottom: '1px solid black' }} >
                            <span>{ obj['extra']['transforFrom']['phone'] }</span>
                        </div>
                    </div>
                    <div style={{ marginRight: 0, display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Cell Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div style={{ width: '68%', borderBottom: '1px solid black' }} >
                            <span> { obj['extra']['transforFrom']['cellPhone'] } </span>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Email: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '89%', borderBottom: '1px solid black' }} > { obj['extra']['transforFrom']['email'] } </span>
                </div>


            </div>


            <div style={{ marginTop: '10%', width : '100%' }} >
                <span style={{ fontSize: 34, fontWeight: 'bold' }} >TRANSFER INFORMATION</span>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Mr./Mrs./Miss: &nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >{obj['personal']['name']}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >S/o, D/o, W/o: &nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >{ obj['personal']['fatherName'] }</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >CNIC: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '90%', borderBottom: '1px solid black' }} >{ obj['personal']['cnic'] }</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Address: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '87%', borderBottom: '1px solid black' }} >{ obj['personal']['address'] }</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', marginTop: '2%' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Phone No.:&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <div style={{ width: '60%', borderBottom: '1px solid black' }} >
                            <span>{ obj['personal']['phone'] }</span>
                        </div>
                    </div>

                    <div style={{ marginRight: 0, display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize: 20, fontWeight: 'bold' }} >Cell Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div style={{ width: '68%', borderBottom: '1px solid black' }} >
                            <span>{ obj['personal']['cellPhone'] }</span>
                        </div>
                    </div>



                </div>


                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }} >
                    <span style={{ fontSize: 20, fontWeight: 'bold' }} >Email: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '89%', borderBottom: '1px solid black' }} > { obj['personal']['email'] } </span>
                </div>


            </div>


        </div>
        <div  style={{ display : 'flex', flexDirection : 'column', bottom : 0, left : 0, position : 'fixed' }} >
                        <span style={{ fontSize : 8, color : 'black', opacity : '0.7' }} >Developed By <b>HESOGENS</b> Digital Service Provider</span>
                        <div style={{ display : 'flex', flexDirection : 'row', marginLeft : 'auto', marginRight : 'auto' }} >
                            <span style={{ fontSize : 8, color : 'black', opacity : '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                        </div>
                </div>

    </div>)
    
}

export default TransferForm;