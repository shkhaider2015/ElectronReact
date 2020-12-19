import React from 'react'
import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import MyImage from "../../RawData/default.jpg";
import ActivityTable from "./activity_table/activityTable";

const useStyle = makeStyles(
    {
        root: {
            border: '1px solid black',
            width: '100%'

        },
        paper: {
            width: '80%',
            marginTop: '3%',
            margin: '0 auto',
            padding: '2%'
        },
        profileImageGrid: {
            position: 'relative'
        },
        profileImage: {
            width: '100%',
            height: '80%',
            border: '2px solid rgba(177, 36, 224)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);',
            alignItems: 'bottom'
        },
        nameEmailGrid: {
            position: 'relative',
        },
        nameEmail: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            marginBottom: '10%',
            marginLeft: '5%',
        },
        nameEmailName: {
            fontSize: '28px',
            fontWeight: 'bold'
        },
        nameEmailEmail: {
            fontSize: '16px'
        },
        activityText: {
            margin: '0 auto',
            width: '80%'
        },
        activityDiv: {
            margin: '0 auto',
            width: '85%',
            marginBottom: '5%'
        }
    }
)

const ClientProfile = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container>

                <Grid item> 
                    <div style={{ display : 'flex', flexDirection : 'row' }} >
                    <div>
                        <Avatar alt="name" src={data['imageURI']} />
                    </div>
                    <div style={{ display : 'flex', flexDirection : 'column' }} >
                        <span style={{ fontSize: 14, fontWeight: 'bold' }} >Name</span>
                        <span style={{ fontSize: 12, opacity: 0.7 }} >Email</span>
                    </div>
                    </div>
                </Grid>

                <Grid item>
                    <div>
                        
                    </div>
                    <div>
                        // payment
                    </div>
                </Grid>


            </Grid>

        </div>
    )
}

export default ClientProfile;