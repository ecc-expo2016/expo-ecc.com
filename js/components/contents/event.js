'use strict';
import React from 'react';
import {Component} from 'flumpt';

export default class Event extends Component {
  state = {
    isLarge: false
  };
  toggleImage = () => {
    const breakPoint = 650;
    const isLarge = window.innerWidth >= breakPoint;
    this.setState({isLarge});
  };
  componentDidMount() {
    this.toggleImage();
    window.addEventListener('resize', this.toggleImage);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleImage);
  }
  render() {
    const {isLarge} = this.state;

    return (
      <div>
        <section>
          <h1 className='section__title mt0'>ECC EXPOとは</h1>
          <p>ECCコンピュータ専門学校では年に一度、全カレッジ合同の作品コンテスト「ECC EXPO」。</p>
          <p>ゲーム・CG・アニメ・Web・グラフィック・システム各分野の優秀作品の展示会と、各部門賞の表彰を行います。</p>
          <p>学生たちの「アイデア」が存分に発揮された作品の数々が一同に展示されます。</p>
          <p>学生が本気で取り組んだ作品の数々を是非ともご覧ください。</p>
        </section>

        <section>
          <h1 className='section__title mt2em'>開催日時・場所</h1>
          <dl className='section__dl'>
            <dt>開催日時</dt>
            <dd>2016年2月26日(金)・27(土)</dd>
            <dt>場所</dt>
            <dd>
              梅田クリスタルホール<br />
              {'( '}
              <a
                href='http://www.ucb.co.jp/'
                target='_blank'>
                www.ucb.co.jp
                {' '}
                <span className='icon'>&#xe803;</span></a>
              {' )'}
            </dd>
          </dl>
        </section>

        <section>
          <h1 className='section__title mt2em'>当日スケジュール</h1>
          <p>
            <img
              src={`/img/schedule_${isLarge ? 'pc' : 'sp'}.png`}
              alt='' />
          </p>
        </section>
      </div>
    );
  }
}
