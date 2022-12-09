console.dir(document.getElementsByClassName("count-up"));

let progress_93_a = document.getElementsByClassName("progress")[0];
let progress_80_a = document.getElementsByClassName("progress")[1];
let progress_100_a = document.getElementsByClassName("progress")[2];
let progress_90_a = document.getElementsByClassName("progress")[3];

let percentage_93 = document.getElementsByClassName("count-up")[0];
let percentage_83 = document.getElementsByClassName("count-up")[1];
let percentage_131 = document.getElementsByClassName("count-up")[2];
let percentage_92 = document.getElementsByClassName("count-up")[3];

document.addEventListener("scroll", function () {
  if (
    progress_93_a.getBoundingClientRect().top > -10 &&
    progress_93_a.getBoundingClientRect().top < 550
  ) {
    progress_93_a.classList.add("animate-95");
  }
  if (
    percentage_93.getBoundingClientRect().top > -10 &&
    percentage_93.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_93.innerHTML);
    setInterval(function () {
      max = 93;
      if (parseInt(percentage_93.innerHTML) < max) {
        current++;
        percentage_93.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_80_a.getBoundingClientRect().top > -10 &&
    progress_80_a.getBoundingClientRect().top < 550
  ) {
    progress_80_a.classList.add("animate-80");
  }
  if (
    percentage_83.getBoundingClientRect().top > -10 &&
    percentage_83.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_83.innerHTML);
    setInterval(function () {
      max = 93;
      if (parseInt(percentage_83.innerHTML) < max) {
        current++;
        percentage_83.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_100_a.getBoundingClientRect().top > -10 &&
    progress_100_a.getBoundingClientRect().top < 550
  ) {
    progress_100_a.classList.add("animate-100");
  }
  if (
    percentage_131.getBoundingClientRect().top > -10 &&
    percentage_131.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_131.innerHTML);
    setInterval(function () {
      max = 131;
      if (parseInt(percentage_131.innerHTML) < max) {
        current++;
        percentage_131.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_90_a.getBoundingClientRect().top > -10 &&
    progress_90_a.getBoundingClientRect().top < 550
  ) {
    progress_90_a.classList.add("animate-90");
  }
  if (
    percentage_92.getBoundingClientRect().top > -10 &&
    percentage_92.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_92.innerHTML);
    setInterval(function () {
      max = 80;
      if (parseInt(percentage_92.innerHTML) < max) {
        current++;
        percentage_92.innerHTML = current;
      }
    }, 20);
  }
});
