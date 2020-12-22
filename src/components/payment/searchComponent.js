import { Avatar, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react'


const useStyle = makeStyles({
    root : {
        width : '100%',
        display : 'flex',
        marginTop : '1%',
        paddingLeft : '2%'
    },
    name : {
        marginLeft : '2%',
        display : 'flex',
        flexDirection : 'column',
        textAlign : 'left'
    }
})

const SearchComponent = ({ data }) =>
{
    const classes = useStyle();

    return(
        <div className={classes.root} elevation={2} >
            { console.log("jjjjj : ", data) }
            <div>
                <Avatar alt="name" src={data['personal']['imageURI']} />
            </div>
            <div className={classes.name} >
                <span style={{ fontSize : 14, fontWeight : 'bold' }} >{data['personal']['name']}</span>
                <span style={{ fontSize : 12, opacity : 0.7 }} >{data['personal']['email']}</span>
            </div>
        </div>
    )
}


export default SearchComponent;