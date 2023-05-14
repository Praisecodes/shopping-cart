import React from "react";
import "./addProduct.css";
import { handleSubmit } from "../../apis/createProduct";

const AddProduct = () => {
  const handleSubmitClick = (e) => {
    handleSubmit(e);
  };
  return (
    <section className="m-3">
      <h4 className="fw-bold text-capitalize text-center my-3">
        Add new product
      </h4>
      <form
        className="w-75 m-auto"
        id="form"
        method="POST"
        onSubmit={(e) => handleSubmitClick(e)}
      >
        <section>
          <label htmlFor="product_name" className="my-2">
            Product name
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="form-control"
            name="product_name"
            required
          />
        </section>

        <section>
          <label htmlFor="product_description" className="my-2">
            Product description
          </label>

          <input
            type="text"
            placeholder="Product description"
            className="form-control"
            name="product_description"
            required
          />
        </section>

        <section>
          <label htmlFor="product_price" className="my-2">
            Product price
          </label>
          <input
            type="number"
            min="1"
            placeholder="Product price"
            className="form-control"
            name="product_price"
            required
          />
        </section>

        <section className="my-3">
          <input
            type="file"
            placeholder="Product image"
            className="form-control"
            name="product_image"
            required
          />
        </section>

        <section className="my-4">
          <button
            type="submit"
            className="btn btn-primary text-capitalize"
            onClick={(e) => {
              handleSubmitClick(e);
            }}
          >
            add product
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddProduct;
