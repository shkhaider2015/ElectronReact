import React from 'react'
import { useLocation, useNavigate } from 'react-router';

const IdCardGenrator = () =>
{
    const navigate = useNavigate();
    const { state } = useLocation();
    const { obj } = state

    return(
        <div>
            <h1>Id Card genrator</h1>
            <h3>Check name {obj['personal']['name']} </h3>
        </div>
    )
}


export default IdCardGenrator;