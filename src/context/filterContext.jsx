import { createContext, useContext } from "react";

const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  return <filterContext.Provider value={{}}>{children}</filterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
