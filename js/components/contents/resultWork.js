'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';

export default class ResultWork extends Component {
  static propTypes = {
    work: PropTypes.object.isRequired
  };
  render() {
    const {work} = this.props;
    const isTeam = !!work.team;
    const hasUrl = !!work.url;
    const isPrize1 = work.prize === 1;
    const isPrize2 = work.prize === 2;

    const content = (
      <div>
        <p className='result__thumbnail'>
          <img src={work.thumbnail} />
        </p>
        <h1 className='result__name'>{work.name}</h1>
        {isTeam ? (
          <p className='result__creator'>
            {work.team}
            <small>（代表：{work.creator}）</small>
          </p>
        ) : (
          <p className='result__creator'>
            {work.creator}
          </p>
        )}
        <p className='result__description'>{work.description}</p>
      </div>
    );

    return (
      <section>
        {isPrize1 && (
          <p>
            <img
              src='/img/prize1.png'
              alt='グランプリ' />
          </p>
        )}

        {isPrize2 && (
          <p>
            <img
              src='/img/prize2.png'
              alt='準グランプリ' />
          </p>
        )}

        {hasUrl ? (
          <a
            className='result__link'
            href={work.url}
            target='_blank'>
            {content}
          </a>
        ) : content}
      </section>
    );
  }
}
