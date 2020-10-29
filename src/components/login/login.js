import { Button, Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                
            },
            myPaper: {
                padding: '5%',
                width: '15%',
                [theme.breakpoints.down('xs')]: {
                    width: '80%',
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
            }
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
                            />
                        </div>

                        <div className={classes.myText}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                color="primary"
                            />
                        </div>

                        <div className={classes.myButton}>
                            <Button variant="contained" color="primary">
                                Login
                            </Button>
                        </div>

                        <div style={{ marginTop : '2%'}} >
                            <Typography variant="caption" >
                                Don't have an account ? <Link href="#">Sign up</Link> here
                            </Typography>
                        </div>

                    </form>
                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}