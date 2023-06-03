import _ from "lodash";
import "./style.css";

const images = document.querySelectorAll(".slider-image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const imageNavigationDots = document.querySelectorAll(".navigation-dot");
const slider = document.getElementById("slider");

let currentImageIndex = 2;

const showCurrentImage = () => {
  images.forEach((image) => {
    image.classList.remove("active", "inactive");
    images[currentImageIndex].classList.add("active");

    if (currentImageIndex === 0) {
      images[currentImageIndex + 1].classList.add("inactive");
      previousButton.innerHTML = "";
    } else if (currentImageIndex === images.length - 1) {
      images[currentImageIndex - 1].classList.add("inactive");
      nextButton.innerHTML = "";
    } else {
      images[currentImageIndex - 1].classList.add("inactive");
      images[currentImageIndex + 1].classList.add("inactive");
    }
  });
};

const markNavigationDot = () => {
  imageNavigationDots.forEach((dot) => {
    dot.classList.remove("marked");
    imageNavigationDots[currentImageIndex].classList.add("marked");
  });
};

const showPreviousImage = () => {
  nextButton.innerHTML = "navigate_next";
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex === 0) {
    slider.style.justifyContent = "flex-end";
  }

  showCurrentImage();
  markNavigationDot();
};

const showNextImage = () => {
  previousButton.innerHTML = "navigate_before";
  currentImageIndex++;
  if (currentImageIndex > images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex === images.length - 1) {
    slider.style.justifyContent = "flex-start";
  }
  showCurrentImage();
  markNavigationDot();
};

previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);
