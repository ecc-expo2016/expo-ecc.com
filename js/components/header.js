'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import {scrollToTarget} from '../utils';
import HeaderLogo from './headerLogo';
import HeaderButton from './headerButton';
import Navigation from './navigation';

export default class Header extends Component {
  static propTypes = {
    contents: PropTypes.array.isRequired,
    isPC: PropTypes.bool.isRequired,
    isNavOpen: PropTypes.bool.isRequired
  };
  handleClickButton = () => {
    this.dispatch('toggleNavigation');
  };
  handleClickHashLink = target => {
    this.dispatch('closeNavigation');
    scrollToTarget(target);
  };
  render() {
    const {contents, isPC, isNavOpen} = this.props;

    return (
      <header className='header'>
        {!isPC && (
          <div className='header-sp'>
            <HeaderLogo onClick={this.handleClickHashLink} />
            <HeaderButton
              isOpen={isNavOpen}
              onClick={this.handleClickButton} />
          </div>
        )}
        <Navigation
          contents={contents}
          isOpen={isNavOpen}
          onClick={this.handleClickHashLink} />
      </header>
    );
  }
}
