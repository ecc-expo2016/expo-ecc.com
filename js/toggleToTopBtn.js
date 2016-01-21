'use strict';
import $ from 'jquery';
import debounce from 'lodash.debounce';

const $window = $(window);

const toggleToTopButton = debounce($btn => {
  if ($window.scrollTop() > $window.height()) {
    $btn.css({
      visibility: 'visible',
      opacity: 1
    });
  } else {
    $btn.css({
      visibility: 'hidden',
      opacity: 0
    });
  }
}, 300);

export default function () {
  const $btn = $('.to-top');
  const fn = toggleToTopButton.bind(null, $btn);

  fn();

  $window.on({
    scroll: fn,
    resize: fn
  });
}
