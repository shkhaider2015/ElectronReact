import { Grid, IconButton, Avatar } from '@material-ui/core'
import { KeyboardBackspace } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router'
import MyImage from "../../RawData/default.jpg";



const CompleteProfile = () => {

    const navigate = useNavigate()
    return (
        <Grid container direction="column" >

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
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15%', marginTop: '3%' }} >
                    <div>
                        <Avatar alt="name" src={MyImage} style={{ width: '150px', height: '150px', boxShadow: '0 0 30px 0 rgba(20, 27, 202, .17)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '50%' }} >
                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Name</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'bold' }} > Shakeel haider  </span></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Father Name</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > Abdul Rasheed </span></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >CNIC</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > 42401-9917847-9 </span></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Email</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > shkhaider2015@gmail.com </span></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Phone</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > 03460027852 </span></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                            <div style={{ width: '40%' }} ><span style={{ fontSize: 10, fontWeight: 'normal', paddingRight: '10%' }} >Address</span></div>
                            <div style={{ width: '60%' }} ><span style={{ fontSize: 10, fontWeight: 'normal' }} > Pathan Colony, Manghopir Road, Khi </span></div>
                        </div>

                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} >
                <div style={{ width: '70%', marginTop: '5%', marginLeft: '15%' }} className='row' >



                    <Grid container >

                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '3%' }}>


                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Total Amount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 6556 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Given Amount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 9898 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Balance</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 9898 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Procedure</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 8787 </span>
                                    </div>
                                </div>

                                {
                                    "procedure" === "Installment"
                                        ? <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Total Installment</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> 878878 </span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Remaining Installment</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> 7878 </span>
                                                </div>
                                            </div>


                                        </div>
                                        : null
                                }

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >


                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '3%' }}>


                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Total Amount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 7676 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Given Amount</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 87878 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Balance</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 87878 </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width: '50%' }} >
                                        <span>Procedure</span>
                                    </div>
                                    <div style={{ width: '50%' }} >
                                        <span> 87877 </span>
                                    </div>
                                </div>


                            </div>


                        </Grid>

                    </Grid>

                </div>

            </Grid>


        </Grid>
    )
}

export default CompleteProfile;