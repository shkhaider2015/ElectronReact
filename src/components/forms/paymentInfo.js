import {
     Grid, makeStyles, Paper, TextField,
    InputAdornment, Select, InputLabel, FormControl,  FormHelperText
} from '@material-ui/core'
import { MoneyOutlined, AccountBalanceOutlined, HourglassEmptyOutlined, AccountBalanceWalletOutlined} from "@material-ui/icons";
import React from 'react'


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                marginTop: '6.55%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingBottom: '3%',
                width: '60%',
                background: 'rgba(255, 255, 255, 0.98)',
                [theme.breakpoints.down('md')]: {
                    width: '70%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '90%',
                    marginTop: '10%',
                    textAlign: 'center'

                },
                margin: '0 auto',
            },
            myText: {
                marginTop: '2%'
            },
            myButton: {
                marginTop: '10%',
                textAlign: 'center'
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
            loginLink: {
                textDecoration: 'none',
                fontWeight: 'bold',
                color: theme.palette.primary.main
            },
            imageDiv: {
                width: '100%',
                textAlign: 'center'
            },
            iconColor: {
                color: theme.palette.secondary.main
            },
            input: {
                display: 'none',

            }
        }
    )
)


const PlotInformation = ({ model }) => {

    const classes = useStyle();


    return (
        <div className={classes.root}>
            {/* { !model.open ?  ""  
            : <AlertDialog setProceed={model.setProceed} proceed={model.proceed} open={model.open} setOpen={model.setOpen} handleNext={handleNext} /> }
             */}
            <Grid container>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <Paper elevation={0} className={classes.myPaper}>


                        <div className={classes.phoneCnicDiv} >

                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="totalAmount"
                                    label="Total Amount"
                                    variant="outlined"
                                    type="number"
                                    value={model.amount}
                                    color="primary"
                                    onChange={(e) => model.setAmount(e.target.value)}
                                    helperText={model.amount <= 0 ? <span>Please specify total amount</span> : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MoneyOutlined className={classes.iconColor} />
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
                                        value={model.procedure}
                                        label="Procedure"
                                        onChange={(e) => {
                                            model.setProcedure(e.target.value)
                                            if (e.target.value === "Installment") {
                                                console.log("Installment Procedure")
                                               
                                            }
                                            else if (e.target.value === "Full Payment") {
                                                console.log("Full Payment Procedure")
                                            }
                                            else if (e.target.value === "Half Payment") {
                                                console.log("Half Procedure")
                                            }
                                            else {
                                                console.log("Unknown Procedure")
                                            }
                                        }}
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
                                    <FormHelperText> {model.procedure === "" ? <span  >Please specify procedure</span> : ""} </FormHelperText>
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
                                    disabled={!(model.procedure === "Installment")}
                                    value={(model.procedure !== "Installment") ? 0 : model.totalInstallment}
                                    onChange={(e) => {
                                        model.setTotalInstallment(e.target.value)
                                    }}
                                    helperText={model.totalInstallment === 0 ? <span  >Please fill your first installment</span> : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <HourglassEmptyOutlined className={classes.iconColor} />
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
                                        disabled={!(model.procedure === "Installment")}
                                        value={model.duration}
                                        label="Installment Duration"
                                        onChange={(e) => model.setDuration(e.target.value)}
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
                                    <FormHelperText>{model.duration === "" ? <span  >Please select duration</span> : ""}</FormHelperText>
                                </FormControl>
                            </div>
                        </div>

                        {/* <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="firstInstallment"
                                    label="First Installment"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    disabled
                                    value={model.totalInstallment !== 0 && model.totalInstallment ? Number(model.amount)/Number(model.totalInstallment) : 0}
                                    helperText={ model.totalInstallment === 0 ? <span  >Please specify total amount</span> : "" }
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
                                    value={model.procedure === "Installment" ? Number(model.amount)/Number(model.totalInstallment) : model.givenAmount}
                                    disabled={ model.procedure !== "Short Payment" }
                                    onChange={(e) => {
                                       
                                            model.setGivenAmount(e.target.value)
                                        
                                        
                                     } }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                        </div> */}
                        <div className={classes.phoneCnicDiv} >

                            <div className={classes.cnicDiv} >

                                <TextField
                                    className={classes.pairElement}
                                    id="expence"
                                    label="Expance"
                                    variant="outlined"
                                    type="number"
                                    
                                    color="primary"
                                    value={model.expanse}
                                    onChange={(e) => model.setExpanse(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountBalanceWalletOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />

                            </div>

                            <div className={classes.phoneDiv} >
                                
                                 <TextField
                                    className={classes.pairElement}
                                    id="balance"
                                    label="Balance"
                                    variant="outlined"
                                    type="number"
                                    disabled
                                    color="primary"
                                    value={Number(model.amount) + Number(model.expanse) }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountBalanceOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />

                        </div>


                        </div>


                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}

export default PlotInformation;