let buttonEls = document.querySelectorAll('button');
let clearEl = document.querySelector('.clear');
let equalEl = document.querySelector('.equal');
let deleteEl = document.querySelector('.delete');
let inputEl = document.querySelector('input');


buttonEls.forEach(buttonEl => {
  buttonEl.addEventListener('click', () => {
    addValueToInput(buttonEl.textContent)
  })
})

function addValueToInput(value) {
  try {
    if (value == "C") {
      inputEl.value = "";
      return;
    } else if (value === "=") {
      if(inputEl.value.trim() == "") {
        inputEl.value = ""
      }else{
        inputEl.value = eval(inputEl.value)
      }
    } else if (value == "DE") {
      inputEl.value = inputEl.value.slice(0, -1)
    } else {
      inputEl.value += value;
    }
    
  }
  catch {
    alert("Invalid Error")
  }
}
