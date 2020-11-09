import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from "react-router-dom";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                
            },
            myPaper: {
                padding: '5%',
                width: '30%',
                [theme.breakpoints.down('md')]: {
                    width: '20%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '30%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '50%',
                    marginTop : '10%',
                    textAlign: 'center'

                },
                marginTop: '5%',
                margin: '0 auto',
            },
            myText: {
                marginTop: '5%'
            },
            myButton : {
                marginTop: '10%',
                textAlign : 'center'
            },
            myElements : {
                 width : '100%',
            },
            phoneCnicDiv : {
                display : 'flex',
                width : '100%',
                marginTop : '5%',
            },
            cnicDiv : {
                width : '45%'
            },
            phoneDiv : {
                width : '45%',
                marginLeft : 'auto',
                marginRight : "0"
            },
            loginLink : {
                textDecoration : 'none',
                fontWeight : 'bold',
                color : theme.palette.primary.main
            },
        }
    )
)

export default function SignUp() {

    const classes = useStyle();

    return (
        <div className={classes.root}>  <Grid container>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >

                <Paper elevation={2} className={classes.myPaper}>
                    <form noValidate>

                    <div >
                            <TextField
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                type="text"
                                color="primary"
                                className={classes.myElements}
                            />
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                            <TextField
                                id="cnic"
                                label="CNIC"
                                variant="outlined"
                                type="text"
                                color="primary"
                                
                            />
                            </div>
                            <div className={classes.phoneDiv} >
                            <TextField
                                id="phone"
                                label="Phone No. "
                                variant="outlined"
                                type="text"
                                color="primary"
                                
                            />
                            </div>
                        </div>
                        <div className={classes.myText}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                color="primary"
                                className={classes.myElements}
                            />
                        </div>

                        <div className={classes.myText}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                color="primary"
                                className={classes.myElements}
                            />
                        </div>

                        <div className={classes.myButton}>
                            <Button 
                            variant="contained" 
                            color="primary"
                            className={classes.myElements}
                            >
                                Sign Up
                            </Button>
                        </div>

                        <div style={{ marginTop : '2%'}} >
                            <Typography variant="caption" >
                                Already have an account ?  <Link to="/login" className={classes.loginLink} >Login</Link> here
                            </Typography>
                        </div>

                    </form>
                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}