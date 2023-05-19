import $ from "jquery";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);

  return $.ajax({
    type: "POST",
    url: "http://127.0.0.1:8000/api/product/create",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default handleSubmit;
