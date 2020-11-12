import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import FORMICON from "../../RawData/forms.png";

const useStyle = makeStyles(
    (theme) => (
        {
            root : {

            },
            myPaper : {
                width : theme.spacing(40),
                height : theme.spacing(20),
                backgroundColor : 'rgb(232, 197, 58)'
            },
            myImage : {
                width : '50%',
                height : '80%',
                opacity : 0.3,
                rotate : '180deg'
            }
        }
    )
)

function CardForm()
{
    const classes = useStyle();
    return(
        <div>
            <Paper elevation={2} className={classes.myPaper} >

                <img alt="" src={FORMICON} className={classes.myImage} />

            </Paper>
        </div>
    )

}

export default CardForm;