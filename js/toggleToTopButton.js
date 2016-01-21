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
  const fn = toggleToTopButton.bind(null, $('.to-top'));

  fn();

  $window.on({
    scroll: fn,
    resize: fn
  });
}
