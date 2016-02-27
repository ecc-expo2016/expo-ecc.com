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
  preloadImage(props = this.props) {
    const {original} = props;
    const image = new Image();
    image.addEventListener('load', () => this.setState({isLoaded: true}));
    image.src = original;
  }
  componentDidMount() {
    this.preloadImage();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.original !== nextProps.original) {
      this.setState({isLoaded: false});
      this.preloadImage(nextProps);
    }
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
