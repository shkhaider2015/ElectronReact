import React from 'react'
import ReactBarCodeReader from "react-barcode-reader";
import BarCodeGif from "../../RawData/barcode.gif";

const SearchByBarcode = () =>
{


    const handleScan = (data) =>
    {
        console.log("Scan : ", data)
    }
    const handleError = (err) =>
    {
        console.log("Error : ", err)
    }

    return(
        <div style={{ display : 'grid', placeItems : 'center' }} >
            <img alt="search" src={BarCodeGif} />
            <ReactBarCodeReader 
            onError={(e) => handleError(e)}
            onScan={(data) => handleScan(data)}
            />
        </div>
    )
}

export default SearchByBarcode;