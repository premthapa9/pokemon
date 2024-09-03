import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TbWeight } from "react-icons/tb";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import useFetch from "../hooks/useFetch";
import { POKE_ID, POKE_SPECIES } from "../constant";
import { getColor } from "../utils";

const Single = () => {
  const { id } = useParams();
  console.log(id);
  const { data, iserror, loading } = useFetch(POKE_ID + id);
  const { data: species } = useFetch(POKE_SPECIES + id);
  console.log(data);
  console.log(species);

  if (!species) {
    return <h1>Loading....</h1>;
  }
  const getText = (input) => {
    const val = input.find((el) => el.language.name === "en");
    return val.flavor_text;
  };
  getText(species?.flavor_text_entries);
  console.log(getColor("grass"));
  return (
    <div
      className="flex flex-col border-2 p-3 w-[500px] w-min-[500px] mx-auto"
      style={{
        backgroundColor: `${
          species?.color?.name === "white"
            ? `${getColor(data?.types?.[0].type.name)}`
            : species?.color?.name
        }`,
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link to={"/"}>
            <FaArrowLeft color="white" />
          </Link>
          <p className="ml-2 text-white text-2xl">
            {data?.name?.charAt(0).toUpperCase() + data?.name?.substr(1)}
          </p>
        </div>
        <p className="text-white text-2xl">#{id}</p>
      </div>
      <div className="bg-white border-2 rounded-lg  mt-36 relative">
        <div
          className="flex justify-evenly items-center absolute -top-32 left-[50%]  w-full "
          style={{ transform: "translateX(-50%)" }}
        >
          {id == 1 ? (
            <FaArrowLeft
              color="white"
              style={{ visibility: id == 1 ? "hidden" : "visible" }}
            />
          ) : (
            <Link to={`/${+id - 1}`}>
              <FaArrowLeft
                color="white"
                style={{ visibility: id == 1 ? "hidden" : "visible" }}
              />
            </Link>
          )}

          <img
            src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt=""
            className="mx-1 h-52 w-52"
          />
          {id == 649 ? (
            <FaArrowRight
              color="white"
              style={{ visibility: id == 649 ? "hidden" : "visible" }}
            />
          ) : (
            <Link to={`/${+id + 1}`}>
              <FaArrowRight
                color="white"
                style={{ visibility: id == 649 ? "hidden" : "visible" }}
              />
            </Link>
          )}
        </div>
        <br />
        <div className="mt-24 flex justify-center items-center gap-5">
          {data?.types?.length > 0 &&
            data?.types.map((el, ind) => (
              <p
                key={ind}
                className={`py-1 px-2 rounded-lg  text-white`}
                style={{ backgroundColor: `${getColor(el.type.name)}` }}
              >
                {el?.type?.name}
              </p>
            ))}
        </div>
        <h1
          className="text-center my-5 font-bold"
          style={{ color: `${species?.color?.name}` }}
        >
          About
        </h1>
        <div className="flex justify-evenly items-center mb-10">
          <div className="flex flex-col justify-between  items-center h-[68px]">
            <div className="flex items-center gap-3">
              <TbWeight color="black" />
              <p>{data?.weight}kg</p>
            </div>
            <p className="font-extralight text-gray-500 text-sm">Weight</p>
          </div>
          <div className="flex flex-col justify-between items-center h-[68px]  border-x-2 px-5">
            <div className="flex items-center gap-3">
              <LiaRulerVerticalSolid color="black" />
              <p>0.{data?.height}m</p>
            </div>
            <p className="font-extralight text-gray-500 text-sm">Height</p>
          </div>
          <div className="flex flex-col justify-between items-center h-[68px]">
            <div className="flex items-center justify-start flex-col">
              {data?.abilities?.length > 0 &&
                data?.abilities?.map((el, ind) => (
                  <p key={ind}>{el.ability.name}</p>
                ))}
            </div>
            <p className="font-extralight text-gray-500 text-sm ">Moves</p>
          </div>
        </div>
        <p className="my-5 px-4">{getText(species?.flavor_text_entries)}</p>
        <h1
          className="text-center font-extrabold"
          style={{ color: `${species?.color?.name}` }}
        >
          Base stats
        </h1>
        <div className="p-3 flex">
          <div className="flex-[0.1] pr-4 gap-1">
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              HP
            </p>
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              ATK
            </p>
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              DEF
            </p>
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              SATK
            </p>
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              SDEF
            </p>
            <p
              style={{
                color: `${
                  species?.color?.name === "white"
                    ? `${getColor(data?.types?.[0].type.name)}`
                    : species?.color?.name
                }`,
              }}
            >
              SPD
            </p>
          </div>
          <div className="flex-1 flex-row border-l-2 pl-4 gap-2">
            {data?.stats?.length > 0 &&
              data?.stats.map((el, ind) => (
                <div key={ind} className="flex items-center gap-2 ">
                  <p className="pr-1 flex-[0.1]">{el.base_stat}</p>
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      flex: 1,
                      backgroundColor: "lightgray",

                      position: "relative",
                      display: "flex",
                      gap: "1rem",
                      justifySelf: "start",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        height: "4.5px",

                        backgroundColor: `${
                          species?.color?.name === "white"
                            ? `${getColor(data?.types?.[0].type.name)}`
                            : species?.color?.name
                        }`,
                        width: `${Math.min(el.base_stat, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
