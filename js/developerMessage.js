'use strict';

const isChrome = window.navigator.userAgent.indexOf('Chrome') !== -1;

export default function () {
  if (isChrome) {
    return console.log(
      '\n' +
      ' %c  All of source code is here !                  ' + '%c\n' +
      ' %c  https://github.com/ecc-expo2016/expo-ecc.com  ',

      'padding-top: 5px; color: #fff; background: #444;', '',
      'padding-bottom: 5px; color: #00b7ee; background: #444;'
    );
  }

  console.log(
    'All of source code is here !\n' +
    'https://github.com/ecc-expo2016/expo-ecc.com'
  );
}
