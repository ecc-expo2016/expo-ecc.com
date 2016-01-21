'use strict';
import 'babel-polyfill';
import 'picturefill';
import Symbol from './symbol';
import toggleNavigation from './toggleNavigation';
import currentNavigation from './currentNavigation';
import toggleToTopBtn from './toggleToTopBtn';
import toggleExhibitMask from './toggleExhibitMask';
import smoothScroll from './smoothScroll';
import share from './share';
import developerMessage from './developerMessage';

const init = () => {
  new Symbol(document.querySelector('.symbol'));
  toggleNavigation();
  currentNavigation();
  toggleToTopBtn();
  toggleExhibitMask();
  smoothScroll();
  share();
  developerMessage();
};

if (document.readyState === 'loading') {
  $(init);
} else {
  init();
}
