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
            divContain : {
                display : 'flex',
                width : '100%'
            },
            myImage : {
                width : '50%',
                height : '80%',
                opacity : 0.2,
                transform : 'rotate(20deg)'
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

                <div className={classes.divContain} >
                    <h2 style={{ position : 'absolute' }} >Application Form</h2>
                    <div style={{ position : 'relative', textAlign : 'right' }}>
                    <img  alt="" src={FORMICON} className={classes.myImage} />
                    </div>
                    
                </div>

            </Paper>
        </div>
    )

}

export default CardForm;