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

btnNext.addEventListener("click", function () {
  if (currentIndex == itemImgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgCurrent.style.animation = "sliderNext 0.5s ease";
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
  imgCurrent.style.animation = "sliderPrev 0.5s ease";
  setTimeout(() => {
    imgCurrent.style.animation = "";
  }, 400);
  updateImg(currentIndex);
});


setInterval(() => {
  btnNext.click();
}, 5000);

