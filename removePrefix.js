#!/usr/bin/env node

'use strict';

// `-webkit-`が付与された`clip-path`が指定されていると正常に動作しない。（Safariのみ）
// autoprefixerを通した後に`-webkit-clip-path`が追加されるので削除するスクリプト。

const fs = require('fs');

const filePath = 'css/style.css';
const pattern = /\n? *-webkit-clip-path: ?url\("?\/#[a-zA-Z_\-]*"?\);?/g;

process.stdin.resume();
process.stdin.setEncoding('utf8');

new Promise(done => {
  let data = '';
  process.stdin.on('data', chunk => data += chunk);
  process.stdin.on('end', () => done(data));
})
  .then(data => Promise.resolve(data.replace(pattern, '')))
  .then(data => {
    fs.writeFileSync(filePath, data, 'utf8');
    console.log(`Succeeded to remove \`-webkit-clip-path\``);
  });
