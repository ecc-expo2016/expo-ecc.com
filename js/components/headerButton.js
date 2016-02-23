'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import classNames from 'classnames';

export default class HeaderButton extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    const {isOpen} = this.props;

    const classes = {
      'header-sp__btn': true,
      'is-open': isOpen,
      'is-close': !isOpen
    };

    return (
      <button
        className={classNames(classes)}
        onClick={this.handleClick}>
        <div className='header-sp__btn__line header-sp__btn__line--top' />
        <div className='header-sp__btn__line header-sp__btn__line--middle' />
        <div className='header-sp__btn__line header-sp__btn__line--bottom' />
      </button>
    );
  }
}
