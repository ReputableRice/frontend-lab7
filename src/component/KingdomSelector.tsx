import React from "react"
import { useNavigate } from "react-router-dom"

export default function KingdomSelector({ data }) {
    const navigate = useNavigate()

    //https://stackoverflow.com/a/70673631
function handleChange(e) {
    const selectedKingdom = data.find((kingdom) => kingdom.cca2 === e.target.value);
    if (selectedKingdom) {
        navigate(`/countries/${e.target.value}`, { state: { kingdom: selectedKingdom } });
    }
}

    return (
        <>
            <select name="kingdoms" id="kingdoms" onChange={handleChange} className="border-neutral-900 border-4 rounded-lg mb-6">
                <option value="">Select a Country</option>
                {data.map((kingdom, index) => (
                    <option key={index} value={kingdom.cca2}>
                        {kingdom.name.common}
                    </option>
                ))}
            </select>
        </>
    )
}