import React from 'react'
import { Avatar, Button, Grid, IconButton, CircularProgress } from "@material-ui/core";
import { useLocation, useNavigate } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';
import LOGO from "../../RawData/mainassociates_icon.png";
import PersonalInformation from '../forms/personalInfo';
import { SpinnerLoading } from '../loading/loadingSpinner';



const Transfor = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { obj } = state

    const [imageFile, setImageFile] = React.useState(null)
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [name, setName] = React.useState("")
    const [fatherName, setFatherName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [cellPhone, setCellPhone] = React.useState("")
    const [cNIC, setCNIC] = React.useState("")
    const [address, setAddress] = React.useState("")

    const [isLoading, setIsloading] = React.useState(false)
    const [err, setErr] = React.useState(null)

    const asset = {
        plotName: obj['asset']['plotName'],
        plotNumber: obj['asset']['plotNumber'],
        measurement: obj['asset']['measurement'],
        square: obj['asset']['square'],
        block: obj['asset']['block'],
        category: obj['asset']['category'],
        nature: obj['asset']['nature'],
        type: obj['asset']['type'],
        sitePlane: obj['asset']['sitePlane'],
        purpose: obj['asset']['purpose']
    }
    const payment = {
        totalAmount: obj['payment']['totalAmount'],
        givenAmount: obj['payment']['givenAmount'],
        procedure: obj['payment']['procedure'],
        installment: obj['payment']['installment'],
        installmentDuration: obj['payment']['installmentDuration'],
        remainingInstallment: obj['payment']['remainingInstallment'],
        balance: obj['payment']['balance'],
        paymentMethod: obj['payment']['paymentMethod']
    }

    const personalModel =
  {
    imageFile,
    setImageFile,
    selectedImage,
    setSelectedImage,
    name,
    setName,
    fatherName,
    setFatherName,
    cellPhone,
    setCellPhone,
    phone,
    setPhone,
    cNIC,
    setCNIC,
    email,
    setEmail,
    address,
    setAddress
  }

  const handleSubmit = () =>
  {
      setIsloading(!isLoading);


  }

    return <div style={{ overflowX : 'hidden' }} >
        <div style={{ display: 'flex', flexDirection: 'row' }} >

            <div>
                <IconButton
                onClick={() => navigate(-1)}
                >
                    <KeyboardBackspace fontSize="large" color="primary" />
                </IconButton>
            </div>
            <div style={{ width: '100%', display: 'grid', placeItems: 'center' }} >
                <img alt="logo" src={LOGO} style={{ width: '15%', height: 'auto' }} />
            </div>

        </div>
        <Grid container direction="row"  style={{ marginTop: '4%', marginLeft : '5%', marginRight : '10%' }}  >
            <Grid item xs={12} sm={12} md={3} lg={3} style={{  }}>

                <div style={{ display: 'flex', flexDirection: 'column' }} >

                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <div style={{ display: 'grid', placeItems: 'center' }} >
                            <Avatar alt="pic" src={obj['personal']['imageURI']} style={{ width: '130px', height: '130px' }} />
                        </div>
                        <div style={{ display: 'grid', placeItems: 'center', paddingLeft: '2%' }} >
                            <div style={{ display: 'flex', flexDirection: 'column' }} >
                                <span style={{ fontSize: 16, fontWeight: 'bold' }} > {obj['personal']['name']} </span>
                                <span style={{ fontSize: 12, fontWeight: 'bold', opacity : '0.7' }} > {obj['personal']['email']} </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15%' }} >

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >

                            <span style={{ fontSize: 12 }} > Father/Husband : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['fatherName']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > CNIC : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['cnic']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Cell Phone : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['cellPhone']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Phone Office : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['phone']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Address : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['address']} </span>

                        </div>


                    </div>

                    <span style={{ fontSize: 16, fontWeight: 'bold', marginTop: '6%' }} >PAYMENT INFORMATION</span>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3%' }} >

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >

                            <span style={{ fontSize: 12, fontWeight : 'normal' }} > Payment Procedure : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['procedure']} </span>

                        </div>

                        {
                            obj['payment']['procedure'] === "Installment"
                                ? <div style={{ display: 'flex', flexDirection: 'row' }} >

                                    <span style={{ fontSize: 12 }} > Total Installment : </span>
                                    <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['installment']} </span>

                                </div>
                                : null
                        }
                        {
                            obj['payment']['procedure'] === "Installment"
                                ? <div style={{ display: 'flex', flexDirection: 'row' }} >

                                    <span style={{ fontSize: 12 }} > Remaining Installment : </span>
                                    <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['remainingInstallment']} </span>

                                </div>
                                : null
                        }

                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Total Amount : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['totalAmount']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Given Amount : </span>
                            <span style={{ fontSize: 12, opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['givenAmount']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Balance : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['balance']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Address : </span>
                            <span style={{ fontSize: 12,opacity : '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['address']} </span>

                        </div>


                    </div>



                </div>

            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} style={{  }} >
                <div style={{ height : '100%', display : 'grid', placeItems : 'center' }} >
                {
                    isLoading
                    ? <SpinnerLoading />
                    : null
                }
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} style={{  }} >

                <div style={{ display : 'flex', flexDirection : 'column', width : '100%'}} >
                <PersonalInformation model={personalModel} />

                
                <Button 
                disabled={isLoading} 
                variant="contained" 
                color="primary" 
                style={{ marginLeft : '20%', marginRight : '20%' }} 
                onClick={() => handleSubmit()}
                >
                    Submit
                    {
                        isLoading
                        ? <CircularProgress color="inherit" style={{ marginLeft : 'auto', marginRight : 0, width : '25px', height : '25px' }} />
                        : null
                    }
                </Button>

                </div>


            </Grid>
        </Grid>
    </div>
}


export default Transfor;