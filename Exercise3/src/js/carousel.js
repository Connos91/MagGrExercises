let imageIndex = 0;
let autoImageInterval;

const imgs = document.querySelectorAll(".carousel-img");
const imgsContainer = document.querySelector(".carousel");

const showImages = (n) => {
  imageIndex = (n + imgs.length) % imgs.length;

  imgs?.forEach(
    (img, i) => (img.style.display = i === imageIndex ? "block" : "none")
  );
};

const nextPreviousImg = (n) => showImages(imageIndex + n);

const startAutoPlay = () =>
  (autoImageInterval = setInterval(() => nextPreviousImg(1), 4000));

const stopAutoPlay = () => {
  clearInterval(autoImageInterval);
};

if (imgsContainer) {
  imgsContainer.addEventListener("mouseout", startAutoPlay);
  imgsContainer.addEventListener("mouseover", stopAutoPlay);
}

document
  .querySelector(".prev")
  .addEventListener("click", () => nextPreviousImg(-1));
document
  .querySelector(".next")
  .addEventListener("click", () => nextPreviousImg(1));

showImages(imageIndex);
startAutoPlay();
