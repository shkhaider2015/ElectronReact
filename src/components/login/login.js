import { Paper, TextField } from '@material-ui/core'
import React from 'react'


export default function Login() {
    return (
        <div>
            <Paper elevation={3}>
                <form noValidate>

                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        color="primary"
                    />

                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        color="primary"
                    />

                </form>
            </Paper>
        </div>
    )
}