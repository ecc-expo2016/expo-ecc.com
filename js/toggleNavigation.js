'use strict';
import $ from 'jquery';

const $btn = $('.header__btn');
const $nav = $('.nav');
let isOpen = false;

const open = () => {
  $btn
    .removeClass('is-close')
    .addClass('is-open');

  $nav.addClass('is-open');

  isOpen = true;
};

const close = () => {
  $btn
    .removeClass('is-open')
    .addClass('is-close');

  $nav.removeClass('is-open');

  isOpen = false;
};

const handleClickHashLink = () => isOpen && close();

export default function () {
  $btn.on('click', () => isOpen ? close() : open());

  const $hashLink = $('a[href^="#"]');
  $hashLink.on('click', handleClickHashLink);
}
