import React, { useEffect, useState } from "react";
import { MYAPI } from "../constant";
import Cards from "./Cards";
import { MdCatchingPokemon } from "react-icons/md";
import { useGlobal } from "../context/store";

const Home = () => {
  const { data: mydata, loading, iserror, query, setQuery } = useGlobal();

  //   const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [fildata, setFildata] = useState(null);

  // async function getData() {
  //   const res = await fetch(MYAPI + 649);
  //   const json = await res.json();
  //   if (res.ok) {
  //     setData(json);
  //     setFildata(json?.results);
  //   }
  //   // setPage(page + 1);
  // }

  function throttle(cb, limit) {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < limit) return;
      last = now;
      cb(...args);
    };
  }

  useEffect(() => {
    if (query.length > 0) {
      const filone = mydata?.results.filter((el, ind) =>
        el.name.toLowerCase().includes(query.toLowerCase())
      );
      setFildata(filone);
    } else {
      setFildata(mydata?.results);
    }
  }, [query, mydata]);

  useEffect(() => {
    setFildata(mydata?.results);
  }, []);

  // useEffect(() => {
  //   setData(items);
  // }, [items]);
  // const handleScroll = throttle(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 300 >
  //       document.documentElement.offsetHeight &&
  //     data?.results.length < 360
  //   ) {
  //     getData();
  //   }
  // }, 800);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(myval);
  return (
    <div className="relative">
      <div className="p-3 border-2 fixed top-0 bg-red-800 w-full mb-96">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MdCatchingPokemon color="white" size={34} />
            <h1 className="text-2xl text-white ml-4 ">Pokedex</h1>
          </div>
          <input
            type="text"
            placeholder="Enter Pokemon Name"
            className="p-1 outline-none w-64 border-none rounded-md focus:border-sky-100"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="border-4 border-red-800 mt-12 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3  items-center">
        {fildata?.length > 0 ? (
          fildata?.map((el, ind) => <Cards key={el.name} {...el} />)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
