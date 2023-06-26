const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function() {
  const inputValue = input1.value.trim();
  if (inputValue.length === 0) {
    return; // if input field is empty or only contains whitespace, do not save
  }
  input2.value += inputValue + '\n';
  input1.value = '';
  input3.innerHTML = `Character Count: ${input2.value.replace(/\n/g, '').length}`;
});

input2.addEventListener('input', function() {
  input3.innerHTML = `Character Count: ${input2.value.replace(/\n/g, '').length}`;
});

input1.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault(); // prevent newline from being added to input field
    saveButton.click(); // programmatically click the "Save" button
  }
});

input3.innerHTML = "Character Count: 0"; // set initial value of input3 to "Character Count: 0"