'use strict';
import React from 'react';
import {Component} from 'flumpt';
import debounce from 'lodash.debounce';
import {scrollToTarget} from '../utils';

export default class Footer extends Component {
  state = {
    isShown: false
  };
  handleClick = evt => {
    evt.preventDefault();
    scrollToTarget('top');
  };
  toggleToTopButton = debounce(() => {
    if (window.pageYOffset > window.innerHeight) {
      this.setState({isShown: true});
      return;
    }

    this.setState({isShown: false});
  }, 300);
  componentDidMount() {
    this.toggleToTopButton();

    window.addEventListener('scroll', this.toggleToTopButton);
    window.addEventListener('resize', this.toggleToTopButton);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleToTopButton);
    window.removeEventListener('resize', this.toggleToTopButton);
  }
  render() {
    const {isShown} = this.state;

    return (
      <footer className='footer container'>
        <p>
          <a
            className='ecc'
            href='http://comp.ecc.ac.jp/'
            target='_blank'>
            <img
              src='/img/ecc_comp.png'
              alt='ECCコンピュータ専門学校' />
          </a>
        </p>

        <p className='grow'>
          <small>Copyright © ECC EXPO 2016 All Rights Reserved.</small>
        </p>

        <a
          className='to-top'
          href='#top'
          style={isShown ? {
            visibility: 'visible',
            opacity: 1
          } : null}
          onClick={this.handleClick} />
      </footer>
    );
  }
}
