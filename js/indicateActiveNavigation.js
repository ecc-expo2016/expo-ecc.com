'use strict';
import debounce from 'lodash.debounce';

const moveToActiveNavigation = debounce((sections, nav) => {
  const bgStyle = nav.querySelector('.nav__bg').style;
  bgStyle.opacity = 0;

  const baseLine = window.pageYOffset + window.innerHeight / 2;

  for (const section of sections) {
    const {offsetTop} = section;
    const offsetBottom = offsetTop + section.offsetHeight;
    const isMatch = offsetTop <= baseLine && offsetBottom >= baseLine;

    if (isMatch) {
      const hash = section.id;
      const activeLink = nav.querySelector(`a[href="#${hash}"]`);
      const {offsetLeft} = activeLink.parentNode;

      bgStyle.transform = bgStyle.webkitTransform =
        `translate3d(${offsetLeft}px,0,0)`;
      bgStyle.opacity = 1;
      break;
    }
  }
}, 24);

export default function () {
  const fn = moveToActiveNavigation.bind(
    null,
    document.querySelectorAll('.section'),
    document.querySelector('.nav')
  );

  fn();

  window.addEventListener('scroll', fn);
  window.addEventListener('resize', fn);
}
