const textarea = document.querySelector('.textarea'),
count = document.querySelector('.count');
function countLetters() {
  const text = textarea.value,
  textLength = textarea.value.length;
  count.innerText = `${textLength}`;
} 