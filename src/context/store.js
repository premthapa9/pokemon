import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { MYAPI } from "../constant";

const myglobal = createContext();

const MyGlobalComp = ({ children }) => {
  const [query, setQuery] = useState("");
  const { loading, iserror, data } = useFetch(MYAPI);

  return (
    <myglobal.Provider value={{ data, loading, iserror, query, setQuery }}>
      {children}
    </myglobal.Provider>
  );
};

const useGlobal = () => {
  return useContext(myglobal);
};

export default MyGlobalComp;
export { useGlobal };
