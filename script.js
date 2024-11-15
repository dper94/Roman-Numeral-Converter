const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

const validateNumberInput = () => {
  const inputValueConvertedToNumber = parseInt(numberInput.value);
  const backgroundColorOnError = "#FF5555";
  if (isNaN(inputValueConvertedToNumber) || numberInput.value.includes(".")) {
    outputElement.textContent = "Please enter a valid number";
    outputElement.style.backgroundColor = backgroundColorOnError;
  } else if (numberInput.value.includes("-")) {
    outputElement.textContent =
      "Please enter a number greater than or equal to 1";
    outputElement.style.backgroundColor = backgroundColorOnError;
  } else if (inputValueConvertedToNumber >= 4000) {
    outputElement.textContent =
      "Please enter a number less than or equal to 3999";
    outputElement.style.backgroundColor = backgroundColorOnError;
  } else {
    outputElement.style.backgroundColor = "";
    convertInputToRoman(inputValueConvertedToNumber);
  }
};

const convertInputToRoman = (input) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (input >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      input -= romanNumerals[i].value;
    }
  }

  outputElement.textContent = result;
};

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateNumberInput();
  }
});

convertButton.addEventListener("click", validateNumberInput);
