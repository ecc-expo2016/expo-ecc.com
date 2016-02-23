'use strict';
import React from 'react';
import {Component} from 'flumpt';

export default class Access extends Component {
  render() {
    return (
      <div>
        <p className='access__title'>
          梅田クリスタルホール<br />
          {'( '}
          <a
            href='http://www.ucb.co.jp/'
            target='_blank'>
            www.ucb.co.jp <span className='icon'>&#xe803;</span></a>
          {' )'}
        </p>
        <p className='access__address'>
          〒530-0015<br />
          大阪市北区中崎西2丁目4番12号<br />
          梅田センタービル地下1階
        </p>

        <div className='access__traffic'>
          <dl>
            <dt>阪急電車</dt>
            <dd>梅田駅より徒歩約5分</dd>
          </dl>
          <dl>
            <dt>阪急電車</dt>
            <dd>梅田駅より徒歩約5分</dd>
          </dl>
          <dl>
            <dt>地下鉄</dt>
            <dd>
              梅田駅・東梅田駅より徒歩約7分<br />
              西梅田駅より徒歩約9分
            </dd>
          </dl>
          <dl>
            <dt>JR大阪駅</dt>
            <dd>徒歩約10分</dd>
          </dl>
          <dl>
            <dt>阪神電車</dt>
            <dd>梅田駅より徒歩約9分</dd>
          </dl>
        </div>

        <p>
          <img
            className='access__map'
            src='/img/map.svg'
            alt='' />
        </p>
      </div>
    );
  }
}
