'use strict';
const className = 'exhibit-panel';

const hideMask = (overlayStyle, nameStyle) => {
  overlayStyle.opacity = 0;
  nameStyle.opacity = 0;
};

const showMask = (overlayStyle, nameStyle) => {
  overlayStyle.opacity = 1;
  nameStyle.opacity = 1;
};

export default function () {
  const panels = document.querySelectorAll(`.${className}`);

  for (const panel of panels) {
    const overlay = panel.querySelector(`.${className}__overlay`);
    const overlayStyle = overlay.style;
    const nameStyle = panel.querySelector(`.${className}__name`).style;

    overlay.addEventListener(
      'mouseenter',
      hideMask.bind(null, overlayStyle, nameStyle)
    );
    overlay.addEventListener(
      'mouseleave',
      showMask.bind(null, overlayStyle, nameStyle)
    );
  }
}
