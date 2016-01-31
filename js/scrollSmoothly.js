'use strict';
import Jump from 'jump.js';
import throttle from 'lodash.throttle';

const jump = new Jump();
const duration = 800;

const scrollToTarget = throttle(target => {
  jump.jump(target, {duration});
}, duration, {trailing: false});

export default function () {
  const hashLinks = document.querySelectorAll('a[href^="#"]');

  for (const hashLink of hashLinks) {
    const {href} = hashLink;
    const hash = href.substr(href.lastIndexOf('#'));
    const target = hash !== '#top' ? hash : 'body';

    hashLink.addEventListener('click', evt => evt.preventDefault());
    hashLink.addEventListener('click', scrollToTarget.bind(null, target));
  }
}
