import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
//   let newCartData = localStorage.getItem("cartValue");
//   if (newCartData && newCartData.length === 0) {
//     return [];
//   } else {
//     return JSON.parse(newCartData);
//   }
// };

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("cartValue");
  if (!newCartData) {
    return []; // Return an empty array if no data is found
  } else {
    return JSON.parse(newCartData);
  }
};
const initialState = {
  //cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add to cart

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  //to increment cart amount
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear cart

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add data in local storage
  // set
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cartValue", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
