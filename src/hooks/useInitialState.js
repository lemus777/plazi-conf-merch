import { useState } from "react";
import initialState from '../initialState.js';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((_items, indexCurrent) => indexCurrent !== indexToRemove)
    });
  };

  return {
    addToCart,
    removeFromCart,
    state
  };
};

export { useInitialState };