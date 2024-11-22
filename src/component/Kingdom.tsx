import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Kingdom() {
    const { state } = useLocation()
    const { kingdom } = state

    return (
        <div className="m-auto mt-8block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="country font-bold text-lg">Country: {kingdom.name.common}  </h1>
            <img src={kingdom.flags.png} width={400} />
            <div className="label mt-5">
                <h2>Captital:</h2>
                <h2>{kingdom.capital}</h2>
            </div>
            <div className="label">
                <h2>Located In:</h2>
                <h2>{kingdom.subregion}</h2>
            </div>
        </div>
    );
}
