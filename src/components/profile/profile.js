import React from 'react'
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(
    (theme) => (
        {
            root : {

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

                    <Grid item>

                    </Grid>
                    <Grid item>
                        
                    </Grid>

                </Grid>

            </Paper>
        </div>
    )
}