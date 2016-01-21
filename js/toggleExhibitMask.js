'use strict';
import $ from 'jquery';

const className = 'exhibit-panel';

const hideName = function ($overlay) {
  const $name = $(this)
    .closest(`.${className}`)
    .find(`.${className}__name`);

  $name.css('opacity', 0);
};

const showName = function ($overlay) {
  const $name = $(this)
    .closest(`.${className}`)
    .find(`.${className}__name`);

  $name.css('opacity', 1);
};

export default function () {
  const $overlay = $(`.${className}__overlay`);

  $overlay.on({
    mouseenter: hideName,
    mouseleave: showName
  });
}
