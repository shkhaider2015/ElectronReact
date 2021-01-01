import React from 'react'
import { Avatar, Button, Grid, IconButton, CircularProgress } from "@material-ui/core";
import { useLocation, useNavigate } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';
import LOGO from "../../RawData/mainassociates_icon.png";
import PersonalInformation from '../forms/personalInfo';
import { SpinnerLoading } from '../loading/loadingSpinner';
import { db, storage, firebase } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import Success from '../payment/success';



const Transfor = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { obj } = state
    const currentUser = React.useContext(AuthContext)

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
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [err, setErr] = React.useState(null)

    const personal = {
        id: cNIC.replace(/-/g, "") + name.toLocaleLowerCase().slice(0, 4).replace(/\s/g, ""),
        imageURI: "",
        name: name,
        fatherName: fatherName,
        email: email,
        cellPhone: cellPhone,
        phone: phone,
        cnic: cNIC,
        address: address,
        transfor: false,
    }
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


    const uploadData = (imageURI = "") => {
        var key = cNIC.replace(/-/g, "");
        var cu = currentUser.currentUser.displayName
        var date = Date.now()
        personal.imageURI = imageURI

        db.collection('clients')
            .doc(key)
            .set({
                personal: personal,
                asset: asset,
                payment: payment,
                extra: {
                    addedBy: cu,
                    addedDate: date,
                    transforFrom: {
                        name: obj['personal']['name'],
                        fatherName: obj['personal']['fatherName'],
                        cnic: obj['personal']['cnic'],
                        cellPhone: obj['personal']['cellPhone'],
                        phone: obj['personal']['phone'],
                        email: obj['personal']['email'],
                        address: obj['personal']['address'],
                        imageURI: obj['personal']['imageURI']
                    }
                }
            })
            .then(() => {
                console.log("Transfor Success")
                setIsloading(false)
                setIsSuccess(!isSuccess)
            })
            .catch((e) => {
                console.log("Transfer Failed")
                setErr(e)
                setIsloading(false)
            })


    }

    const uploadImage = () => {
        var storageRef = storage.ref().child(cNIC.replace(/-/g, ""));
        var uploadTask = storageRef.child('profile.jpg').put(imageFile);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
                    console.log("Default case")
                    break;
            }
        }, (error) => {
            // Handle unsuccessful uploads
            console.log(error)
            setErr(error)
            setIsloading(false)
        }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                uploadData(downloadURL)
            });
        });


    }

    const updateInfo = () => {
        db
            .collection('clients')
            .doc(obj['personal']['cnic'].replace(/-/g, ""))
            .update({
                'personal.transfor': true
            })
            .then(() => {
                console.log("Update Success")
                if (selectedImage) {
                    uploadImage()
                }
                else {
                    uploadData()
                }

            })
            .catch((e) => {
                console.log("Update Failed")
                setErr(e)
                setIsloading(false)
            })

    }

    const checkInfo = val => {
        var val = false;

        name === "" || email === "" || cellPhone === "" || cNIC === "" || address === ""
            ? val = false
            : val = true

        console.log("Value : ", val)
        return val;
    }

    const handleSubmit = () => {

        if (checkInfo() && window.confirm("Are you sure you want to transfor ?")) {
            updateInfo()
            setIsloading(!isLoading);

        }


    }

    return <div style={{ overflowX: 'hidden' }} >
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
        {
            isSuccess
            ? <Success open={isSuccess} title="Tranfor Complete Successfully" />
            : <Grid container direction="row" style={{ marginTop: '4%', marginLeft: '5%', marginRight: '10%' }}  >
            <Grid item xs={12} sm={12} md={3} lg={3} style={{}}>

                <div style={{ display: 'flex', flexDirection: 'column' }} >

                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <div style={{ display: 'grid', placeItems: 'center' }} >
                            <Avatar alt="pic" src={obj['personal']['imageURI']} style={{ width: '130px', height: '130px' }} />
                        </div>
                        <div style={{ display: 'grid', placeItems: 'center', paddingLeft: '2%' }} >
                            <div style={{ display: 'flex', flexDirection: 'column' }} >
                                <span style={{ fontSize: 16, fontWeight: 'bold' }} > {obj['personal']['name']} </span>
                                <span style={{ fontSize: 12, fontWeight: 'bold', opacity: '0.7' }} > {obj['personal']['email']} </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15%' }} >

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >

                            <span style={{ fontSize: 12 }} > Father/Husband : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['fatherName']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > CNIC : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['cnic']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Cell Phone : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['cellPhone']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Phone Office : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['phone']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Address : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['address']} </span>

                        </div>


                    </div>

                    <span style={{ fontSize: 16, fontWeight: 'bold', marginTop: '6%' }} >PAYMENT INFORMATION</span>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3%' }} >

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >

                            <span style={{ fontSize: 12, fontWeight: 'normal' }} > Payment Procedure : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['procedure']} </span>

                        </div>

                        {
                            obj['payment']['procedure'] === "Installment"
                                ? <div style={{ display: 'flex', flexDirection: 'row' }} >

                                    <span style={{ fontSize: 12 }} > Total Installment : </span>
                                    <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['installment']} </span>

                                </div>
                                : null
                        }
                        {
                            obj['payment']['procedure'] === "Installment"
                                ? <div style={{ display: 'flex', flexDirection: 'row' }} >

                                    <span style={{ fontSize: 12 }} > Remaining Installment : </span>
                                    <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['remainingInstallment']} </span>

                                </div>
                                : null
                        }

                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Total Amount : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['totalAmount']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Given Amount : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['givenAmount']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Balance : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['payment']['balance']} </span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <span style={{ fontSize: 12 }} > Address : </span>
                            <span style={{ fontSize: 12, opacity: '0.7', fontWeight: 'bold', marginLeft: 'auto', marginRight: '30%' }} > {obj['personal']['address']} </span>

                        </div>


                    </div>



                </div>

            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} style={{}} >
                <div style={{ height: '100%', display: 'grid', placeItems: 'center' }} >
                    {
                        isLoading
                            ? <SpinnerLoading />
                            : null
                    }
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} style={{}} >

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
                    <PersonalInformation model={personalModel} />


                    <Button
                        disabled={isLoading}
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: '20%', marginRight: '20%' }}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    {
                            isLoading
                                ? <CircularProgress color="inherit" style={{ marginLeft: 'auto', marginRight: 0, width: '25px', height: '25px' }} />
                                : null
                        }
                    </Button>

                </div>


            </Grid>
        </Grid>
        }

        {
            err
                ? <div style={{ position: 'absolute', left: 0, bottom: 0 }} >
                    <span style={{ color: 'red' }} > {err} </span>
                </div>
                : null
        }
    </div>
}


export default Transfor;