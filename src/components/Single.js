import React from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is the single Page buddy</h1>
    </div>
  );
};

export default Single;
