import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Kingdom({ kingdom }) {
    const { id } = useParams();

    useEffect(() => {
        console.log(id, "ID Loaded")
    }, [id])


    return (
        <>
            <h1 className="country">Country: {kingdom.name.common}  </h1>
            <img src={kingdom.flags.png} width={100} />
            <div>
                <h2>Captital:</h2>
                <h2>{kingdom.capital}</h2>
            </div>
            <div>
                <h2>Located In:</h2>
                <h2>{kingdom.subregion}</h2>
            </div>
        </>
    );
}
