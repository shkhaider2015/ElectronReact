import { makeStyles, TextField } from "@material-ui/core";
import React from "react";


const useStyle = makeStyles(
    (theme) => 
    (
        {
            root : {

            }
        }
    )
)

function ApplicationForm()
{
    const classes = useStyle();

    return(
        <div>
            <form>
                <div>
                    <TextField
                    id="name"
                    label="Full Name"
                    type="text"
                    />
                </div>
                <div>
                    <TextField
                    id="Parent"
                    label="Parent"
                    type="text"
                    />
                </div>
                <div>
                    <TextField
                    id="name"
                    label="Full Name"
                    type="text"
                    />
                </div>
                <div>
                    <TextField
                    id="name"
                    label="Full Name"
                    type="text"
                    />
                </div>

            </form>

        </div>
    )
}


export default ApplicationForm;