(function () {
  const MAX_INPUT_LENGTH = 52;
  const previewText = document.getElementsByClassName("preview-text");
  const nameInput = document.getElementById("name-input");

  nameInput.addEventListener("keyup", (e) => {
    const currentValue = e.target.value;
    if (e.key === "Enter" && currentValue.split("\n").length > 2) {
      e.target.value = currentValue.slice(0, -1);
      return;
    }

    e.target.value = currentValue.substring(0, MAX_INPUT_LENGTH);

    previewText[0].innerText = e.target.value;
    previewText[1].innerText = e.target.value;
  });

  const button = document.getElementById("button-submit");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value.trim() === "") {
      alert("Please type your name first");
    } else {
      window.print();
    }
  });
})();
