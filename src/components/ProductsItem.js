import React from "react";

const ProductsItem = ({ product }) => {
  return (
    <div className="center">
      <h2>{product.names}</h2>
      <h2>{product.price}</h2>
      <img src={product.Image} />
    </div>
  );
};
export default ProductsItem;
