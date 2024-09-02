import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { MYAPI } from "../constant";

const myglobal = createContext();

const MyGlobalComp = ({ children }) => {
  const [alldata, setAlldata] = useState(null);
  //   const { loading, iserror, data } = useFetch(MYAPI);

  return <myglobal.Provider value={{}}>{children}</myglobal.Provider>;
};

const useGlobal = () => {
  return useContext(myglobal);
};

export default MyGlobalComp;
export { useGlobal };
