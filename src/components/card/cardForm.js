import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(
    (theme) => (
        {
            root : {

            }
        }
    )
)

function CardForm()
{
    const classes = useStyle();
    return(
        <div>
            <h1>Card View</h1>
        </div>
    )

}

export default CardForm;