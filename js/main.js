'use strict';
import 'babel-polyfill';
import {render} from 'react-dom';
import App from './components/app';
import {contents, exhibits, photos, result} from './data';
import developerMessage from './developerMessage';

const init = () => {
  const app = new App({
    renderer: el => render(el, document.querySelector('#app')),
    initialState: {
      contents,
      exhibits,
      photos,
      result,
      isPC: false,
      isNavOpen: false,
      gallery: {
        isOpen: false,
        currentIndex: 0
      },
      showingResult: exhibits[0].id
    }
  });

  app.update(state => state);

  developerMessage();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
