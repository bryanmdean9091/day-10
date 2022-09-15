const userName = document.getElementById('input1');
const pW1 = document.getElementById('input2');
const pW2 = document.getElementById('input3');
const button = document.getElementById('submitBtn');

button.disabled = true;

userName.addEventListener('change', changeState);
pW1.addEventListener('change', changeState);
pW2.addEventListener('change', changeState);




function changeState() {
if (userName.value === "" ||  pW1.value === ""  || pW2.value === "") {
      button.disabled = true;
    }
    else {
        button.disabled = false;
    }
};

function pW() {
    if (pW1.value !== pW2.value) {
        alert("Passwords do not match")
    } else {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('pW1', pW2.value);
    localStorage.setItem('pW2', pW2.value);
    console.log(userName.value, pW1.value)
    }
};

function handleEnter(event) { //function to allow key "enter" to switch to next input box
    if (event.key === "Enter") { //if key hit is = to "enter"
      const form = document.getElementById('form') //it will target the form id
      const index = [...form].indexOf(event.target); //
      form.elements[index + 1].focus(); //on each "enter", it will advance to the next input[index + 1]
    }
  };
  document.getElementById('submitBtn').addEventListener("click", function(event){
    event.preventDefault()
  });










