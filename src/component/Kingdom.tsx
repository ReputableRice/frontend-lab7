import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Kingdom({ kingdom }) {
    const { state } = useLocation()
    console.log("State:", state);
    console.log("State data:", state ? state.data : "No data found");
    console.log("State data name:", state?.data?.name); // Check name object
    console.log("State data name.common:", state?.data?.name?.common); // Check common property
    return (
        <>
            {state ? <div>{ }</div> : <div>Nothing</div>}
            <h1 className="country">Country: {kingdom.name.common}  </h1>
            <img src={kingdom.flags.png} width={400} />
            <div className="label">
                <h2>Captital:</h2>
                <h2>{kingdom.capital}</h2>
            </div>
            <div className="label">
                <h2>Located In:</h2>
                <h2>{kingdom.subregion}</h2>
            </div>
        </>
    );
}
