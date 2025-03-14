import React, { createContext, useReducer, useEffect } from "react";

// Creating the Global Context
export const GlobalContext = createContext();

// Load initial cart state from local storage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("grill-cart-storage");
  return savedCart ? JSON.parse(savedCart) : [];
};

// Initial state of the cart
const initialState = {
  cart: getCartFromLocalStorage(),
  total: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      localStorage.setItem("grill-cart-storage", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
        total: newCart.reduce((total, item) => total + item.price, 0),
      };
    }
    case "RemoveFromCart": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("grill-cart-storage", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce(
          (total, item) => total + (item.price || 0),
          0
        ),
      };
    }
    case "ClearCart": {
      localStorage.removeItem("grill-cart-storage");
      return { ...state, cart: [], total: 0 };
    }
    case "Increment": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.price * 2,
          };
        }
        return item;
      });
      localStorage.setItem("grill-cart-storage", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce((total, item) => total + item.price, 0),
      };
    }
    case "Decrement": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: item.price / 2,
          };
        }
        return item;
      });
      localStorage.setItem("grill-cart-storage", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce((total, item) => total + item.price, 0),
      };
    }
    default:
      return state;
  }
};

// GlobalState component to provide context to children
const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Synchronize local storage on component mount
  useEffect(() => {
    const savedCart = getCartFromLocalStorage();
    if (savedCart.length) {
      dispatch({ type: "InitializeCart", payload: savedCart });
    }
  }, []);

  const CartValue = { state, dispatch };

  return (
    <GlobalContext.Provider value={CartValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
