import React from 'react';
import LOGO from "../../RawData/mainassociates_icon.png";
import { SpinnerLoading } from '../loading/loadingSpinner';
import { Offline } from "react-detect-offline";
import { CA } from './circulerAnimation';


const SplashScreen = () => {
    return <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

        <div style={{ height: '95vh', display: 'grid', placeItems: 'center' }} >
            <div >
                <img alt="nn" src={LOGO} style={{ width: '300px', height: 'auto', padding: '5%' }} />
            </div>

            <div style={{ display : 'flex', flexDirection : 'row' }} >
            <CA />
            </div>

            <div >
                <div style={{ display: 'flex', flexDirection: 'column', textAlign : 'center' }} >
                    <span style={{ fontSize: 18, color: 'black' }} >Powered By <b>HESOGENS</b> </span>
                    <span style={{ fontSize: 18, color: 'black' }} >Digital Service Provider</span>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                        <span>www.hesogens.com</span><span>&nbsp;|&nbsp;</span>
                        <span>+92-312-2027770</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'red',
            textAlign: 'center',
            color: 'white'
        }} >
            <Offline >Check Your Internet Connection</Offline>
        </div>

    </div>
}


export { SplashScreen }