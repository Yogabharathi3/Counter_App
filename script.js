const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
textarea.addEventListener('input', () => {
  const count = textarea.value.length;
  counter.innerText = `Characters: ${count}`;
});
