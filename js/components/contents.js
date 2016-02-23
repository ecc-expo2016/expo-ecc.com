'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import Event from './contents/event';
import Exhibit from './contents/exhibit';
import Access from './contents/access';
import Gallery from './contents/gallery';
import Movie from './contents/movie';

export default class Contents extends Component {
  static propTypes = {
    contents: PropTypes.array.isRequired,
    exhibits: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    gallery: PropTypes.object.isRequired
  };
  render() {
    const {contents, exhibits, photos, gallery} = this.props;

    return (
      <div className='container'>
        {contents.map(({id, title, description}) =>
          <section
            key={id}
            id={id}
            className='section'>
            <h1 className='section__headline grow'>
              <span>{title}</span>
              <small>{description}</small>
            </h1>
            <div className='section__content'>
              {(() => {
                switch (id) {
                  case 'event':
                    return <Event />;
                  case 'exhibit':
                    return <Exhibit exhibits={exhibits} />;
                  case 'access':
                    return <Access />
                  case 'gallery':
                    return (
                      <Gallery
                        photos={photos}
                        isOpen={gallery.isOpen}
                        currentIndex={gallery.currentIndex} />
                    );
                  case 'movie':
                    return <Movie />;
                }
              })()}
            </div>
          </section>
        )}
      </div>
    );
  }
}
