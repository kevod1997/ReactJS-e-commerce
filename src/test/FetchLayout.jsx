import React from "react";
import FetchBtc from "./FetchBtc";

function FetchLayout({ actividad, x }) {
    return (
        <>
    {Object.keys(actividad).map((btc) => (
         <FetchBtc btc={btc} key={x} />
    ))
    }
    </>
    )
}


export default FetchLayout;
