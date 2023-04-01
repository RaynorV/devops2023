const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function() {
  input2.value += input1.value + '\n';
  input1.value = '';
  input3.innerHTML = `Character Count: ${input2.value.length}`;
});

input2.addEventListener('input', function() {
  input3.innerHTML = `Character Count: ${input2.value.length}`;
});
