import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  copyProducts: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
  },
};

const AppProvider = ({ children }) => {
  //use reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const Singleproduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: Singleproduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  //sorting function

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log("name " + name + " value " + value);
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to clear filter

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: state.products });
  }, [state.sorting_value]);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: state.products });
  }, [state.filters]);

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProduct,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
