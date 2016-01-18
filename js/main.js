'use strict';
import 'babel-polyfill';
import Symbol from './symbol';

const init = () => {
  new Symbol(document.querySelector('.symbol'));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
