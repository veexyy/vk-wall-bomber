const getField = document.getElementsByClassName(
  "submit_post_field dark submit_post_inited"
);
const toarr = Array.from(getField);
const getFieldFromArr = toarr[0];

const buttonSubmit = document.getElementById("send_post");

setInterval(() => {
  getFieldFromArr.innerHTML = "text";
  buttonSubmit.click();
}, 10000);
