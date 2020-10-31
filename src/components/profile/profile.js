import React from 'react'
import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import MyImage from "../../RawData/default.jpg";

const useStyle = makeStyles(
    (theme) => (
        {
            root : {
                border : '1px solid black',
                width : '100%'

            },
            paper : {
                width : '80%',
                marginTop : '3%',
                margin : '0 auto',
                padding : '2%'
            },
            profileImage : {
                width : theme.spacing(30),
                height : theme.spacing(30),
                border : '1px solid black'
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
                            <Avatar alt="Shakeel Haider" src={MyImage} className={classes.profileImage} />                   
                    </Grid>
                    <Grid item md={8}>
                        <h1 >Shakeel Haider</h1>
                        <h4 style={{ opacity : 0.5}} >shkhaider2015@gmail.com</h4>
                    </Grid>

                </Grid>

            </Paper>
        </div>
    )
}