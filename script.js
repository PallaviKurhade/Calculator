function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
