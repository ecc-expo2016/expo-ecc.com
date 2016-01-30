'use strict';
const title = 'ECC EXPO 2016';
const href = 'http://expo-ecc.com/';
const twitterId = 'EccCcad';

const shareOnTwitter = () => {
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

const shareOnFacebook = () => {
  FB.ui({
    method: 'share',
    href
  });
};

export default function () {
  const twitterButtons = document.querySelectorAll('.twitter');

  for (const twitter of twitterButtons) {
    twitter.addEventListener('click', shareOnTwitter);
  }

  const facebookButtons = document.querySelectorAll('.facebook');

  for (const facebook of facebookButtons) {
    facebook.addEventListener('click', shareOnFacebook);
  }
}
