import React from 'react'
import {
    Avatar, Grid, makeStyles, Paper, TextField, IconButton,
    InputAdornment, Select, InputLabel, FormControl, FormHelperText
} from "@material-ui/core";
import { PermIdentity as Name, Phone, Smartphone, KeyboardBackspace } from "@material-ui/icons";
import MyImage from "../../RawData/default.jpg";
import ActivityTable from "./activity_table/activityTable";
import { useNavigate, useParams } from 'react-router';
import { ClientsListContext } from '../../context/dataContext';

const useStyle = makeStyles(
    {
        root: {
            width: '100%'
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
        backButton : {
            marginLeft : '2%',
            marginTop : '2%'
        }
    }
)

const ClientProfile = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const { cnic } = useParams();
    const clients = React.useContext(ClientsListContext);

    const [totalAmount, setTotalAmount] = React.useState(0)
    const [procedure, setProcedure] = React.useState("")
    const [totalInstallment, setTotalInstallment] = React.useState(0)
    const [installmentDuration, setInstallmentDuration] = React.useState("")
    const [firstInstallment, setFirstInstallment] = React.useState(0)
    const [givenAmount, setGivenAmount] = React.useState(0)
    const [paymentMethod, setPaymentMethod] = React.useState("")
    const [balance, setBalance] = React.useState(0)
    const [currentClient, setCurrentClient] = React.useState(null)

    React.useEffect(
        () =>{
            console.log("hhhhhhh : ", clients[0])
            clients[0].map(
                (obj, ind) => (
                    obj.map(
                        (object, index) => 
                        index === 0
                        ? (object['cnic'] === cnic ? setCurrentClient(obj) : null )
                        : null
                    )
                )
        
            )
        },
        []
    )


    return (
        <div className={classes.root}>
            <Grid container direction="column" >
                { console.log("Object Param : ", currentClient) }

                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={2} sm={2} md={2} >
                        <IconButton
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => navigate(-1)}
                            className={classes.backButton}
                        >
                            <KeyboardBackspace fontSize="large" color="primary" />

                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft : '10%', marginTop : '3%' }} >
                        <div>
                            <Avatar alt="name" src={currentClient ? currentClient[0]['imageURI'] : MyImage} style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }} >
                            <div style={{ display : 'flex', flexDirection : 'row' }} >
                            <span style={{ fontSize: 14, fontWeight: 'bold' }} >Name : </span>
                            <span style={{ fontSize: 14, fontWeight: 'bold' }} > { currentClient ? currentClient[0]['name'] : 'name' } </span>
                            </div>
                            <span style={{ fontSize: 12, opacity: 0.7 }} >Father name :</span>
                            <span style={{ fontSize: 12, opacity: 0.7 }} >Email</span>
                            <span style={{ fontSize: 12, opacity: 0.7 }} >Phone</span>
                            <span style={{ fontSize: 12, opacity: 0.7 }} >CNIC</span>
                            <span style={{ fontSize: 12, opacity: 0.7 }} >Address</span>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div style={{ width: '70%', marginTop : '5%', marginLeft : '10%' }} >

                        <div className={classes.phoneCnicDiv} >

                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="totalAmount"
                                    label="Total Amount"
                                    variant="outlined"
                                    type="number"
                                    value={totalAmount}
                                    color="primary"
                                    onChange={(e) => setTotalAmount(e.target.value)}
                                    helperText={totalAmount <= 0 ? <span style={{ color: 'red' }} >Please specify total amount</span> : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Name className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Procedure</InputLabel>
                                    <Select
                                        native
                                        value={procedure}
                                        label="Procedure"
                                        onChange={(e) => setProcedure(e.target.value)}
                                        inputProps={{
                                            name: 'procedure',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Full Payment">Full Payment</option>
                                        <option value="Half Payment">Half Payment</option>
                                        <option value="Short Payment">Short Payment</option>
                                        <option value="Installment">Installment</option>
                                    </Select>
                                    <FormHelperText> {procedure === "" ? <span style={{ color: 'red' }} >Please specify procedure</span> : ""} </FormHelperText>
                                </FormControl>
                            </div>
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="installment"
                                    label="Installment"
                                    variant="outlined"
                                    type="number"
                                    color="primary"
                                    disabled={!(procedure === "Installment")}
                                    value={totalInstallment}
                                    onChange={(e) => setTotalInstallment(e.target.value)}
                                    helperText={totalInstallment === 0 ? <span style={{ color: 'red' }} >Please fill your first installment</span> : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Smartphone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Installment Duration</InputLabel>
                                    <Select
                                        native
                                        disabled={!(procedure === "Installment")}
                                        value={installmentDuration}
                                        label="Installment Duration"
                                        onChange={(e) => setInstallmentDuration(e.target.value)}
                                        inputProps={{
                                            name: 'procedure',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"Three Months"}>Three Months</option>
                                        <option value={"Six Months"}>Six Months</option>
                                        <option value={"Nine Months"}>Nine Months</option>
                                        <option value={"One Year"}>One Year</option>
                                        <option value={"Two Year"}>Two Year</option>
                                        <option value={"Three Year"}>Three Year</option>
                                    </Select>
                                    <FormHelperText>{installmentDuration === "" ? <span style={{ color: 'red' }} >Please select duration</span> : ""}</FormHelperText>
                                </FormControl>
                            </div>
                        </div>

                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="firstInstallment"
                                    label="First Installment"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    disabled={procedure !== "Installment"}
                                    value={totalInstallment}
                                    onChange={(e) => {
                                        setTotalInstallment(e.target.value)
                                        setGivenAmount(e.target.value)
                                    }}
                                    helperText={totalInstallment === 0 ? <span style={{ color: 'red' }} >Please specify total amount</span> : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Smartphone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="givenAmount"
                                    label="Given Amount"
                                    variant="outlined"
                                    type="number"
                                    color="primary"
                                    value={givenAmount}
                                    onChange={(e) => {
                                        setGivenAmount(e.target.value)
                                        setBalance(totalAmount - e.target.value)
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                        </div>
                        <div className={classes.phoneCnicDiv} >

                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="balance"
                                    label="Balance"
                                    variant="outlined"
                                    type="number"
                                    color="primary"
                                    value={balance}
                                    disabled={procedure === "Full Payment"}
                                    onChange={(e) => setBalance(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />

                            </div>

                            <div className={classes.phoneDiv} >
                                <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Payment Method</InputLabel>
                                    <Select
                                        native
                                        value={paymentMethod}
                                        label="Payment Method"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        inputProps={{
                                            name: 'procedure',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={"Cheque"}>Cheque</option>
                                        <option value={"Cash"}>Cash</option>
                                        <option value={"Payorder"}>Payorder</option>
                                    </Select>
                                    <FormHelperText>{paymentMethod === "" ? <span style={{ color: 'red' }} >Please select payment method</span> : ""}</FormHelperText>
                                </FormControl>

                            </div>


                        </div>

                    </div>
                </Grid>


            </Grid>

        </div>
    )
}

export default ClientProfile;