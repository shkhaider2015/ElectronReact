import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import FORMICON from "../../RawData/forms.png";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                marginTop: '2%',
                marginLeft: '2%',
                width: theme.spacing(40),
                height: theme.spacing(20),
                // border: '3px dashed #1c87c9'

            },
            myPaper: {
                width: '98%',
                height: '100%',
                paddingLeft: '2%',
            },
            divContain: {
                display: 'flex',
                width: '100%'
            },
            h1TagDiv: {
                position: 'absolute',
                marginTop: theme.spacing(6),
            },
            imageDiv : {
                position: 'relative', 
                textAlign: 'right', 
            },
            myImage: {
                width: '50%',
                height: '80%',
                opacity: 0.2,
                transform: 'rotate(20deg)'
            }
        }
    )
)

const dummyData = {
    title: 'Application Form',
    backgroundColor: 'rgb(232, 197, 58)',
    image: FORMICON
}

function CardForm({ mydata }) {
    const classes = useStyle();

    // console.log("value --> ",mydata)

    return (
        <div className={classes.root} >
            <Paper elevation={2} className={classes.myPaper} style={{ backgroundColor : mydata.backgroundColor }} >

                <div className={classes.divContain} >
                    <div className={classes.h1TagDiv} >
                        <h2 > {mydata.title} </h2>
                    </div>
                    <div className={classes.imageDiv} >
                        <img alt="" src={mydata.image} className={classes.myImage} />
                    </div>
                </div>

            </Paper>
        </div>
    )

}

export default CardForm;