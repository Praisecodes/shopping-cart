import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { itemsArray } = useContext(ShopContext);
  
  const handleChange = (e) => {
    if (e.target.checked) {
      itemsArray.push(id);
      console.log(itemsArray);
    } else {
      let arrToRemoveIndex = itemsArray.indexOf(id);
      arrToRemoveIndex > -1 && itemsArray.splice(arrToRemoveIndex, 1);
      console.log(itemsArray);
    }
  };
  return (
    <div
      className="product-container d-flex align-items-center justify-content-around flex-column"
      key={id}
    >
      <input
        type="checkbox"
        name="user_selection"
        onChange={(e) => handleChange(e)}
      />
      <img
        src={productImage}
        alt="product"
        className="img-fluid"
        width="400"
        height="400"
      />
      <div className="description">
        <p>
          <b className="small">{productName}</b>
        </p>
        <p className="small"> ${price}</p>
      </div>
    </div>
  );
};
