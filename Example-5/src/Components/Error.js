import React from "react";
import { useParams } from "react-router-dom";

function Error() {
  const { id } = useParams();
  return <div>Error!, Error Code {id}</div>;
}

export default Error;
