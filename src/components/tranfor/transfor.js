import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



const Transfor = () =>
{

    const { state } = useLocation();
    const navigate = useNavigate();
    const { obj } = state

    return <div>
        <h1 onClick={() => navigate(-1)} > click here to go back </h1>
        <h1>Transfor Form for {obj['personal']['name']} </h1>
    </div>
}


export default Transfor;