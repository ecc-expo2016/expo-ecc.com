'use strict';
import 'picturefill';
import 'babel-polyfill';
import createSymbol from './createSymbol';
import toggleNavigation from './toggleNavigation';
import indicateActiveNavigation from './indicateActiveNavigation';
import scrollSmoothly from './scrollSmoothly';
import shareToSocial from './shareToSocial';
import toggleToTopButton from './toggleToTopButton';
import toggleExhibitMask from './toggleExhibitMask';
import developerMessage from './developerMessage';

const init = () => {
  createSymbol();
  toggleNavigation();
  indicateActiveNavigation();
  scrollSmoothly();
  shareToSocial();
  toggleToTopButton();
  toggleExhibitMask();
  developerMessage();
};

if (document.readyState === 'loading') {
  $(init);
} else {
  init();
}
