import React from 'react';
import FetchBtc from './FetchBtc';

function FetchLayout({actividad}) {
  return (
    <> {Object.keys(actividad).map((btc) =>(
        <FetchBtc btc={btc}/>
    ))
    }
        {/* {actividad.map((btc)=>(
            <FetchBtc btc={btc}/>
        ))} */}
    </>
  )
}

export default FetchLayout