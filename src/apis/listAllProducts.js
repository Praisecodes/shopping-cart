import $ from "jquery";

const listAllProducts = () => {
  return $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/api/product/all",
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default listAllProducts;
