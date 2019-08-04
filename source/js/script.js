var navHeader = document.querySelector('.page-header__nav-list');
var buttonList = document.querySelector('.button-list__toggle');
var buttonOn = document.querySelector('.button-list__toggle-open');
var buttonOff = document.querySelector('.button-list__toggle-close');

navHeader.classList.remove('page-header__nav-list--nojs');
buttonList.classList.remove('button-list__toggle--nojs');

buttonOn.addEventListener('click', function() {
  if (navHeader.classList.contains('page-header__nav-list--closed')) {
    navHeader.classList.remove('page-header__nav-list--closed');
    navHeader.classList.add('page-header__nav-list--opened');
    buttonOff.classList.remove('button-list__toggle-close--closed');
    buttonOff.classList.add('button-list__toggle-close--opened');
    buttonOn.classList.remove('button-list__toggle-close--opened');
    buttonOn.classList.add('button-list__toggle-close--closed');
  } else {
    navHeader.classList.add('page-header__nav-list--closed');
    navHeader.classList.add('page-header__nav-list--opened');
    buttonOff.classList.remove('button-list__toggle-close--closed');
    buttonOff.classList.add('button-list__toggle-close--opened');
    buttonOn.classList.remove('button-list__toggle-close--opened');
    buttonOn.classList.add('button-list__toggle-close--closed');
  }
});

buttonOff.addEventListener('click', function() {
  if (navHeader.classList.contains('page-header__nav-list--opened')) {
    navHeader.classList.remove('page-header__nav-list--opened');
    navHeader.classList.add('page-header__nav-list--closed');
    buttonOff.classList.remove('button-list__toggle-close--opened');
    buttonOff.classList.add('button-list__toggle-close--closed');
    buttonOn.classList.remove('button-list__toggle-close--closed');
    buttonOn.classList.add('button-list__toggle-close--opened');
  } else {
    navHeader.classList.add('page-header__nav-list--opened');
    navHeader.classList.remove('page-header__nav-list--closed');
    buttonOff.classList.remove('button-list__toggle-close--opened');
    buttonOff.classList.add('button-list__toggle-close--closed');
    buttonOn.classList.remove('button-list__toggle-close--closed');
    buttonOn.classList.add('button-list__toggle-close--opened');
  }
});
