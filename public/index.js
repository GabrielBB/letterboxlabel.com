(function () {
  const nameInput = document.getElementById("name-input");
  nameInput.addEventListener("keypress", (e) => {
    const value = e.target.value;
    const numberOfLines = (value.match(/\n/g) || []).length + 1;
    if (numberOfLines > 2) {
      e.preventDefault();
    }
  });

  const previewText = document.getElementsByClassName("preview-text");
  nameInput.addEventListener("keyup", (e) => {
    previewText[0].innerText = e.target.value;
    previewText[1].innerText = e.target.value;
  });

  const button = document.getElementById("button-submit");
  const form = document.getElementById("form");
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
      alert("Please type your name first");
    } else {
      form.classList.add("hidden");
      window.print();
      form.classList.remove("hidden");
    }
  });
})();
