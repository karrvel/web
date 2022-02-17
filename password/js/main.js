var input  = document.querySelector('#password'),
    clear  = document.querySelector('#clear')
    eye    = document.querySelector('#eye'),
    line   = document.querySelector('#line'),
    //status = document.querySelector('#status'),
    colors = {
      'weak' : ['#FF6767', '#FDA3A3'],
      'normal' : ['#FEA172', '#FBCA64'],
      'strong' : ['#2ABB9B', '#54DECA']
    };
    
let status = document.querySelector('#status');

function lineAndStatus(width, key, statusText) {
  line.style.width = width;
  line.style.background = 'linear-gradient(to right, ' + colors[key][0] + ', ' + colors[key][1];
  status.style.color = colors[key][0];
  status.textContent = statusText;
}

function grader() {
  eye.classList.remove('hide');
  
  //weak
  if (input.value.length <= 4) {
    lineAndStatus('calc(100% / 3)', 'weak', 'Too weak')
  }
  //normal
  else if (input.value.length < 8) {
    clear.classList.remove('hide');
    lineAndStatus('75%', 'normal', 'Not bad') 
  }
  //strong
  else {
    clear.classList.remove('hide');
    lineAndStatus('100%', 'strong', 'Strong!') 
  }
}

function clearInput() {
  input.value = '';
  line.style.width = '0';
  status.innerText = '';
  clear.classList.add('hide');
  eye.classList.add('hide');
}

function typeChanger() {
  if (input.getAttribute('type') == 'text') {
    input.setAttribute('type', 'password');
  } else {
    input.setAttribute('type', 'text');
  }
  
  eye.classList.toggle('bi-eye-fill');
  eye.classList.toggle('bi-eye-slash-fill');
}