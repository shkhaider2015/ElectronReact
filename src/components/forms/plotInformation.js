import { Avatar, Button, Grid, makeStyles, Paper, TextField,
     Typography, InputAdornment, Fab, LinearProgress, InputLabel, FormControl, Select } from '@material-ui/core'
import {
    Email, VpnKey as Password, PermIdentity as Name,
    CreditCard as CNIC, Phone, AddPhotoAlternate as AddPhotoAlternateIcon, Smartphone, LocationOn
} from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../RawData/jj2.png";
import { UserModel } from "../../models/userModels";
import { firebase, storage, auth, db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                // backgroundImage: `url(${BackgroundImage})`,
                // backgroundRepeat: 'repeat-y',
                // backgroundSize: '100% 100%',
                // backgroundPosition: '0% 0%',
                marginTop : '6.55%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingBottom : '3%',
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
                marginLeft : '0',
                display : 'flex'
            },
            phoneDiv: {
                width: '45%',
                marginLeft: 'auto',
                marginRight: "0"
            },
            pairElement : {
                width : '100%'
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
                color: theme.palette.primary.main
            },
            input: {
                display: 'none',

            },
            block : {
                width : '46%',
                marginRight : 0,
                marginLeft : 'auto'
            },
            square : {
                width : '46%',
                marginLeft : 0,
            }
        }
    )
)


const PersonalInformation = ({ model }) => {

    const classes = useStyle();

    return (
        <div className={classes.root}> 
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
                            {/* <TextField
                            className={classes.pairElement}
                                id="plot"
                                label="Plot"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.plot}
                                onChange={(e) => model.setPlot(e.target.value) }
                                helperText={ model.plot === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Name className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            /> */}
                            <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Area</InputLabel>
                                    <Select
                                        native
                                        value={model.area}
                                        onChange={(e) => model.setArea(e.target.value)}
                                        label="Area"
                                        inputProps={{
                                            name: 'area',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Plot</option>
                                        <option value={20}>Home</option>
                                        <option value={30}>Flat</option>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.phoneDiv} >
                            <TextField
                            className={classes.pairElement}
                                id="measurment"
                                label="Measurement"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.measurement}
                                onChange={(e) => model.setMeasurement(e.target.value) }
                                helperText={ model.measurement === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Name className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            </div>
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.square}
                                    id="square"
                                    label="Sq. Yds."
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.square}
                                    onChange={(e) => model.setSquare(e.target.value) }
                                    helperText={ model.square === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Smartphone className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                                <TextField
                                    className={classes.block}
                                    id="square"
                                    label="Block"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.square}
                                    onChange={(e) => model.setSquare(e.target.value) }
                                    helperText={ model.square === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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
                                    id="category"
                                    label="Category"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.category}
                                    onChange={(e) => model.setCategory(e.target.value) }
                                    helperText={ model.category === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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
                                    id="nature"
                                    label="Nature"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.nature}
                                    onChange={(e) => model.setNature(e.target.value) }
                                    helperText={ model.nature === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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
                                    id="type"
                                    label="Type"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.type}
                                    onChange={(e) => model.setType(e.target.value) }
                                    helperText={ model.type === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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
                                    id="Site Plan"
                                    label="Site Plan"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.sitePlane}
                                    onChange={(e) => model.setSitePlane(e.target.value) }
                                    helperText={ model.sitePlane === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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
                                    id="purpose"
                                    label="Purpose"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.purpose}
                                    onChange={(e) => model.setPurpose(e.target.value) }
                                    helperText={ model.purpose === ""? <span style={{ color : 'red' }} >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
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

                        

                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}

export default PersonalInformation;