'use strict';
import $ from 'jquery';

const $document = $(document);
const $html = $('html');
let $fullscreen = null;
let $next = null;
let $prev = null;
let isOpen = false;

const photos = [
  '/img/gallery_01.png',
  '/img/gallery_02.png',
  '/img/gallery_03.png',
  '/img/gallery_04.png',
  '/img/gallery_05.png',
  '/img/gallery_06.png',
  '/img/gallery_07.png',
  '/img/gallery_08.png'
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
  const $documentFragment = $(document.createDocumentFragment());

  photos.forEach((photo, i) => {
    const $img = $('<img>').addClass(classNames.img)
      .attr('src', photo).data('index', i);
    const $item = $('<li>').addClass(classNames.item).append($img);
    $documentFragment.append($item);
  });

  $gallery.html($documentFragment);
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

    const index = $img.data('index');
    const $newImg = $('<img>')
      .addClass(classNames.fs.img)
      .attr('src', photos[index]).data('index', index)
      .appendTo($fullscreen);

    $fullscreen.addClass('is-open');
    toggleButton(index);

    isOpen = true;
  }
};

const changeImage = count => {
  if (isOpen) {
    const $img = $fullscreen.find(`.${classNames.fs.img}`);
    const index = $img.data('index');
    let newIndex = index + count;

    const isFirst = newIndex === -1;
    const isEnd = newIndex === photos.length;

    if (isFirst || isEnd) {return;}

    $img.attr('src', photos[newIndex]).data('index', newIndex);
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
  const ESCAPE_KEY = 27;
  const ARROW_RIGHT = 39;
  const ARROW_LEFT = 37;

  switch (evt.keyCode) {
    case ESCAPE_KEY:
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

export default async function () {
  const $gallery = $('.gallery');
  createPhotoElements($gallery);

  const $imgs = $gallery.find('img');

  await Promise.all([...$imgs].map(img => {
    return new Promise(done => $(img).on('load', done));
  }));

  $fullscreen = $(`.${classNames.fs.root}`);
  $next = $fullscreen.find(`.${classNames.fs.next}`);
  $prev = $fullscreen.find(`.${classNames.fs.prev}`);

  for (const img of $imgs) {
    const $img = $(img);
    $img.on('click', zoomImage.bind(null, $img)).addClass('is-loaded');
  }

  $next.on('click', changeImage.bind(null, 1));
  $prev.on('click', changeImage.bind(null, -1));

  const $bg = $fullscreen.find(`.${classNames.fs.bg}`);
  $bg.on('click', closeImage);

  $document.on('keydown', handleKeyDown);
}
