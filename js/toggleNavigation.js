'use strict';
import $ from 'jquery';

let isOpen = false;

let open = ($btn, $nav) => {
  $btn
    .removeClass('is-close')
    .addClass('is-open');

  $nav.addClass('is-open');

  isOpen = true;
};

let close = ($btn, $nav) => {
  $btn
    .removeClass('is-open')
    .addClass('is-close');

  $nav.removeClass('is-open');

  isOpen = false;
};

const handleClickToggleBtn = () => isOpen ? close() : open();

const handleClickHashLink = () => isOpen && close();

export default function () {
  const $btn = $('.header__btn');
  const $nav = $('.nav');

  open = open.bind(null, $btn, $nav);
  close = close.bind(null, $btn, $nav);

  $btn.on('click', handleClickToggleBtn);

  const $hashLink = $('a[href^="#"]');
  $hashLink.on('click', handleClickHashLink);
}
