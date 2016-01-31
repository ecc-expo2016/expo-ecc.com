'use strict';
import debounce from 'lodash.debounce';

const isIE11 = document.documentMode === 11;

const fixHeight = el => {
  const {style} = el;
  style.height = '';
  style.height = `${el.offsetHeight}px`;
};

const fixElementsHeight = debounce(els => {
  for (const el of els) {
    fixHeight(el);
  }
}, 100);

export default async function () {
  if (isIE11) {
    const imgs = document.querySelectorAll('.gallery__img img');

    await Promise.all([...imgs].map(img => {
      return new Promise(done => img.addEventListener('load', done));
    }));

    const fn = fixElementsHeight.bind(null, imgs);

    fn();

    window.addEventListener('resize', fn);
  }
}
