import React from "react";
import '../styles/components/Product.css';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.attributes.imgurl} alt={product.attributes.title} />
      <div className="Product-item-info">
        <h2>{product.attributes.title}
          <span> {product.attributes.price}€</span>
        </h2>
        <p>{product.attributes.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  );
}

export { Product };