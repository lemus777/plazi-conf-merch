import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { AppContext } from '../context/AppContext';
import { handleSumTotal } from "../utils/sumTotal";
import '../styles/components/Payment.css';

const Payment = ({ navigate }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'AVfA4gphXIxWyMhBOneD2lyqxIuCiVuDKT8drTC57GHEGZIDqiMSJk8psG-G7cADglbENoAfHzx0oWuM',
    intent: 'capture',
    currency: 'EUR'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, i) => (
          <div className="Payment-item" key={i}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}€</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export { Payment };