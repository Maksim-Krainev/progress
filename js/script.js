const progressBar = document.querySelector(".progress");
const addButton = document.querySelector(".btn-add");
const resetButton = document.querySelector(".btn-reset");

let progress = 0; // начальное значение прогресс-бара

addButton.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    progressBar.style.width = `${progress}%`;
  }
});

resetButton.addEventListener("click", () => {
  progress = 0;
  progressBar.style.width = `${progress}%`;
});
