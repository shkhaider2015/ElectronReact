import React from 'react'
import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import MyImage from "../../RawData/default.jpg";
import ActivityTable from "./activity_table/activityTable";

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
            profileImageGrid : {
                position : 'relative'
            },
            profileImage : {
                width : '100%',
                height : '80%',
                border : '2px solid rgba(177, 36, 224)',
                boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);',
                alignItems : 'bottom'
            },
            nameEmailGrid : {
                position : 'relative',
            },
            nameEmail : {
                position : 'absolute', 
                bottom : 0, 
                left : 0, 
                marginBottom : '10%', 
                marginLeft : '5%',
            },
            nameEmailName : {
                fontSize : '28px',
                fontWeight : 'bold'
            },
            nameEmailEmail : {
                fontSize : '16px'
            },
            activityText : {
                margin : '0 auto',
                width : '80%'
            },
            activityDiv : {
                margin : '0 auto',
                width : '85%',
                marginBottom : '5%'
            }
        }
    )
)

export default function Profile()
{
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>

                <Grid container>

                    <Grid item md={3} lg={3} sm={3} xs={3} className={classes.profileImageGrid} >
                            <Avatar alt="Shakeel Haider" src={MyImage} className={classes.profileImage} />                   
                    </Grid>
                    <Grid item md={9} lg={9} sm={9} xs={9} className={classes.nameEmailGrid} >
                        <div className={classes.nameEmail} >
                        <span className={classes.nameEmailName} > Shakeel Haider </span> <br />
                         <span className={classes.nameEmailEmail} > shkhaider2015@gmail.com </span>
                        </div>
                    </Grid>

                </Grid>

            </Paper>
            <div className={classes.activityText} >
                 <h1>Activity</h1>
                </div>

        <div className={classes.activityDiv} >
        <ActivityTable />
        </div>
            
                
        </div>
    )
}