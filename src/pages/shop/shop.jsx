import React, { useContext, useState, useEffect } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import handleProductDelete from "../../apis/deleteProduct";
import listAllProducts from "../../apis/listAllProducts";
import Spinner from "react-bootstrap/Spinner";

export const Shop = () => {
  const { itemsArray } = useContext(ShopContext);
  const [dataArrived, setDataArrived] = useState(false);
  const [allProducts, setAllProducts] = useState();
  const [dataFound, setDataFound] = useState();

  const handleClick = (e) => {
    e.preventDefault();

    itemsArray.forEach(async (item, index) => {
      try {
        /*remove the selected products from the database*/
        const response = await handleProductDelete(item);
        console.log(response);

        /*remove the selected items from the DOM*/
        itemsArray.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    const response = async () => {
      const data = await listAllProducts();
      setDataArrived(true);
      data.data.length > 0 ? setDataFound(true) : setDataFound(false);
      setAllProducts(data);
    };

    response();
  });

  const products =
    allProducts &&
    allProducts?.data.map((product, index) => {
      const { id, product_image, product_name, product_price, product_description } = product;

      return (
        <Product
          key={id}
          id={id}
          productName={product_name}
          productPrice={product_price}
          productImage={product_image}
          productDescription={product_description}
        />
      );
    });

  return (
    <form
      className="shop"
      method="POST"
      id="allProductForm"
      onSubmit={(e) => handleClick(e)}
    >
      <div className="shopTitle d-flex align-items-center justify-content-end p-2 my-3">
        {dataFound ? (
          <button
            type="submit"
            className="btn btn-danger text-capitalize"
            onClick={(e) => handleClick(e)}
          >
            delete
          </button>
        ) : (
          <button
            className="btn btn-primary text-capitalize"
            onClick={(e) => handleClick(e)}
          >
            <Link to="/create" className="text-decoration-none text-light">
              create
            </Link>
          </button>
        )}
      </div>

      <div className="all-products-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {!dataArrived ? (
          <div className="my-5 p-5 d-flex align-items-center justify-content-center m-auto">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : dataFound ? (
          products 
        ) : (
          <span className="text-center my-5 py-3">No Products Found!</span>
        )}
      </div>
    </form>
  );
};
