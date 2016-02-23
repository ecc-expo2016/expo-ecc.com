'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GalleryImage from './galleryImage';

const isIE11 = document.documentMode === 11;

export default class Gallery extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    currentIndex: PropTypes.number.isRequired
  };
  changeToNextImage = () => {
    const {photos, currentIndex} = this.props;

    if (photos[currentIndex + 1]) {
      this.dispatch('changeGallery', 1);
    }
  };
  changeToPrevImage = () => {
    const {photos, currentIndex} = this.props;

    if (photos[currentIndex - 1]) {
      this.dispatch('changeGallery', -1);
    }
  };
  closeImage = () => {
    this.dispatch('closeGallery');
  };
  handlePhotoClick = index => {
    this.dispatch('openGallery', index);
  };
  handleKeyDown = evt => {
    const ESCAPE = 27;
    const ARROW_RIGHT = 39;
    const ARROW_LEFT = 37;

    switch (evt.keyCode) {
      case ESCAPE:
        this.closeImage();
        break;
      case ARROW_RIGHT:
        this.changeToNextImage();
        break;
      case ARROW_LEFT:
        this.changeToPrevImage();
        break;
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmoun() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    const {photos, isOpen, currentIndex} = this.props;

    const nextClasses = {
      'gallery-fullscreen__btn': true,
      'gallery-fullscreen__next': true,
      'is-shown': currentIndex < photos.length - 1
    };

    const prevClasses = {
      'gallery-fullscreen__btn': true,
      'gallery-fullscreen__prev': true,
      'is-shown': currentIndex > 0
    };

    return (
      <div>
        <ul className='gallery'>
          {photos.map(({thumbnail, original}, i) =>
            <li
              key={i}
              className='gallery__item'>
              <figure
                className='gallery__img'
                onClick={this.handlePhotoClick.bind(this, i)}>
                <img src={thumbnail} />
              </figure>
            </li>
          )}
        </ul>

        <ReactCSSTransitionGroup
          component='div'
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {isOpen && (
            <div className='gallery-fullscreen'>
              <div
                className='gallery-fullscreen__bg'
                onClick={this.closeImage} />
              <ul className='gallery-fullscreen__nav'>
                <li
                  className={classNames(nextClasses)}
                  onClick={this.changeToNextImage} />
                <li
                  className={classNames(prevClasses)}
                  onClick={this.changeToPrevImage} />
              </ul>
              <GalleryImage
                thumbnail={photos[currentIndex].thumbnail}
                original={photos[currentIndex].original} />
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
