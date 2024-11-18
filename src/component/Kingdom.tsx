import { useParams } from "react-router-dom";
import React from "react";

function Kingdom() {
  const { id } = useParams();
  return <h1>Details for Kingdom: {id}</h1>;
}

export default Kingdom;
