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
import photoGallery from './photoGallery';
import fixFlexbox from './fixFlexbox';
import developerMessage from './developerMessage';

const init = () => {
  createSymbol();
  toggleNavigation();
  indicateActiveNavigation();
  scrollSmoothly();
  shareToSocial();
  toggleToTopButton();
  toggleExhibitMask();
  photoGallery();
  fixFlexbox();
  developerMessage();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
