import React from "react"
import { useNavigate } from "react-router-dom"

export default function KingdomSelector({ data }) {
    const navigate = useNavigate()

    //https://stackoverflow.com/a/70673631
    function handleChange(e) {
        if (e.target.value) {
            navigate(`/countries/${e.target.value}`)
        }
        console.log("change kingsdoms")
    }

    return (
        <>
            <select name="kingdoms" id="kingdoms" onChange={handleChange}>
                <option value="">Pick a Kingdom</option>
                {data.map((kingdom, index) => (
                    <option key={index} value={kingdom.cca2}>
                        {kingdom.name.common}
                    </option>
                ))}
            </select>
        </>
    )
}