import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        instructions: {
            color : 'red'
        },
        button: {
            color : theme.palette.primary.main
        },
        success : {
            color : 'green'
        }
    },
}));

const MyProgress = ({ isLoading, reset, succeed }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            { isLoading ? <div style={{ width: '100%', textAlign: 'center' }} > <CircularProgress color="primary" />
                 </div>
                :
                succeed ?
                (
                    <div style={{ width: '100%', textAlign: 'center' }} >
                        <Typography className={classes.success}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={reset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
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

export {MyProgress}