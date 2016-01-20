'use strict';
import $ from 'jquery';
import throttle from 'lodash.throttle';

const duration = 800;
let prevHash;
let throttled;

const scrollToHash = (hash, $scrollElement) => {
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

  const handleClickHashLink = function (evt) {
    evt.preventDefault();

    const hash = $(this).attr('href').slice(1);
    scrollToHash(hash, $scrollElement);
  };

  const $hashLink = $('a[href^="#"]');
  $hashLink.on('click', handleClickHashLink);
}
