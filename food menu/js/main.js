const burgerBtn = document.querySelector('#burger-btn'),
lavashBtn = document.querySelector('#lavash-btn'),
garniyerBtn = document.querySelector('#garniyer-btn'),
saladBtn = document.querySelector('#salad-btn'),
beverageBtn = document.querySelector('#beverage-btn'),
sousBtn = document.querySelector('#sous-btn'),
burger = document.querySelectorAll('#burger'),
lavash = document.querySelectorAll('#lavash'),
garniyer = document.querySelectorAll('#garniyer'),
salad = document.querySelectorAll('#salad'),
beverage = document.querySelectorAll('#beverage'),
sous = document.querySelectorAll('#sous'),
allProduct = document.querySelectorAll('.card');
allProduct.forEach(allProduct => {
    allProduct.classList.remove('hide');
  });


const showHideMenuAndProduct = (nameBtn, nameProduct) => {
  nameBtn.addEventListener("click", () => {
  const allMenuBtn = nameBtn.parentElement.querySelectorAll('.menu-btn');
  allMenuBtn.forEach(allMenuBtn => {
  allMenuBtn.classList.remove('text-dark');
  allMenuBtn.classList.add('text-secondary');
  allMenuBtn.classList.remove('bg-white');
  allMenuBtn.classList.remove('font-weight-bold');
  allMenuBtn.classList.remove('shadow-sm');
  });
  allProduct.forEach(allProduct => {
    allProduct.classList.add('hide');
  });
  nameBtn.classList.add('text-dark');
  nameBtn.classList.add('font-weight-bold');
  nameBtn.classList.remove('text-secondary');
  nameBtn.classList.add('bg-white');
  nameBtn.classList.add('shadow-sm');
  nameProduct.forEach(nameProduct => {
    nameProduct.classList.remove('hide');
  });
  });
}

showHideMenuAndProduct(burgerBtn, burger);
showHideMenuAndProduct(lavashBtn, lavash);
showHideMenuAndProduct(garniyerBtn, garniyer);
showHideMenuAndProduct(saladBtn, salad);
showHideMenuAndProduct(beverageBtn, beverage);
showHideMenuAndProduct(sousBtn, sous);

const interfaceBtn = document.querySelectorAll('.card-link.first-add'),
btnPlus = document.querySelectorAll('.plus'),
btnMinus = document.querySelectorAll('.minus'),
value = document.querySelectorAll('.value');
value.innerHTML = 0;
interfaceBtn.forEach (interfaceBtn => {
  const value = interfaceBtn.parentElement.querySelector('.value'),
  valueDiv = interfaceBtn.parentElement.querySelector('.card-link.secondary-add');
  interfaceBtn.addEventListener("click", function () {
    interfaceBtn.classList.add('hide');
    valueDiv.classList.remove('hide');
    value.innerHTML = 1;
  })
})

btnPlus.forEach (btnPlus => {
  const value = btnPlus.parentElement.querySelector('.value');
  btnPlus.addEventListener("click", function () {
    var x = value.innerHTML;
    x++;
    value.innerHTML = x;
  })
})

btnMinus.forEach (btnMinus => {
  const value = btnMinus.parentElement.querySelector('.value');
  btnMinus.addEventListener("click", function () {
    var x = value.innerHTML;
    if (x > 0) {
       x--;
    }
    else {
      x = 0;
    }
    value.innerHTML = x;
  })
})

function initMap() {
  const marked = { lat: 41.336315, lng: 69.288723 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: marked,
  });
  const marker = new google.maps.Marker({
    position: marked,
    map: map,
  });
}

const save = document.querySelector('.save'),
input = document.querySelectorAll('input');
save.addEventListener('click', () => {
  input.forEach(input => {
    input.readOnly = true;
  })
});