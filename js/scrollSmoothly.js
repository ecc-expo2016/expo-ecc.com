'use strict';
import Jump from 'jump.js';
import throttle from 'lodash.throttle';

const jump = new Jump();
const duration = 800;
let throttled = null;
let prevTarget = null;

const scrollToTarget = (target, evt) => {
  evt.preventDefault();

  if (target !== prevTarget) {
    throttled = throttle(
      jump.jump.bind(jump, target, {duration}),
      duration * 2,
      {trailing: false}
    );
    prevTarget = target;
  }

  throttled();
};

export default function () {
  const hashLinks = document.querySelectorAll('a[href^="#"]');

  for (const hashLink of hashLinks) {
    const {href} = hashLink;
    const hash = href.substr(href.lastIndexOf('#'));
    const target = hash !== '#top' ? hash : 'body';

    hashLink.addEventListener('click', scrollToTarget.bind(null, target));
  }
}
