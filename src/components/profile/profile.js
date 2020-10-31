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
                width : '100%',
                height : '80%',
                border : '2px solid rgba(177, 36, 224)',
                boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);',
                alignItems : 'bottom'
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

                    <Grid item md={3} lg={3} sm={3} xs={12} style={{ border : '1px solid black', position : 'relative' }}>
                            <Avatar alt="Shakeel Haider" src={MyImage} className={classes.profileImage} />                   
                    </Grid>
                    <Grid item md={9} lg={9} sm={9} xs={12} style={{ border : '1px solid black',position : 'relative' }}>
                        <div style={{ position : 'absolute', bottom : 0, left : 0 }} >
                        <h1 >Shakeel Haider</h1>
                        <h4 style={{ opacity : 0.5}} >shkhaider2015@gmail.com</h4>
                        </div>
                    </Grid>

                </Grid>

            </Paper>
        </div>
    )
}