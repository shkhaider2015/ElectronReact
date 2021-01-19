import React from 'react'
import { useBarcode } from 'react-barcodes'



export const BarcodeCanvas = ({ id }) =>
{
    const { inputRef } = useBarcode({
        value: id,
        options: {
          displayValue: false,
          background: '#FFFFFF00'
        }
    
      })
    return <canvas ref={inputRef} style={{ width : '100%' }} />
}