import { Button, Dialog } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router';
import GIF from "../../RawData/successgif.gif";


const Success = ({ open, title }) => {

    const navigate = useNavigate()

    return (
        <Dialog
        open={open}
        maxWidth="md"
        >
            <div 
            style={{ height: '100%', display: 'flex', 
                    flexDirection: 'column', margin: 0, 
                    paddingTop: 50, paddingLeft : 100,
                    paddingRight : 100, paddingBottom : 50 }} >

                <div style={{ width: 'auto', }}>

                    <div style={{ width : '40%', height : '40%' }} >  <img alt="gif" src={GIF} /> </div>
                    <div> <span> {title} </span> </div>
                    <div style={{ width : '100%', marginTop : '2%' }} > 
                    <Button style={{ width : '100%' }} color="primary" variant="contained" onClick={() => {
                        if(title === "Client created successfully")
                        {
                            navigate(-1)
                        }
                        else
                        {
                            navigate(-2)
                        }
                    }}  >Back To Home</Button> </div>
                </div>
            </div>
        </Dialog>
    )
}


export default Success;