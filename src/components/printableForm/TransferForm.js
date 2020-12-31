import React from 'react'


const TransferForm = () => {
    return <div style={{ width: '100%', height : 'auto' }}>
        <div className="container" >
            <div style={{ position : 'relative',  width: '100%', textAlign: 'center', backgroundColor: "lightgreen", marginTop : '5%' }} >
                <span style={{ fontSize : 44, fontWeight : 'bold' }} >Transfer Form</span>
            </div>

            {/* Refrenec and Date */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop : '3%' }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <span>Ref No. &nbsp;&nbsp;&nbsp; </span>
                    <div>
                        <span>77776</span>
                    </div>
                </div>

                <div style={{ marginLeft: 'auto', marginRight: '0', display: 'flex', flexDirection: 'row' }} >
                    <span>Date &nbsp; &nbsp; &nbsp;</span>
                    <div >
                        <span>12/26/2025</span>
                    </div>
                </div>
            </div>


            <div style={{ marginTop : '10%' }} >
                <span style={{ fontSize : 34, fontWeight : 'bold' }} >OWNER INFORMATION</span>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '5%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Mr./Mrs./Miss: &nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >S/o, D/o, W/o: &nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >CNIC: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '90%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Address: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '87%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyItems : 'center',  marginTop : '2%' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize : 20, fontWeight : 'bold' }} >Phone No.:&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <div style={{ width: '60%', borderBottom: '1px solid black' }} >
                            <span>77776</span>
                        </div>
                    </div>

                    <div style={{marginRight: 0, display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize : 20, fontWeight : 'bold' }} >Cell Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div style={{ width: '68%', borderBottom: '1px solid black' }} >
                            <span>12/26/2025</span>
                        </div>
                    </div>



                </div>


                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Email: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '89%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>


            </div>




            

            <div style={{ marginTop : '10%' }} >
                <span style={{ fontSize : 34, fontWeight : 'bold' }} >TRANSFER INFORMATION</span>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '5%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Mr./Mrs./Miss: &nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >S/o, D/o, W/o: &nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '82%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >CNIC: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '90%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Address: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '87%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyItems : 'center',  marginTop : '2%' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize : 20, fontWeight : 'bold' }} >Phone No.:&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <div style={{ width: '60%', borderBottom: '1px solid black' }} >
                            <span>77776</span>
                        </div>
                    </div>

                    <div style={{marginRight: 0, display: 'flex', flexDirection: 'row', width: '50%' }} >
                        <span style={{ fontSize : 20, fontWeight : 'bold' }} >Cell Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div style={{ width: '68%', borderBottom: '1px solid black' }} >
                            <span>12/26/2025</span>
                        </div>
                    </div>



                </div>


                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '2%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Email: &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{ width: '89%', borderBottom: '1px solid black' }} >Shakeel haider</span>
                </div>


            </div>


            <div style={{ position : 'absolute', bottom : 0 }} >
                <span>shkhaider2015@gmail.com</span>
            </div>
        </div>

    </div>
}

export default TransferForm;