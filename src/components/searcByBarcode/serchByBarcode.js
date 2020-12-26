import React from 'react'
import ReactBarCodeReader from "react-barcode-reader";
import BarCodeGif from "../../RawData/Frame4443.gif";
import { db } from "../../config/firebase";

const SearchByBarcode = () =>
{

    const [code, setCode] = React.useState(null)

    React.useEffect(
        () => {
            if(code)
            {
                console.log("UseEffect() Runs ....")
                db.collection('clients').where("personal.id", '==', code).onSnapshot((querySnapShot) => {
                    querySnapShot.forEach((doc) => {
                        if(doc.exists)
                        {
                            console.log("Data Exist", doc.data())

                        }
                        else
                        {
                            console.log("Not Exist")
                        }
                    })
                })
            }
        },
        [code]
    )

    const handleScan = (data) =>
    {
        console.log("Scan : ",data.toString())
        setCode(data.toString())
        
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