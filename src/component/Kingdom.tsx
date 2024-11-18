import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

function Kingdom() {
  const { id } = useParams();
    
  useEffect(() => {
    console.log(id)
  },[])

  return(
    <>
    <div>{id}</div>
    </>
  );
}

export default Kingdom;
