import $ from "jquery";

const handleProductDelete = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `http://127.0.0.1:8000/api/product/delete/${id}`,
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default handleProductDelete;
