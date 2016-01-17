'use strict';
import PIXI from 'pixi.js';
import TWEEN from 'tween.js';
import random from 'lodash.random';
import sample from 'lodash.sample';
import times from 'lodash.times';
import debounce from 'lodash.debounce';

export default class Symbol {
  constructor(container) {
    this.container = container;
    this.renderer = new PIXI.autoDetectRenderer(undefined, undefined, {
      antialias: window.devicePixelRatio <= 1,
      transparent: true
    });
    this.stage = new PIXI.Container();
    this.colors = [0x00a0e9, 0xcd2f60, 0xfff100, 0xffffff, 0xffffff];
    this.container.appendChild(this.renderer.view);
    this.adjustSize = debounce(this.adjustSize, 100);

    this.adjustSize();
    this.animate();

    window.addEventListener('resize', this.adjustSize);
  }
  adjustSize = () => {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.symbolRadius = Math.min(this.width, this.height) * 0.4;
    this.pieceSize = Math.max(
      Math.min(this.width * this.height / 10000, 80), 40
    );
    this.renderer.resize(this.width, this.height);
  };
  animate = () => {
    times(3, this.createPiece);
    TWEEN.update();
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate);
  };
  createPiece = () => {
    const piece = new PIXI.Graphics();
    const corner = 5;
    piece.beginFill(sample(this.colors));

    times(corner, n => {
      const angle = 360 * n / corner;
      const x = Math.cos(angle * Math.PI / 180) * random(0, this.pieceSize);
      const y = Math.sin(angle * Math.PI / 180) * random(0, this.pieceSize);

      if (n === 0) {
        piece.moveTo(x, y);
      } else {
        piece.lineTo(x, y);
      }
    });

    piece.endFill();
    piece.alpha = 0;
    piece.scale.x = 0.4;
    piece.rotation = random(0, 180);
    piece.x = this.width;
    piece.y = this.height;
    this.stage.addChild(piece);

    const duration = random(3000, 12000);
    const to = sample([
      {
        x: -this.pieceSize,
        y: random(-this.pieceSize, this.symbolRadius)
      }, {
        x: random(-this.pieceSize, this.symbolRadius),
        y: -this.pieceSize
      }
    ]);

    new TWEEN.Tween(piece)
      .to({alpha: 0.4}, duration * 2 / 3)
      .start();

    new TWEEN.Tween(piece)
      .to({x: to.x, y: to.y}, duration)
      .onComplete(() => this.stage.removeChild(piece))
      .start();
  };
}
