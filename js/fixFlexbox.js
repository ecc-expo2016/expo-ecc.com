'use strict';
import debounce from 'lodash.debounce';

const isIE11 = document.documentMode === 11;

const fixHeight = el => {
  const {style} = el;
  style.height = '';
  style.height = `${el.offsetHeight}px`;
};

export default async function () {
  if (isIE11) {
    const imgs = document.querySelectorAll('.gallery__img');

    await Promise.all([...imgs].map(img => {
      return new Promise(done => img.addEventListener('load', done));
    }));

    const fn = debounce(() => {
      for (const img of imgs) {
        fixHeight(img);
      }
    }, 100);

    fn();

    window.addEventListener('resize', fn);
  }
}
