import { useEffect, useState } from "react";
import axios from 'axios';
import initialState from '../initialState.js';

const API = 'http://localhost:1337/api/products-plur';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios(API);
      setProducts(response.data.data);
    };
    getData();
  }, []);

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

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state
  };
};

export { useInitialState };