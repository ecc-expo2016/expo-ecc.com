'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import SymbolContainer from './symbolContainer';
import Hero from './hero';
import Contents from './contents';

export default class Main extends Component {
  static propTypes = {
    contents: PropTypes.array.isRequired,
    exhibits: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    gallery: PropTypes.object.isRequired,
    result: PropTypes.array.isRequired,
    showingResult: PropTypes.string.isRequired
  };
  render() {
    const {contents, exhibits, photos, gallery, result,
      showingResult} = this.props;

    return (
      <main>
        <SymbolContainer />
        <Hero />
        <Contents
          contents={contents}
          exhibits={exhibits}
          photos={photos}
          gallery={gallery}
          result={result}
          showingResult={showingResult} />
      </main>
    );
  }
}
