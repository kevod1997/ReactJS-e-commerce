import React, { useEffect, useState } from 'react'
import FetchLayout from './FetchLayout';

function FetchContainer() {

    const [actividad, setActividad] = useState([]);
    useEffect(()=>{

        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res)=> res.json())
        .then((json)=> {
            setActividad(json.bpi)
        })
        .catch((e)=>console.log(e))
        .finally(()=> console.log('listo peluca'))

    }, []);
  return (
    <>
    <FetchLayout actividad={actividad} />
    {/* <div>{JSON.stringify(actividad.bpi)}</div> */}
    </>
  )
}

export default FetchContainer