import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Form } from "react-bootstrap";

export const Product = ({ id, productName, productPrice, productImage, productDescription  }) => {

  const { itemsArray } = useContext(ShopContext);

  const handleChange = (e) => {
    if (e.target.checked) {
      itemsArray.push(id);
    } else {
      let arrToRemoveIndex = itemsArray.indexOf(id);
      arrToRemoveIndex > -1 && itemsArray.splice(arrToRemoveIndex, 1);
    }
  };
  return (
    <div
      className="product-container d-flex align-items-center justify-content-around flex-column"
      key={id}
    >
      <Form.Check
        type="checkbox"
        name="user_selection"
        onChange={(e) => handleChange(e)}
      />
      <p>{id}</p>
      <img
        src={productImage}
        alt="product"
        className="img-fluid"
        width="400"
        height="400"
      />
      <div className="description w-100 d-flex align-items-center justify-content-around flex-column">
        <p>
          <b className="small">{productName}</b>
        </p> 
        
          <span className="small">{productDescription} </span>
        <p className="small fw-bold py-1 text-start"> ${productPrice}</p>
      </div>
    </div>
  );
};
