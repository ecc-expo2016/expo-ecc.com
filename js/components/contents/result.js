'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import ResultMenu from './resultMenu';
import ResultContent from './resultCotent';

export default class Result extends Component {
  static propTypes = {
    exhibits: PropTypes.array.isRequired,
    result: PropTypes.array.isRequired,
    showingResult: PropTypes.string.isRequired
  };
  handleClick = target => {
    this.dispatch('changeResult', target);
  };
  render() {
    const {exhibits, result, showingResult} = this.props;

    return (
      <div>
        <ResultMenu
          exhibits={exhibits}
          showingResult={showingResult}
          onClick={this.handleClick} />
        <ResultContent
          exhibits={exhibits}
          result={result}
          showingResult={showingResult} />
      </div>
    );
  }
}
