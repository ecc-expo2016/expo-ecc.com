'use strict';
import React from 'react';
import {Component} from 'flumpt';
import Symbol from '../symbol';

export default class SymbolContainer extends Component {
  componentDidMount() {
    new Symbol(this.refs.symbol);
  }
  render() {
    return (
      <div
        ref='symbol'
        className='symbol' />
    );
  }
}
