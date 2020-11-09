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
                width: '15%',
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
                    textAlign: 'center'

                },
                marginTop: '10%',
                margin: '0 auto',
            },
            myText: {
                marginTop: '10%'
            },
            myButton : {
                marginTop: '15%',
                textAlign : 'center'
            },
            myElements : {
                 width : '100%',
            },
            signupLink : {
                textDecoration : 'none',
                fontWeight : 'bold',
                color : theme.palette.primary.main
            },
        }
    )
)

export default function Login() {

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
                                Login
                            </Button>
                        </div>

                        <div style={{ marginTop : '2%'}} >
                            <Typography variant="caption" >
                                Don't have an account ? <Link to="/signup" className={classes.signupLink} >Sign up</Link>  here
                            </Typography>
                        </div>

                    </form>
                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}