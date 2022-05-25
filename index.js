const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnPrev = $(".btn-prev");
const btnNext = $(".btn-next");
const imgCurrent = $(".current-img");
const itemImgs = $$(".item-img");

var currentIndex = 0;

function updateImg(index) {
  currentIndex = index;
  itemImgs.forEach((item) => {
    item.classList.remove("active");
  });

  imgCurrent.src = itemImgs[index].getAttribute("src");
  itemImgs[currentIndex].classList.add("active");
}

itemImgs.forEach((itemImg, index) => {
  itemImg.addEventListener("click", (e) => {
    updateImg(index);
  });
});

if (btnNext && btnPrev) {
  btnNext.addEventListener("click", function () {
    if (currentIndex == itemImgs.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    imgCurrent.style.animation = "sliderNext 0.5s ease-in-out ";
    setTimeout(() => {
      imgCurrent.style.animation = "";
    }, 400);
    updateImg(currentIndex);
  });

  btnPrev.addEventListener("click", function () {
    if (currentIndex == 0) {
      currentIndex = itemImgs.length - 1;
    } else {
      currentIndex--;
    }
    imgCurrent.style.animation = "sliderPrev 0.5s ease-in-out ";
    setTimeout(() => {
      imgCurrent.style.animation = "";
    }, 400);
    updateImg(currentIndex);
  });

  setInterval(() => {
    btnNext.click();
  }, 5000);
}

//REGISTER

function Register() {
  event.preventDefault();
  var email = $("#email").value;
  var password = $("#password").value;
  var passwordConfirm = $("#password-confirm").value;

  var users = {
    email,
    password,
    passwordConfirm,
  };

  var json = JSON.stringify(users);
  localStorage.setItem("account", json);
  alert("đăng kí thành công <3");
}

// Ẩn hiện password
function showPassword() {
  var showPassword = $("#password");
  if (showPassword.type === "password") {
    showPassword.type = "text";
  } else {
    showPassword.type = "password";
  }
}
function showPasswordConfirm() {
  var showPasswordConfirm = $("#password-confirm");
  if (showPasswordConfirm.type === "password") {
    showPasswordConfirm.type = "text";
  } else {
    showPasswordConfirm.type = "password";
  }
}

//LogIn

function logIn() {
  event.preventDefault();
  var email = $("#email").value;
  var password = $("#password").value;
  var users = localStorage.getItem("account");
  var data = JSON.parse(users);
  console.log(data);
  if (data.email == email && data.password == password) {
    window.location.href = "main.html";
    alert("Bạn đã đăng nhập thành công <3");
  } else if (email == "" && password == "") {
    alert("Bạn chưa nhập mật khẩu tài khoản :((");
  } else {
    alert("Vui lòng đăng kí tài khoản ^^");
  }
}
