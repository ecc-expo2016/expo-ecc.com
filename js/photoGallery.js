'use strict';
import $ from 'jquery';
import throttle from 'lodash.throttle';

const $html = $('html');
let $fullscreen = null;
let $next = null;
let $prev = null;
let isOpen = false;

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

const createPhotoElements = $gallery => {
  const html = photos.map(({thumbnail}, i) => `
    <li class="${classNames.item}">
      <figure class="${classNames.img}" data-index="${i}">
        <img src="${thumbnail}">
      </figure>
    </li>
  `).join('');

  $gallery.html(html);
};

const toggleButton = index => {
  const isFirst = index === 0;
  const isEnd = index === photos.length - 1;

  if (isFirst) {
    $prev.removeClass(classNames.fs.shown);
  } else {
    $prev.addClass(classNames.fs.shown);
  }

  if (isEnd) {
    $next.removeClass(classNames.fs.shown);
  } else {
    $next.addClass(classNames.fs.shown);
  }
};

const zoomImage = $img => {
  if (!isOpen) {
    $html.addClass('freeze');

    const index = parseInt($img.attr('data-index'), 10);
    const {original} = photos[index];
    const $originalImage = $('<img>').addClass(classNames.fs.img)
      .attr({
        src: original,
        'data-index': index
      });

    $fullscreen.append($originalImage).addClass('is-open');
    toggleButton(index);

    isOpen = true;
  }
};

const changeImage = count => {
  if (isOpen) {
    const $img = $fullscreen.find(`.${classNames.fs.img}`);
    const index = parseInt($img.attr('data-index'), 10);
    const newIndex = index + count;

    const isFirst = newIndex === -1;
    const isEnd = newIndex === photos.length;

    if (isFirst || isEnd) {return;}

    if (document.readyState !== 'complete') {
      $img.attr('src', '');
    }

    const {original} = photos[newIndex];
    $img.attr('src', original).attr('data-index', newIndex);
    toggleButton(newIndex);
  }
};

const closeImage = async () => {
  if (isOpen) {
    $html.removeClass('freeze');
    $fullscreen.removeClass('is-open');
    $next.removeClass(classNames.fs.shown);
    $prev.removeClass(classNames.fs.shown);

    await new Promise(done => $fullscreen.on('transitionend', done));
    $fullscreen.find(`.${classNames.fs.img}`).remove();

    isOpen = false;
  }
};

const handleKeyDown = evt => {
  const ESCAPE = 27;
  const ARROW_RIGHT = 39;
  const ARROW_LEFT = 37;

  switch (evt.keyCode) {
    case ESCAPE:
      closeImage();
      break;
    case ARROW_RIGHT:
      changeImage(1);
      break;
    case ARROW_LEFT:
      changeImage(-1);
      break;
  }
};

const preloadOriginalImages = () => {
  const html = photos.map(({original}) =>
    `<link rel="prefetch" href="${original}" type="image/png">`
  ).join('');

  $('head').append(html);
};

export default function () {
  const $gallery = $('.gallery');
  createPhotoElements($gallery);
  preloadOriginalImages();

  $fullscreen = $(`.${classNames.fs.root}`);
  $next = $fullscreen.find(`.${classNames.fs.next}`);
  $prev = $fullscreen.find(`.${classNames.fs.prev}`);
  const $imgs = $gallery.find(`.${classNames.img}`);

  for (const img of $imgs) {
    const $img = $(img);
    $img.on('click', zoomImage.bind(null, $img));
  }

  $next.on('click', changeImage.bind(null, 1));
  $prev.on('click', changeImage.bind(null, -1));
  $fullscreen.find(`.${classNames.fs.bg}`).on('click', closeImage);
  $(document).on('keydown', handleKeyDown);
}
