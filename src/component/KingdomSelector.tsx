import React from "react"
import { useNavigate } from "react-router-dom"

export default function KingdomSelector({ data }) {
    const navigate = useNavigate()

    //https://stackoverflow.com/a/70673631
    function handleChange(e) {
        if (e.target.value !== "Default" ) {
          navigate(`/kingdoms/${e.target.value}`)
        }
        console.log("change kingsdoms")
    }


    return (
        <>
            <select name="kingdoms" id="kingdoms" onChange={handleChange}>
                <option value="Default">Pick a Kingdom</option>
                {data.map((kingdom, index) => (
                    <option key={index} value={kingdom.name.common}>
                        {kingdom.name.common}
                    </option>
                ))}
            </select>
        </>
    )
}