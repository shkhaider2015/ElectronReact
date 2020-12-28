import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Success from './payment/success';
import { SpinnerLoading } from "../components/loading/loadingSpinner";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%', display: 'flex',
        flexDirection: 'column', margin: 0,
        paddingTop: 50, paddingLeft: 100,
        paddingRight: 100, paddingBottom: 50
    },
    instructions: {
        color: 'red'
    },
    button: {
        color: theme.palette.primary.main
    },
    success: {
        color: 'green'
    }
}));

const MyProgress = ({ isLoading, reset, succeed }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            { isLoading ? <div style={{ width: '100%', textAlign: 'center' }} > <SpinnerLoading />
            </div>
                :
                succeed ?
                    (
                        <Success open={true} title="Client created successfully" />
                    )
                    :
                    (
                        <div style={{ width: '100%', textAlign: 'center' }} >
                            <Typography className={classes.instructions}>
                                Oop's something wrong
                        </Typography>
                            <Button onClick={reset} className={classes.button}>
                                Reset
                        </Button>
                        </div>
                    )

            }



        </div>
    );
}

export { MyProgress }