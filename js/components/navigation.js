'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import {shareOnTwitter, shareOnFacebook} from '../utils';

export default class Navigation extends Component {
  static propTypes = {
    contents: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };
  state = {
    current: null
  };
  indicateActiveNavigation = debounce(() => {
    const {contents} = this.props;
    const baseLine = window.pageYOffset + window.innerHeight / 2;
    const current = contents.find(({id}) => {
      const el = document.querySelector(`#${id}`);
      const {offsetTop, offsetHeight} = el;
      const offsetBottom = offsetTop + offsetHeight;
      const isMatch = offsetTop <= baseLine && offsetBottom >= baseLine;
      return isMatch;
    });

    this.setState({current: current && current.id});
  }, 24);
  handleClickNavigation = (target, evt) => {
    evt.preventDefault();
    this.props.onClick(target);
  };
  componentDidMount() {
    this.indicateActiveNavigation();

    window.addEventListener('scroll', this.indicateActiveNavigation);
    window.addEventListener('resize', this.indicateActiveNavigation);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.indicateActiveNavigation);
    window.removeEventListener('resize', this.indicateActiveNavigation);
  }
  render() {
    const {contents, isOpen} = this.props;
    const {current} = this.state;
    const offsetLeft = current && this.refs[current].offsetLeft;

    const classes = {
      'nav': true,
      'is-open': isOpen,
      'is-close': !isOpen
    };

    return (
      <nav className={classNames(classes)}>
        <div className='nav__container'>
          <ul className='nav__list'>
            {contents.map(({id, title, description}) =>
              <li
                key={id}
                ref={id}>
                <a
                  href={`#${id}`}
                  onClick={this.handleClickNavigation.bind(this, id)}>
                  {title}
                  <small>{description}</small>
                </a>
              </li>
            )}

            <li>
              <a
                href='https://hello.ecc.ac.jp/comp_form/contact/'
                target='_blank'>
                Contact
                <small>お問い合わせ</small>
                <span className='icon'>&#xe803;</span>
              </a>
            </li>
          </ul>

          <div
            className='nav__bg'
            style={current ? {
              transform: `translate3d(${offsetLeft}px,0,0)`,
              opacity: 1
            } : null} />
        </div>

        <ul className='nav__social'>
          <li>
            <button
              className='twitter'
              onClick={shareOnTwitter}>
              <img
                src='/img/twitter.svg'
                width='24'
                height='24'
                alt='Share on Twitter' />
            </button>
          </li>
          <li>
            <button
              className='twitter'
              onClick={shareOnFacebook}>
              <img
                src='/img/facebook.svg'
                width='24'
                height='24'
                alt='Share on Facebook' />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
