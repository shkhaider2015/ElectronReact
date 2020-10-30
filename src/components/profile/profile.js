import React from 'react'
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(
    (theme) => (
        {
            root : {
                border : '1px solid black'
            },
            paper : {

            }
        }
    )
)

export default function Profile()
{
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>

                <Grid container>

                    <Grid item md={4}>
                    
                    </Grid>
                    <Grid item md={8}>
                        
                    </Grid>

                </Grid>

            </Paper>
        </div>
    )
}