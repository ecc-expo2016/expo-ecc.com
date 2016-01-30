'use strict';
let isOpen = false;

const open = (buttonClasses, navClasses) => {
  buttonClasses.remove('is-close');
  buttonClasses.add('is-open');
  navClasses.add('is-open');

  isOpen = true;
};

const close = (buttonClasses, navClasses) => {
  buttonClasses.remove('is-open');
  buttonClasses.add('is-close');
  navClasses.remove('is-open');

  isOpen = false;
};

const toggleNavigation = (buttonClasses, navClasses) => {
  if (isOpen) {
    return close(buttonClasses, navClasses);
  }

  open(buttonClasses, navClasses);
};

const closeNavigation = (buttonClasses, navClasses) => {
  if (isOpen) {
    close(buttonClasses, navClasses);
  }
};

export default function () {
  const button = document.querySelector('.header__btn');
  const buttonClasses = button.classList;
  const navClasses = document.querySelector('.nav').classList;

  button.addEventListener(
    'click',
    toggleNavigation.bind(null, buttonClasses, navClasses)
  );

  const hashLinks = document.querySelectorAll('a[href^="#"]');

  for (const hashLink of hashLinks) {
    hashLink.addEventListener(
      'click',
      closeNavigation.bind(null, buttonClasses, navClasses)
    );
  }
}
