let buttonEls = document.querySelectorAll('button');
let clearEl = document.querySelector('.clear');
let equalEl = document.querySelector('.equal');
let inputEl = document.querySelector('input');
// console.log(displayEl);

buttonEls.forEach(buttonEl => {
  buttonEl.addEventListener('click', () => {
   addValueToInput(buttonEl.textContent)   
  })
})

function addValueToInput(value) {
  try{
    if(value == "C"){
      inputEl.value = "";
      return;
    } 
    if(value === "="){
      inputEl.value = eval(inputEl.value)
      return;
    }
    inputEl.value += value;
 }
 catch{
  alert("Invalid Error")
 }
}