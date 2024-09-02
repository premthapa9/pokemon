import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ name, url }) => {
  const [details, setDetails] = useState(null);

  async function getDetails(url) {
    const res = await fetch(url);
    const json = await res.json();
    if (res.ok) {
      setDetails(json);
    }
  }

  useEffect(() => {
    getDetails(url);
  }, []);

  return (
    <Link to={`/${details?.id}`}>
      <div className="border-2 flex flex-col justify-evenly p-3 gap-3 items-center rounded-lg cursor-pointer shadow-xl">
        <p className="self-end">#{details?.id}</p>
        <img
          src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${details?.id}.svg`}
          alt=""
          className="h-40 w-40"
        />
        <p className="font-semibold">
          {name.charAt(0).toUpperCase() + name.substr(1)}
        </p>
      </div>
    </Link>
  );
};

export default Cards;
