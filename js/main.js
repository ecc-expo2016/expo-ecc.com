'use strict';
import 'babel-polyfill';
import Symbol from './symbol';
import toggleNavigation from './toggleNavigation';
import smoothScroll from './smoothScroll';
import share from './share';

const init = () => {
  new Symbol(document.querySelector('.symbol'));
  toggleNavigation();
  smoothScroll();
  share();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
