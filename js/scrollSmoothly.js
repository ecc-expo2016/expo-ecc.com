'use strict';
import $ from 'jquery';
import throttle from 'lodash.throttle';

const duration = 800;
let prevHash;
let throttled;

const scrollToHash = (hash, $scrollElement, evt) => {
  evt.preventDefault();

  if (hash !== prevHash) {
    let scrolling;

    if (hash === 'top') {
      scrolling = () => $scrollElement.animate({scrollTop: 0}, duration);
    } else {
      const $target = $(`#${hash}`);
      const scrollTop = $target.offset().top;
      scrolling = () => $scrollElement.animate({scrollTop}, duration);
    }

    throttled = throttle(scrolling, duration);
    prevHash = hash;
  }

  throttled();
};

export default function () {
  const $scrollElement = $('html, body');
  const $hashLinks = $('a[href^="#"]');

  for (const hashLink of $hashLinks) {
    const $hashLink = $(hashLink);
    const hash = $hashLink.attr('href').slice(1);
    $hashLink.on('click', scrollToHash.bind(null, hash, $scrollElement));
  }
}
