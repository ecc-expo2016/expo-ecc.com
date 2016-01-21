'use strict';
import $ from 'jquery';

const className = 'exhibit-panel';

const hideName = $name => {
  $name.css('opacity', 0);
};

const showName = $name => {
  $name.css('opacity', 1);
};

export default function () {
  const $overlays = $(`.${className}__overlay`);

  for (const overlay of $overlays) {
    const $overlay = $(overlay);
    const $name = $overlay
      .closest(`.${className}`)
      .find(`.${className}__name`);

    $overlay.on({
      mouseenter: hideName.bind(null, $name),
      mouseleave: showName.bind(null, $name)
    });
  }
}
