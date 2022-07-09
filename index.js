let mail = document.getElementById("text");
let btn = document.querySelector("button");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", function () {
  checkInputs();
});
function checkInputs() {
  let emailValue = mail.value;
  if (emailValue.match(mailformat)) {
    document.querySelector(".msg").style.opacity = "1";
    document.querySelector(".msg").innerHTML = "Thanks for subscribing";
    document.querySelector(".msg").classList.toggle("success");
  } else {
    document.querySelector(".msg").style.opacity = "1";
    document.querySelector("input").classList.toggle("error");
    document.querySelector(".msg").innerHTML =
      "Please provide a valid Email Address";
  }
}
