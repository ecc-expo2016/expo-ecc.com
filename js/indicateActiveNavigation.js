'use strict';
import $ from 'jquery';
import debounce from 'lodash.debounce';

const $window = $(window);

const moveToActiveNavigation = debounce(($sections, $navBg, $navContent) => {
  const baseLine = $window.scrollTop() + $window.height() / 2;
  $navBg.css('opacity', 0);

  for (const section of $sections) {
    const $section = $(section);
    const offsetTop = $section.offset().top;
    const offsetBottom = offsetTop + $section.height();
    const isMath = offsetTop <= baseLine && offsetBottom >= baseLine;

    if (isMath) {
      const hash = $section.attr('id');
      const $activeNav = $navContent.find(`a[href="#${hash}"]`);
      const {left} = $activeNav.parent().position();

      $navBg.css({
        transform: `translate(${left}px,0)`,
        opacity: 1
      });
      break;
    }
  }
}, 24);

export default function () {
  const $sections = $('.section');
  const $navBg = $('.nav__bg');
  const $navContent = $('.nav__list');
  const fn = moveToActiveNavigation.bind(null, $sections, $navBg, $navContent);

  fn();

  $window.on({
    scroll: fn,
    resize: fn
  });
}
