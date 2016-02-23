'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';

export default class GalleryImage extends Component {
  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired
  };
  state = {
    isLoaded: false
  };
  componentDidMount() {
    const {original} = this.props;
    const image = new Image();
    image.src = original;
    image.addEventListener('load', () => this.setState({isLoaded: true}));
  }
  render() {
    const {thumbnail, original} = this.props;
    const {isLoaded} = this.state;

    return (
      <img
        className='gallery-fullscreen__img'
        src={isLoaded ? original : thumbnail} />
    );
  }
}
