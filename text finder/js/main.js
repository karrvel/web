function search() {
  var key  = document.querySelector('#key-word').value.toLowerCase(),
      text = document.querySelector('#text').value.toLowerCase();

  if (key != '') {
    i = 0;
    while (text.replace(key, '') != text) {
      i++;
      text = text.replace(key, '');
    }
    document.querySelector('#matches').innerHTML = i + ' matches found';
  } else {
    document.querySelector('#matches').innerHTML = '';
  }

}