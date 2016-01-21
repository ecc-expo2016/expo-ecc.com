#!/usr/bin/env node

'use strict';

// `-webkit-`が付与された`clip-path`が指定されていると正常に動作しない。（Safariのみ）
// autoprefixerを通した後に`-webkit-clip-path`が追加されるので削除するスクリプト。

const fs = require('fs');

const filePath = 'css/style.css';
const pattern = '-webkit-clip-path:url(/#hexagon);';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {throw err;}
  const newData = data.replace(pattern, '');

  fs.writeFile(filePath, newData, err => {
    if (err) {throw err;}
    console.log(`Succeeded to remove \`-webkit-clip-path\` from ${filePath} !`);
  });
});
