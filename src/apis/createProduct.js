import $ from "jquery";

export const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);

  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:8000/api/product/create",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, textStatus, error) {
      console.log(xhr.responseText);
    },
  });
};
