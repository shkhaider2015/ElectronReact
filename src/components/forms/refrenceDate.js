import { TextField } from '@material-ui/core'
import React from 'react'

function RefrenceDate()
{
    return(
        <div
        style={{
            width : '100%',
            display : 'flex'
        }}
        >
            <div>
                <TextField
                id="refrence"
                label="Refrence"
                type="text"
                />
            </div>
            <div
            style={{
                marginLeft : 'auto',
                marginRight : 0
            }}
            >
            <TextField
                id="date"
                label="Date"
                type="text"
                />

            </div>
        </div>
    )
}


export default RefrenceDate