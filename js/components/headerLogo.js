'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';

export default class HeaderLogo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
  handleClick = evt => {
    evt.preventDefault();
    this.props.onClick('top');
  };
  render() {
    return (
      <h1 className='header-sp__logo'>
        <a
          href='#top'
          onClick={this.handleClick}>
          <img
            src='/img/logo.svg'
            width='270'
            height='28'
            alt='ECC EXPO 2016' />
        </a>
      </h1>
    );
  }
}
