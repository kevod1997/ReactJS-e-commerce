import React from "react";
import FetchBtc from "./FetchBtc";

function FetchLayout({ actividad }) {

    Object.entries(actividad).forEach(val => {
        return <FetchBtc btc={val} key={val.code} />;
    });


//     actividad.forEach(element => {
//         return <FetchBtc btc={element} key={currency} />;
// });
}

export default FetchLayout;
