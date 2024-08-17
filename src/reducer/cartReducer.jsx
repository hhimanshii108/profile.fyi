const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    // Check if the item already exists in the cart
    const existingProduct = state.cart.find((item) => item.id === id);

    if (existingProduct) {
      // Item is already in the cart, so update its amount
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + amount } : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      // Item is not in the cart, so add it
      const newProduct = {
        id: id,
        name: product.name,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, newProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curr) => curr.id != action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedData = state.cart.map((curr) => {
      if (curr.id === action.payload) {
        let decAmount = curr.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curr,
          amount: decAmount,
        };
      } else {
        return curr;
      }
    });
    return { ...state, cart: updatedData };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedData = state.cart.map((curr) => {
      if (curr.id === action.payload) {
        let incAmount = curr.amount + 1;
        if (incAmount >= curr.max) {
          incAmount = curr.max;
        }
        return {
          ...curr,
          amount: incAmount,
        };
      } else {
        return curr;
      }
    });
    return { ...state, cart: updatedData };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedVal = state.cart.reduce((initialVal, currVal) => {
      let { amount } = currVal;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedVal,
    };
  }
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, currVal) => {
      let { price, amount } = currVal;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  return state;
};
export default cartReducer;
