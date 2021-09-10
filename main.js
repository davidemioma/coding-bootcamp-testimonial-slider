"use strict";

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".author");
const content = document.querySelectorAll(".card_content");
let i = 0;

function nextSlides() {
  slides[i].classList.add("hidden");
  content[i].classList.add("hidden");
  i = (i + 1) % slides.length;
  slides[i].classList.remove("hidden");
  content[i].classList.remove("hidden");
}

function previousSlides() {
  slides[i].classList.add("hidden");
  content[i].classList.add("hidden");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.remove("hidden");
  content[i].classList.remove("hidden");
}

next.addEventListener("click", nextSlides);
previous.addEventListener("click", previousSlides);
