'use strict';
import throttle from 'lodash.throttle';

const rootClasses = document.documentElement.classList;
let isOpen = false;
let isLoaded = false;

const photos = [
  {
    thumbnail: '/img/gallery_01_thumbnail.png',
    original: '/img/gallery_01.png'
  }, {
    thumbnail: '/img/gallery_02_thumbnail.png',
    original: '/img/gallery_02.png'
  }, {
    thumbnail: '/img/gallery_03_thumbnail.png',
    original: '/img/gallery_03.png'
  }, {
    thumbnail: '/img/gallery_04_thumbnail.png',
    original: '/img/gallery_04.png'
  }, {
    thumbnail: '/img/gallery_05_thumbnail.png',
    original: '/img/gallery_05.png'
  }, {
    thumbnail: '/img/gallery_06_thumbnail.png',
    original: '/img/gallery_06.png'
  }, {
    thumbnail: '/img/gallery_07_thumbnail.png',
    original: '/img/gallery_07.png'
  }, {
    thumbnail: '/img/gallery_08_thumbnail.png',
    original: '/img/gallery_08.png'
  }
];

const classNames = {
  root: 'gallery',
  item: 'gallery__item',
  img: 'gallery__img',
  fs: {
    root: 'gallery-fullscreen',
    img: 'gallery-fullscreen__img',
    bg: 'gallery-fullscreen__bg',
    next: 'gallery-fullscreen__next',
    prev: 'gallery-fullscreen__prev',
    shown: 'is-shown'
  }
};

const empty = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const createPhotoElements = container => {
  const html = photos.map(({thumbnail}, i) => `
    <li class="${classNames.item}">
      <figure class="${classNames.img}" data-index="${i}">
        <img src="${thumbnail}">
      </figure>
    </li>
  `).join('');

  empty(container);
  container.insertAdjacentHTML('beforeend', html);
};

const toggleButton = (fullscreen, index) => {
  const nextClasses = fullscreen.querySelector(`.${classNames.fs.next}`)
    .classList;
  const prevClasses = fullscreen.querySelector(`.${classNames.fs.prev}`)
    .classList;
  const isFirst = index === 0;
  const isEnd = index === photos.length - 1;

  if (isFirst) {
    prevClasses.remove(classNames.fs.shown);
  } else {
    prevClasses.add(classNames.fs.shown);
  }

  if (isEnd) {
    nextClasses.remove(classNames.fs.shown)
  } else {
    nextClasses.add(classNames.fs.shown);
  }
};

const openImage = (fullscreen, index) => {
  if (!isOpen) {
    rootClasses.add('freeze');
  }

  const {original} = photos[index];

  if (isOpen) {
    const prevImage = fullscreen.querySelector(`.${classNames.fs.img}`);

    if (!isLoaded) {
      prevImage.src = '';
    }

    prevImage.src = original;
    prevImage.dataset.index = index;
  } else {
    const newImage = `<img class="${classNames.fs.img}" src="${original}"
      data-index="${index}">`;

    fullscreen.insertAdjacentHTML('beforeend', newImage);
  }

  toggleButton(fullscreen, index);

  if (!isOpen) {
    fullscreen.classList.add('is-open');
    isOpen = true;
  }
};

const changeImage = (fullscreen, n) => {
  if (isOpen) {
    const index = parseInt(
      fullscreen.querySelector(`.${classNames.fs.img}`).dataset.index,
      10
    );
    const nextIndex = index + n;
    const isFirst = nextIndex === -1;
    const isEnd = nextIndex === photos.length;

    if (isFirst || isEnd) {return;}

    openImage(fullscreen, nextIndex);
  }
};

const closeImage = async fullscreen => {
  if (isOpen) {
    fullscreen.querySelector(`.${classNames.fs.next}`)
      .classList.remove(classNames.fs.shown);
    fullscreen.querySelector(`.${classNames.fs.prev}`)
      .classList.remove(classNames.fs.shown);
    rootClasses.remove('freeze');
    fullscreen.classList.remove('is-open');

    await new Promise(done => fullscreen.addEventListener(
      'transitionend',
      done
    ));

    fullscreen.removeChild(fullscreen.querySelector(`.${classNames.fs.img}`));
    isOpen = false;
  }
};

const handleKeyDown = (fullscreen, evt) => {
  const ESCAPE = 27;
  const ARROW_RIGHT = 39;
  const ARROW_LEFT = 37;

  switch (evt.keyCode) {
    case ESCAPE:
      closeImage(fullscreen);
      break;
    case ARROW_RIGHT:
      changeImage(fullscreen, 1);
      break;
    case ARROW_LEFT:
      changeImage(fullscreen, -1);
      break;
  }
};

const preloadOriginalImages = async () => {
  const html = photos.map(({original}) =>
    `<link rel="preload prefetch" href="${original}" type="image/png">`
  ).join('');

  document.querySelector('head').insertAdjacentHTML('beforeend', html);

  await Promise.all(
    [...document.querySelectorAll('link[rel="prefetch"]')].map(prefetch => {
      return new Promise(done => prefetch.addEventListener('load', done));
    })
  )

  isLoaded = true;
};

export default function () {
  const gallery = document.querySelector(`.${classNames.root}`);
  createPhotoElements(gallery);

  const galleryImgs = gallery.querySelectorAll(`.${classNames.img}`);
  const fullscreen = document.querySelector(`.${classNames.fs.root}`);

  for (const img of galleryImgs) {
    const index = parseInt(img.dataset.index, 10);
    img.addEventListener('click', openImage.bind(null, fullscreen, index));
  }

  fullscreen.querySelector(`.${classNames.fs.next}`).addEventListener(
    'click',
    changeImage.bind(null, fullscreen, 1)
  );
  fullscreen.querySelector(`.${classNames.fs.prev}`).addEventListener(
    'click',
    changeImage.bind(null, fullscreen, -1)
  );
  fullscreen.querySelector(`.${classNames.fs.bg}`).addEventListener(
    'click',
    closeImage.bind(null, fullscreen)
  );
  document.addEventListener('keydown', handleKeyDown.bind(null, fullscreen));

  setTimeout(preloadOriginalImages, 0);
}
