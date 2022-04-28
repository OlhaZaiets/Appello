var menu = document.querySelector('.burger');
var menuList = document.querySelector('.mobile_ul');

menu.addEventListener('click', function (event) {
  menuList.classList.toggle('menu_on');
});


let logo= document.querySelector(".logo img")
console.log(logo);

let pluses = document.querySelectorAll(".just_con p");
let text = document.querySelectorAll(".faq_text");

for (let i = 0; i < pluses.length; i++) {
  pluses[i].addEventListener('click', function () {
    text[i].classList.toggle('faq_text_open');
    pluses[i].classList.toggle('pluse_close');
  });
}

let blocks = document.querySelectorAll(".table_grid");
let links = document.querySelectorAll(".choice a");

links[0].style = "border-bottom: 2px solid #000"

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    if (i == 0) {
      blocks[0].classList.remove('table_grid_close');
      blocks[1].classList.add('table_grid_close');
      blocks[2].classList.add('table_grid_close');
      links[0].style = 'border-bottom: 2px solid #000';
      links[1].style = 'border-bottom: none';
      links[2].style = 'border-bottom: none';
    } else if (i == 1) {
      blocks[0].classList.add('table_grid_close');
      blocks[1].classList.remove('table_grid_close');
      blocks[2].classList.add('table_grid_close');
      links[0].style = 'border-bottom: none';
      links[1].style = 'border-bottom: 2px solid #000';
      links[2].style = 'border-bottom: none';
    } else if (i == 2) {
      blocks[0].classList.add('table_grid_close');
      blocks[1].classList.add('table_grid_close');
      blocks[2].classList.remove('table_grid_close');
      links[0].style = 'border-bottom: none';
      links[1].style = 'border-bottom: none';
      links[2].style = 'border-bottom: 2px solid #000';
    }
  });
}