let buttons = document.querySelectorAll(".arthmatic-grid .arth");
let inputField = document.querySelector("#outputScreen");

function arrayValue() {
  let oprationsAndNumbers = [];
  buttons.forEach((button) => {
    let inputValue = button.innerHTML;
    if (
      inputValue !== "=" &&
      inputValue !== "+" &&
      inputValue !== "-" &&
      inputValue !== "*" &&
      inputValue !== "/" &&
      inputValue !== "." &&
      inputValue !== "C"
    ) {
      let inputNumber = Number(inputValue);
      oprationsAndNumbers.push(inputNumber);
    } else {
      oprationsAndNumbers.push(inputValue);
    }
  });

  return oprationsAndNumbers;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let inputValue = button.innerHTML;
    console.log(inputValue);

    for (let i = 0; i < arrayValue().length; i++) {
      if (inputValue == arrayValue()[i]) {
        console.log(
          "Button clicked:",
          arrayValue()[i],
          "Value in array:",
          typeof arrayValue()[i]
        );

        if (inputValue === "=") {
          let answer = eval(inputField.value);
          inputField.value = answer;
        } else if (inputValue === "C") {
          inputField.value = "";
        } else {
          inputField.value += arrayValue()[i];
        }
      }
    }
  });
});
