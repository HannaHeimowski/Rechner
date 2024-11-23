let input = document.getElementById("inputBox");
let preview = document.getElementById("preview");
let buttons = document.querySelectorAll("button");
let scientificSection = document.getElementById("scientificSection");
let toggleButton = document.getElementById("toggleScientific");
let result = document.getElementById("inputBox");

let string = "";
let recentCalculations = [];

function updatePreview() {
  preview.innerHTML = recentCalculations.join("<br>");
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = e.target.innerHTML;

    // Überspringe den Toggle-Button in der Vorschau
    if (e.target.classList.contains("toggle-btn")) {
      return;
    }

    if (btnValue === "=") {
      if (string.trim() !== "") {
        let result = eval(string.replace("^", "**")); // ^ für Potenz ersetzen
        input.value = result;

        recentCalculations.unshift(`${string} = ${result}`);
        if (recentCalculations.length > 3) {
          recentCalculations.pop();
        }

        string = result.toString();
        updatePreview();
      }
    } else if (btnValue === "AC") {
      string = "";
      input.value = string;
    } else if (btnValue === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (btnValue === "sin") {
      string = Math.sin(eval(string)).toFixed(4);
      input.value = string;
    } else if (btnValue === "cos") {
      string = Math.cos(eval(string)).toFixed(4);
      input.value = string;
    } else if (btnValue === "tan") {
      string = Math.tan(eval(string)).toFixed(4);
      input.value = string;
    } else if (btnValue === "√") {
      string = Math.sqrt(eval(string)).toFixed(4);
      input.value = string;
    } else if (btnValue === "x²") {
      string = Math.pow(eval(string), 2);
      input.value = string;
    } else if (btnValue === "x^y") {
      string += "^";
      input.value = string;
    } else {
      string += btnValue;
      input.value = string;
    }
  });
});

// Wissenschaftliche Funktionen ein- und ausblenden
toggleButton.addEventListener("click", () => {
  if (scientificSection.style.display === "none") {
    toggleButton.innerHTML = "off";
    scientificSection.style.display = "flex";
    // result.style.width = "100%";
  } else {
    scientificSection.style.display = "none";
    toggleButton.innerHTML = "on";
    // result.style.width = "auto";
  }
});
