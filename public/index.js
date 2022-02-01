(function () {
  const MAX_INPUT_LENGTH = 22;

  const firstInput = document.querySelector("#input-1");
  const secondInput = document.querySelector("#input-2");
  const colorInput = document.querySelector("#color-chooser");
  const button = document.querySelector("#button-submit");

  const firstLine = document.querySelector(".first-line");
  const secondLine = document.querySelector(".second-line");

  firstInput.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.substring(0, MAX_INPUT_LENGTH);
    firstLine.innerText = e.target.value;
  });

  secondInput.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.substring(0, MAX_INPUT_LENGTH);
    secondLine.innerText = e.target.value;
  });

  colorInput.addEventListener("input", (e) => {
    firstLine.style.color = e.target.value;
    secondLine.style.color = e.target.value;
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstInput.value.trim() === "") {
      alert("Please type your name(s) first");
    } else {
      window.print();
    }
  });
})();
