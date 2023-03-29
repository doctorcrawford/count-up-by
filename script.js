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


  function numbers(e) {
    e.preventDefault();
    const firstNumInput = parseInt(document.getElementById("firstNumInput").value);
    const secondNumInput = parseInt(document.getElementById("secondNumInput").value);

  if(isNaN(firstNumInput) || isNaN(secondNumInput)) {
      showResults('Please enter only integers');
    } else if (firstNumInput < 0 || secondNumInput < 0) {
      showResults('Please don\'t enter negative numbers');
    } else if (secondNumInput > firstNumInput) {
      showResults("please make sure the Count by number is LESS than the count to number");
    } else {
      const output = countUpBy(firstNumInput, secondNumInput);
      showResults(output);
    }
  }
  form.addEventListener("submit", numbers);

  function showResults(result) {
    let p = document.querySelector('p');

    p.innerText = result;
  }
}

