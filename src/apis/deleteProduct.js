import $ from "jquery";

export const handleSubmit = (e) => {
  e.preventDefault();
  const id = 1;
  $.ajax({
    type: "DELETE",
    url: `http://127.0.0.1:8000/api/product/delete${id}`,
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
