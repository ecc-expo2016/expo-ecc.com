'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';

export default class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='hero__content'>
          <p className='hero__date grow'>
            <time dateTime='2016-02-26'>2016.2.26(fri)</time>
            {' - '}
            <time dateTime='2016-02-27'>27(sat)</time>
          </p>
          <p className='hero__place grow'>＠梅田クリスタルホール</p>

          <div className='hero__footer'>
            <p className='hero__logo'>
              <img
                src='/img/logo.svg'
                width='580'
                alt='ECC EXPO 2016' />
            </p>
            <ul className='hero__social'>
              <li>
                <button className='twitter'>
                  <img
                    src='/img/twitter.svg'
                    width='24'
                    height='24'
                    alt='Share on Twitter' />
                </button>
              </li>
              <li>
                <button className='facebook'>
                  <img
                    src='/img/facebook.svg'
                    width='24'
                    height='24'
                    alt='Share on Facebook' />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='hero__swing'>I have a dream.</div>
        <div className='hero__logo--sp'>
          <img
            src='/img/logo.svg'
            alt='ECC EXPO 2016' />
        </div>
      </div>
    );
  }
}
