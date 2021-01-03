import React from 'react'
import {
    Avatar, Grid, makeStyles, TextField, IconButton,
    InputAdornment, Button, CircularProgress
} from "@material-ui/core";
import { PermIdentity as Name, KeyboardBackspace } from "@material-ui/icons";
import { useNavigate, useParams } from 'react-router-dom';
import { ClientsListContext } from '../../context/dataContext';
import { db } from '../../config/firebase';
import { AuthContext } from "../../context/authContext";
import SuccessBox from "../payment/success";
import { Offline } from "react-detect-offline";

const useStyle = makeStyles(
    {
        root: {
            width: '100%',
            backgroundColor: '#fff'
        },
        paper: {
            width: '80%',
            marginTop: '3%',
            margin: '0 auto',
            padding: '2%'
        },
        profileImageGrid: {
            position: 'relative'
        },
        profileImage: {
            width: '100%',
            height: '80%',
            border: '2px solid rgba(177, 36, 224)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);',
            alignItems: 'bottom'
        },
        nameEmailGrid: {
            position: 'relative',
        },
        nameEmail: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            marginBottom: '10%',
            marginLeft: '5%',
        },
        nameEmailName: {
            fontSize: '28px',
            fontWeight: 'bold'
        },
        nameEmailEmail: {
            fontSize: '16px'
        },
        activityText: {
            margin: '0 auto',
            width: '80%'
        },
        activityDiv: {
            margin: '0 auto',
            width: '85%',
            marginBottom: '5%'
        },
        myElements: {
            width: '100%',
        },
        phoneCnicDiv: {
            display: 'flex',
            width: '100%',
            marginTop: '2%',
        },
        cnicDiv: {
            width: '45%',
            marginLeft: '0'
        },
        phoneDiv: {
            width: '45%',
            marginLeft: 'auto',
            marginRight: "0"
        },
        pairElement: {
            width: '100%'
        },
        backButton: {
            marginLeft: '2%',
            marginTop: '2%'
        }
    }
)


const ClientProfile = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const { cnic } = useParams();
    let currentObject = null
    const clients = React.useContext(ClientsListContext);
    const currentUser = React.useContext(AuthContext)
    const [success, setSuccess] = React.useState(false);

    const [id, setId] = React.useState('')
    const [imageURI, setImageURI] = React.useState('')
    const [name, setName] = React.useState('')
    const [fatherName, setFatherName] = React.useState('')
    const [cNIC, setCNIC] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [cellPhone, setCellPhone] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [transfor, setTransfor] = React.useState(false)

    const [area, setArea] = React.useState("")
    const [plotNumber, setPlotNumber] = React.useState("")
    const [measurement, setMeasurement] = React.useState(0)
    const [square, setSquare] = React.useState(0)
    const [block, setBlock] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [nature, setNature] = React.useState("")
    const [type, setType] = React.useState("")
    const [sitePlane, setSitePlane] = React.useState("")
    const [purpose, setPurpose] = React.useState("")


    const [totalAmount, setTotalAmount] = React.useState(0)
    const [procedure, setProcedure] = React.useState("")
    const [totalInstallment, setTotalInstallment] = React.useState(0)
    const [installmentDuration, setInstallmentDuration] = React.useState("")
    const [remainingInstallment, setRemainingInstallment] = React.useState(0)
    const [givenAmount, setGivenAmount] = React.useState(0)
    const [paymentMethod, setPaymentMethod] = React.useState("")
    const [balance, setBalance] = React.useState(0)

    const [newAmount, setNewAmount] = React.useState(0)
    const [button, setButton] = React.useState(false)

    const init = () => {

        setId(currentObject['personal']['id'])
        setImageURI(currentObject['personal']['imageURI'])
        setName(currentObject['personal']['name'])
        setFatherName(currentObject['personal']['fatherName'])
        setEmail(currentObject['personal']['email'])
        setCNIC(currentObject['personal']['cnic'])
        setCellPhone(currentObject['personal']['cellPhone'])
        setPhone(currentObject['personal']['phone'])
        setAddress(currentObject['personal']['address'])
        setTransfor(currentObject['personal']['transfor'])

        setArea(currentObject['asset']['plotName'])
        setPlotNumber(currentObject['asset']['plotNumber'])
        setMeasurement(currentObject['asset']['measurement'])
        setSquare(currentObject['asset']['square'])
        setBlock(currentObject['asset']['block'])
        setCategory(currentObject['asset']['category'])
        setSitePlane(currentObject['asset']['sitePlane'])
        setNature(currentObject['asset']['nature'])
        setType(currentObject['asset']['type'])
        setPurpose(currentObject['asset']['purpose'])

        setTotalAmount(currentObject['payment']['totalAmount'])
        setProcedure(currentObject['payment']['procedure'])
        setTotalInstallment(currentObject['payment']['installment'])
        setInstallmentDuration(currentObject['payment']['installmentDuration'])
        setRemainingInstallment(currentObject['payment']['remainingInstallment'])
        setGivenAmount(currentObject['payment']['givenAmount'])
        setPaymentMethod(currentObject['payment']['paymentMethod'])
        setBalance(currentObject['payment']['balance'])


        // Number(currentObject['payment']['totalAmount'])/Number(currentObject['payment']['installmentDuration'])
    }


    const personal = {
        id: id,
        imageURI: imageURI,
        name: name,
        fatherName: fatherName,
        email: email,
        cellPhone: cellPhone,
        phone: phone,
        cnic: cNIC,
        address: address,
        transfor: transfor
    }
    const asset = {
        plotName: area,
        measurement: measurement,
        square: square,
        block: block,
        category: category,
        nature: nature,
        plotNumber: plotNumber,
        type: type,
        sitePlane: sitePlane,
        purpose: purpose
    }
    const payment = {
        totalAmount: totalAmount,
        givenAmount: (givenAmount + newAmount),
        procedure: procedure,
        installment: totalInstallment,
        installmentDuration: installmentDuration,
        remainingInstallment: remainingInstallment - 1,
        balance: totalAmount - (givenAmount + newAmount),
        balancee: balance,
        paymentMethod: paymentMethod
    }



    React.useEffect(
        () => {
            console.log("hhhhhhh : ", clients[0])

            clients[0].map(
                (object, index) => object['personal']['cnic'] === cnic ? currentObject = object : null
            )
        },
        []
    )

    React.useEffect(
        () => {
            if (currentObject) {
                console.log("Current Object not null")
                init()
                if(currentObject['payment']['procedure'] === "Installment")
                {
                    var kk = Number(currentObject['payment']['totalAmount'])/Number(currentObject['payment']['installment']);
                    setNewAmount(kk)
                }
                else if(currentObject['payment']['procedure'] === "Half Payment")
                {
                    var kk = Number(currentObject['payment']['totalAmount']) / 2
                    setNewAmount(kk)
                }
                else if(currentObject['payment']['procedure'] === "Full payment")
                {
                    
                }
            }
        },
        [currentObject]
    )
    const handleUpdate = () => {
        const number = cNIC.toString().replace(/-/g, "")

        let ga = Number(givenAmount) + Number(newAmount);
        let bl = totalAmount - ga;
        let lastEditBy = currentUser.currentUser.displayName;
        let lastEditedDate = Date.now();

        console.log(`given amount is ${ga} and balance is ${bl} and lastEdit ${lastEditBy} and date ${lastEditedDate} `)

        db.collection('clients').doc(number)
            .update({
                "payment.givenAmount": ga,
                "payment.balance": bl,
                "extra.lastEditBy": lastEditBy,
                "extra.lastEditDate": lastEditedDate,
            })
            .then(() => {
                console.log("Update Success")
                setSuccess(!success)
            })
            .catch((e) => {
                console.error(e)
                setButton(false)
            })
    }

    const handleInstallmentUpdate = () => {
        const number = cNIC.toString().replace(/-/g, "")


        let ga = Number(givenAmount) + Number(newAmount);
        let bl = totalAmount - ga;
        let lastEditBy = currentUser.currentUser.displayName;
        let lastEditedDate = Date.now();
        let ri = Number(remainingInstallment) - 1

        console.log(`given amount is ${ga} and balance is ${bl} and lastEdit ${lastEditBy} and date ${lastEditedDate} remaining installment is : ${ri} `)

        db.collection('clients').doc(number)
            .update({
                "payment.givenAmount": ga,
                "payment.balance": bl,
                "payment.remainingInstallment": ri,
                "extra.lastEditBy": lastEditBy,
                "extra.lastEditDate": lastEditedDate,
            })
            .then(() => {
                console.log("Update Success")
                setSuccess(!success);
            })
            .catch((e) => {
                console.error(e)
                setButton(false)
            })
    }


    const handleSubmit = () => {
        if (newAmount) {
            if (procedure === "Installment") {
                handleInstallmentUpdate()
            }
            else {
                handleUpdate()
            }

            setButton(true)

        }
        else {
            return;
        }
    }


    return (
        <div className={classes.root}>
            {
                success
                    ? <SuccessBox open={success} title="Transaction Added Successfully" />
                    :
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
                                    <Avatar alt="name" src={imageURI} style={{ width: '150px', height: '150px', boxShadow: '0 0 30px 0 rgba(20, 27, 202, .17)' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '50%' }} >
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >Name</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'bold' }} > {name} </span></div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >Father Name</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'normal' }} > {fatherName} </span></div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >CNIC</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'normal' }} > {cNIC} </span></div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >Email</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'normal' }} > {email} </span></div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >Phone</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'normal' }} > {cellPhone} </span></div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }} >
                                        <div style={{ width: '40%' }} ><span style={{ fontSize: 12, fontWeight: 'normal', paddingRight: '10%' }} >Address</span></div>
                                        <div style={{ width: '60%' }} ><span style={{ fontSize: 12, fontWeight: 'normal' }} > {address} </span></div>
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
                                                    <span> {totalAmount} </span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Given Amount</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> {Number(givenAmount) + Number(newAmount)} </span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Balance</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> {Number(totalAmount) - (Number(givenAmount) + Number(newAmount))} </span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                <div style={{ width: '50%' }} >
                                                    <span>Procedure</span>
                                                </div>
                                                <div style={{ width: '50%' }} >
                                                    <span> {procedure} </span>
                                                </div>
                                            </div>

                                            {
                                                procedure === "Installment"
                                                    ? <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >

                                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                            <div style={{ width: '50%' }} >
                                                                <span>Total Installment</span>
                                                            </div>
                                                            <div style={{ width: '50%' }} >
                                                                <span> {totalInstallment} </span>
                                                            </div>
                                                        </div>

                                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                            <div style={{ width: '50%' }} >
                                                                <span>Remaining Installment</span>
                                                            </div>
                                                            <div style={{ width: '50%' }} >
                                                                <span> {remainingInstallment} </span>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    : null
                                            }

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} >

                                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >

                                            {
                                                procedure !== "Installment"
                                                    ? <TextField
                                                        style={{ width: '80%' }}
                                                        id="totalAmount"
                                                        label="New Amount"
                                                        variant="outlined"
                                                        type="number"
                                                        value={newAmount}
                                                        color="primary"
                                                        disabled={ procedure !== "Short Payment" }
                                                        onChange={(e) => {
                                                            setNewAmount(e.target.value)
                                                        }}
                                                        helperText={totalAmount <= 0 ? <span  >Please specify total amount</span> : ""}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Name className={classes.iconColor} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                    : <TextField
                                                        style={{ width: '80%' }}
                                                        id="install"
                                                        label="New Installment"
                                                        variant="outlined"
                                                        type="number"
                                                        value={newAmount}
                                                        disabled
                                                        color="primary"
                                                        onChange={(e) => {
                                                            setNewAmount(e.target.value)
                                                        }}
                                                        helperText={totalAmount <= 0 ? <span  >Please specify total amount</span> : ""}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Name className={classes.iconColor} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                            }

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                title="Submit"
                                                disabled={button}
                                                style={{ width: '80%', height: '3%', marginTop: '2%' }}
                                                onClick={() => handleSubmit()}
                                            >
                                                Submit {button ? <CircularProgress size={24} /> : ""}
                                            </Button>

                                        </div>

                                    </Grid>

                                </Grid>

                            </div>

                        </Grid>


                    </Grid>
            }

            <div style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: 'red',
                textAlign: 'center',
                color: 'white'
            }} >
                <Offline >Check Your Internet Connection</Offline>
            </div>
        </div>
    )
}

export default ClientProfile;