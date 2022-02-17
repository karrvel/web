var fileUpload = document.querySelector('#customFile');


fileUpload.onchange = () => {
  var i =  0,
  span  = '';

  const files = [...fileUpload.files];
  
  for (file of files) {
    i++;
    file.size < 1024 ? fileSize = String(file.size / 1024).substr(0, 3) : fileSize = parseInt(file.size / 1024);
    span = span + '<tr class="text-center"><td>' + i + '</td><td>' + file.name + '</td><td>' + fileSize+ ' kb</td></tr>';
  }

  document.querySelector('#file-info').innerHTML = span
  
}
