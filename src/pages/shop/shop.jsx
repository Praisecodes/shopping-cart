import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import $ from "jquery";


export const Shop = () => {
  const { itemsArray } = useContext(ShopContext);

  const handleClick = (e) => {
    e.preventDefault();
    
   
  };
  return (
    <form
      className="shop"
      method="POST"
      id="allProductForm"
      onSubmit={(e) => handleClick(e)}
    >
      <div className="shopTitle d-flex align-items-center justify-content-end p-2 my-3">
        <button
          type="submit"
          className="btn btn-danger text-capitalize"
          onClick={(e) => handleClick(e)}
        >
          delete [1]
        </button>
      </div>

      <div className="all-products-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </form>
  );
};
