'use strict';
import $ from 'jquery';

let isOpen = false;

const open = ($btn, $nav) => {
  $btn
    .removeClass('is-close')
    .addClass('is-open');

  $nav.addClass('is-open');

  isOpen = true;
};

const close = ($btn, $nav) => {
  $btn
    .removeClass('is-open')
    .addClass('is-close');

  $nav.removeClass('is-open');

  isOpen = false;
};

const handleClickToggleBtn = ($btn, $nav) =>
  isOpen ? close($btn, $nav) : open($btn, $nav);

const handleClickHashLink = ($btn, $nav) => isOpen && close($btn, $nav);

export default function () {
  const $btn = $('.header__btn');
  const $nav = $('.nav');
  $btn.on('click', handleClickToggleBtn.bind(null, $btn, $nav));

  const $hashLink = $('a[href^="#"]');
  $hashLink.on('click', handleClickHashLink.bind(null, $btn, $nav));
}
