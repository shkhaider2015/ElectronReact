import React from 'react';
import LOGO from "../../RawData/mainassociates_icon.png";
import { SpinnerLoading } from '../loading/loadingSpinner';


const SplashScreen = () => {
    return <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

        <div style={{ height: '80vh', display: 'grid', placeItems: 'center' }} >
            <div >
                <img alt="nn" src={LOGO} style={{ width: '250px', height: '110px' }} />
            </div>

            <div >
                <SpinnerLoading />
            </div>
        </div>
        <div style={{ height: '30vh' }} >

            <div style={{ position: 'absolute', left: 10, bottom: 10}} >
                <span style={{ fontSize : 14, fontWeight : 'bold' }} >Developers Hegengang</span> <br />
                <span style={{ fontSize : 14 }} >Email : shkhaider2015@gmail.com</span>
            </div>

        </div>

    </div>
}


export { SplashScreen }