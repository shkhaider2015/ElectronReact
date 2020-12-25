import React from 'react'
import BarCodeGif from "../../RawData/barcode.gif";

const SearchByBarcode = () =>
{

    return(
        <div style={{ display : 'grid', placeItems : 'center' }} >
            <img alt="search" src={BarCodeGif} />
        </div>
    )
}

export default SearchByBarcode;