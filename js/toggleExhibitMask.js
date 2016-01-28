'use strict';
import $ from 'jquery';

const className = 'exhibit-panel';

const hideMask = ($overlay, $name) => {
  $overlay.css('opacity', 0);
  $name.css('opacity', 0);
};

const showMask = ($overlay, $name) => {
  $overlay.css('opacity', 1);
  $name.css('opacity', 1);
};

export default function () {
  const $overlays = $(`.${className}__overlay`);

  for (const overlay of $overlays) {
    const $overlay = $(overlay);
    const $name = $overlay
      .closest(`.${className}`).find(`.${className}__name`);

    $overlay.on({
      mouseenter: hideMask.bind(null, $overlay, $name),
      mouseleave: showMask.bind(null, $overlay, $name)
    });
  }
}
