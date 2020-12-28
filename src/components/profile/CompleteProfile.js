import { Grid, IconButton, Avatar } from '@material-ui/core'
import { KeyboardBackspace } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const CompleteProfile = ({ object }) => {

    const navigate = useNavigate()
    return (
        <div style={{ overflow : 'hidden', height : 'auto' }} >

            <Grid container >

                {/* Backspace */}
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={2} sm={2} md={2} >
                        <IconButton
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => navigate(-1)}
                        >
                            <KeyboardBackspace fontSize="large" color="primary" />

                        </IconButton>
                    </Grid>
                </Grid>

                {/* Personal Info */}
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15%', marginTop: '3%' }} >
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <Avatar alt="name" src={object['personal']['imageURI']} style={{ width: '150px', height: '150px', boxShadow: '0 0 30px 0 rgba(20, 27, 202, .17)' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '50%' }} >
                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Name</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'bold' }} > {object['personal']['name']}  </span></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Father Name</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > {object['personal']['fatherName']} </span></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >CNIC</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > {object['personal']['cnic']} </span></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Email</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > {object['personal']['email']} </span></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Phone</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > {object['personal']['cellPhone']} </span></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Address</span></div>
                                <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > {object['personal']['address']} </span></div>
                            </div>

                        </div>
                    </div>
                </Grid>
                {/* Details */}
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <div style={{ width: '70%', marginLeft: '15%', marginTop : '5%' }} className='row' >

                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '3%' }}>

                                <div style={{ display: 'grid', placeItems: 'center' }} >
                                    <span style={{ fontSize : 18, fontWeight : 'bold' }} >Payment Details</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', marginTop : '1%' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Total Amount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> {object['payment']['totalAmount']} </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Given Amnount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> {object['payment']['givenAmount']} </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Payment Method</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> {object['payment']['paymentMethod']} </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Balance</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> {object['payment']['balance']} </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Procedure</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> {object['payment']['procedure']} </span>
                                    </div>
                                </div>

                                {
                                    object['payment']['procedure'] === "Installment"
                                        ? <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Total Installment</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> {object['payment']['installment']} </span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Remaining Installment</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> {object['payment']['remainingInstallment']} </span>
                                                </div>
                                            </div>


                                        </div>
                                        : null
                                }

                            </div>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6} >

                            <div style={{ display: 'flex', flexDirection: 'column', marginTop : '1%' }} >
                                <div style={{ display: 'grid', placeItems: 'center'}} >
                                    <span style={{ fontSize : 18, fontWeight : 'bold' }}>Asset Details</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >

                                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', paddingBottom: '3%' }}>


                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Plot Name</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['plotName']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Plot N0.</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['plotNumber']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Measurement</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['measurement']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>square. Yards</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['square']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Block</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['block']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Category</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['category']} </span>
                                            </div>
                                        </div>



                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', paddingBottom: '3%' }}>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Type</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['type']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Nature</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['nature']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Site Plan</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['sitePlane']} </span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <div style={{ width: '50%' }} >
                                                <span>Purpose</span>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <span> {object['asset']['purpose']} </span>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>

                        </Grid>



                    </div>

                </Grid>


            </Grid>

        </div>
    )
}

export default CompleteProfile;
