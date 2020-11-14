import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import FORMICON from "../../RawData/forms.png";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                marginTop: '2%',
                marginLeft: '2%',
                width: '90%',
                height: '45%',

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
                width : theme.spacing(38),
                textAlign : 'center',
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


function CardForm({ obj }) {
    const classes = useStyle();


    return (
        <div className={classes.root} >
            <Paper elevation={2} className={classes.myPaper} style={{ backgroundColor : obj.backgroundColor }} >

                <div className={classes.divContain} >
                    <div className={classes.h1TagDiv} >
                        <h2 > {obj.title} </h2>
                    </div>
                    <div className={classes.imageDiv} >
                        <img alt="" src={obj.image} className={classes.myImage} />
                    </div>
                </div>

            </Paper>
        </div>
    )

}

export default CardForm;