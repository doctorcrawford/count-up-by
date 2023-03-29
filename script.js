// Business logic

function countUpBy(numberTo, numberBy) {
  let output = [];
  for (let index = 0; index <= numberTo; index += numberBy) {
    output.push(index); 
  }
  return output
}

//UI logic

window.onload = function() {
  let form = document.querySelector("form");
  const firstNumInput = document.getElementById("firstNumInput");
  const secondNumInput = document.getElementById("secondNumInput");
}

