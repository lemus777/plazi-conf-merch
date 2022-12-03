import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/components/Success.css';

const Success = () => {
  const {state} = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, gracias por su compra`}</h2>
        <span>Tu pedido llegará en 3 días a la dirección indicada:</span>
      </div>
    </div>
  );
}

export { Success };