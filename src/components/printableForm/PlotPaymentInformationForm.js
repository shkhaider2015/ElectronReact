import React from 'react'


const PlotAndPaymentInformationForm = () => {
    return <div style={{ width: '100%', height : 'auto' }}>
        <div className="container" >
            <div style={{ position : 'relative',  width: '100%', textAlign: 'center', backgroundColor: "lightgreen", marginTop : '5%' }} >
                <span style={{ fontSize : 44, fontWeight : 'bold' }} >Plot & Payment Information</span>
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

            <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'center' }}  >

                <div style={{ display : 'flex', flexDirection : 'row', border : '1px solid black', width : '33.333%' }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Plot:</span>
                    <div style={{ display : 'flex', flexDirection : 'row', borderBottom : '1px solid black' }} >
                        <span>Shakeel haider</span>
                    </div>
                </div>
                <div style={{ display : 'flex', flexDirection : 'row', border : '1px solid black', width : '33.333%'  }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Measurement:</span>
                    <div style={{ borderBottom : '1px solid black' }} >
                        <span>Shakeel haider</span>
                    </div>
                </div>
                <div style={{ display : 'flex', flexDirection : 'row', border : '1px solid black', width : '33.333%'  }} >
                    <span style={{ fontSize : 20, fontWeight : 'bold' }} >Sq. Yds, Block:</span>
                    <div style={{ borderBottom : '1px solid black' }} >
                        <span>Shakeel haider</span>
                    </div>
                </div>

            </div>



            <div style={{ position : 'absolute', bottom : 0 }} >
                <span>shkhaider2015@gmail.com</span>
            </div>
        </div>

    </div>
}

export default PlotAndPaymentInformationForm;