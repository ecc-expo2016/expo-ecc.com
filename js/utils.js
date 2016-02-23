'use strict';
import throttle from 'lodash.throttle';
import Jump from 'jump.js';

const title = 'ECC EXPO 2016';
const href = 'http://expo-ecc.com/';
const twitterId = 'EccCcad';

export const shareOnTwitter = () => {
  const url = 'https://twitter.com/intent/tweet?' +
    `related=${twitterId}&` + `text=${title}&` +
    `url=${href}&` + `via=${twitterId}`;
  const width = 550;
  const height = 280;
  const top = Math.round((window.screen.height - height) / 2);
  const left = Math.round((window.screen.width - width) / 2);
  const opts = {width, height, top, left};
  const features = Object.keys(opts)
    .map(key => `${key}=${opts[key]}`).join(',');

  window.open(url, null, features);
};

export const shareOnFacebook = () => {
  FB.ui({
    method: 'share',
    href
  });
};

const jump = new Jump();
const duration = 800;

export const scrollToTarget = throttle(target => {
  target = target === 'top' ? 'body' : `#${target}`;
  jump.jump(target, {duration});
}, duration, {trailing: false});
