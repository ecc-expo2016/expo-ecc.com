'use strict';
import React from 'react';
import {Flux} from 'flumpt';
import Header from './header';
import Main from './main';
import Footer from './footer';

export default class App extends Flux {
  handleResize() {
    this.update(state => {
      const breakPoint = 1140;
      const isPC = window.innerWidth >= breakPoint;
      state.isPC = isPC;
      return state;
    });
  }
  subscribe() {
    this.handleResize = this.handleResize.bind(this);

    this.handleResize();

    this.on('toggleNavigation', () => {
      this.update(state => {
        const isNavOpen = !state.isNavOpen;
        state.isNavOpen = isNavOpen;
        return state;
      });
    });

    this.on('closeNavigation', () => {
      this.update(state => {
        state.isNavOpen = false;
        return state;
      });
    });

    this.on('openGallery', index => {
      this.update(state => {
        const {gallery} = state;
        gallery.isOpen = true;
        gallery.currentIndex = index;
        state.gallery = gallery;
        return state;
      });
    });

    this.on('closeGallery', () => {
      this.update(state => {
        const {gallery} = state;
        gallery.isOpen = false;
        state.gallery = gallery;
        return state;
      });
    });

    this.on('changeGallery', num => {
      this.update(state => {
        const {gallery} = state;
        gallery.currentIndex += num;
        state.gallery = gallery;
        return state;
      });
    });

    window.addEventListener('resize', this.handleResize);
  }
  render(state) {
    const {contents, exhibits, photos, isPC, isNavOpen, gallery} = state;

    return (
      <div>
        <Header
          contents={contents}
          isPC={isPC}
          isNavOpen={isNavOpen} />
        <Main
          contents={contents}
          exhibits={exhibits}
          photos={photos}
          gallery={gallery} />
        <Footer />
      </div>
    );
  }
}
