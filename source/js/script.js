var navHeader = document.querySelector('.page-header__nav-list');
var buttonOn = document.querySelector('.button-list__button-open');
var buttonOff = document.querySelector('.button-list__button-close');

navHeader.classList.remove('page-header__nav-list--nojs');
buttonOn.classList.remove('button-list__button-open--nojs');
buttonOff.classList.remove('button-list__button-close--nojs');

buttonOn.addEventListener('click', function() {
  if (navHeader.classList.contains('page-header__nav-list--closed')) {
    navHeader.classList.remove('page-header__nav-list--closed');
    navHeader.classList.add('page-header__nav-list--opened');
    buttonOff.classList.remove('button-list__button-close--closed');
    buttonOff.classList.add('button-list__button-close--opened');
    buttonOn.classList.remove('button-list__button-close--opened');
    buttonOn.classList.add('button-list__button-close--closed');
  } else {
    navHeader.classList.add('page-header__nav-list--closed');
    navHeader.classList.add('page-header__nav-list--opened');
    buttonOff.classList.remove('button-list__button-close--closed');
    buttonOff.classList.add('button-list__button-close--opened');
    buttonOn.classList.remove('button-list__button-close--opened');
    buttonOn.classList.add('button-list__button-close--closed');
  }
});

buttonOff.addEventListener('click', function() {
  if (navHeader.classList.contains('page-header__nav-list--opened')) {
    navHeader.classList.remove('page-header__nav-list--opened');
    navHeader.classList.add('page-header__nav-list--closed');
    buttonOff.classList.remove('button-list__button-close--opened');
    buttonOff.classList.add('button-list__button-close--closed');
    buttonOn.classList.remove('button-list__button-close--closed');
    buttonOn.classList.add('button-list__button-close--opened');
  } else {
    navHeader.classList.add('page-header__nav-list--opened');
    navHeader.classList.remove('page-header__nav-list--closed');
    buttonOff.classList.remove('button-list__button-close--opened');
    buttonOff.classList.add('button-list__button-close--closed');
    buttonOn.classList.remove('button-list__button-close--closed');
    buttonOn.classList.add('button-list__button-close--opened');
  }
});
