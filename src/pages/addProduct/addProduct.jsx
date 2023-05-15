import React, { useState } from "react";
import handleSubmit from "../../apis/createProduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigateTo = useNavigate();
  const handleSubmitClick = async (e) => {
    try {
      setButtonDisabled(true);

      const response = await handleSubmit(e);
      console.log(response);
      if (response.message.includes("successfully")) {
        setButtonDisabled(false);
        setTimeout(() => {
          navigateTo("/");
        }, 2000);
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occured while creating product!",
        });
      }
    } catch (error) {
      setButtonDisabled(false);
      Swal.fire({
        title: "Error",
        text: "An error occured while creating product!",
      });
    }
  };
  return (
    <section className="my-3 p-3">
      <h4 className="fw-bold text-capitalize text-center my-md-3 my-5">
        Add new product
      </h4>
      <form
        className="width-toggle-2 m-auto"
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

        <section className="my-4 d-flex align-items-center justify-content-between">
          <button
            type="submit"
            className="btn btn-primary text-capitalize"
            onClick={(e) => {
              handleSubmitClick(e);
            }}
            disabled={buttonDisabled}
          >
            create
          </button>

          <button
            className="btn btn-danger text-capitalize"
            onClick={(e) => {
              handleSubmitClick(e);
            }}
          >
            <Link
              to="/"
              className="text-decoration-none text-light text-capitalize"
            >
              Cancel
            </Link>
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddProduct;
