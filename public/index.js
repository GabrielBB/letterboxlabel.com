(function () {
  const MAX_INPUT_LENGTH = 22;

  const firstLines = document.getElementsByClassName("first-line");
  const secondLines = document.getElementsByClassName("second-line");

  const firstInput = document.getElementById("input-1");
  const secondInput = document.getElementById("input-2");

  firstInput.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.substring(0, MAX_INPUT_LENGTH);

    firstLines[0].innerText = e.target.value;
    firstLines[1].innerText = e.target.value;
  });

  secondInput.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.substring(0, MAX_INPUT_LENGTH);

    secondLines[0].innerText = e.target.value;
    secondLines[1].innerText = e.target.value;
  });

  const button = document.getElementById("button-submit");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstInput.value.trim() === "") {
      alert("Please type your name first");
    } else {
      window.print();
    }
  });
})();
