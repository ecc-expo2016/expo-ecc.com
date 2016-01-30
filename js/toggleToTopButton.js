'use strict';
import debounce from 'lodash.debounce';

const toggleToTopButton = debounce(buttonStyle => {
  if (window.pageYOffset > window.innerHeight) {
    buttonStyle.visibility = 'visible';
    buttonStyle.opacity = 1;
    return;
  }

  buttonStyle.visibility = 'hidden';
  buttonStyle.opacity = 0;
}, 300);

export default function () {
  const fn = toggleToTopButton.bind(
    null,
    document.querySelector('.to-top').style
  );

  fn();

  window.addEventListener('scroll', fn);
  window.addEventListener('resize', fn);
}
