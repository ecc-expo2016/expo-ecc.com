'use strict';
import React from 'react';
import {Component} from 'flumpt';

export default class Movie extends Component {
  render() {
    return (
      <div className='video'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/9dK1R29o0TE?rel=0&showinfo=0'
          frameBorder='0'
          allowFullScreen />
      </div>
    );
  }
}
