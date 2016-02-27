'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ResultWork from './resultWork';

export default class ResultContent extends Component {
  static propTypes = {
    exhibits: PropTypes.array.isRequired,
    result: PropTypes.array.isRequired,
    showingResult: PropTypes.string.isRequired
  };
  handleResize = () => {
    const {offsetHeight} = this.resultContainer;
    this.refs.container.style.height = `${offsetHeight}px`;
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  async componentDidUpdate() {
    this.resultContainer = document.querySelector('.result__container');
    const imgs = this.resultContainer.querySelectorAll('img');

    await Promise.all([...imgs].map(img => {
      return new Promise(done => img.addEventListener('load', done));
    }));

    const {offsetHeight} = this.resultContainer;
    this.refs.container.style.height = `${offsetHeight}px`;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const {exhibits, result, showingResult} = this.props;
    const exhibitName = exhibits.find(({id}) => id === showingResult).name_ja;
    const {works} = result.find(({exhibit}) => exhibit === showingResult);
    const prize1 = works.find(({prize}) => prize === 1);
    const prize2 = works.filter(({prize}) => prize === 2);
    const otherWorks = works.filter(({prize}) => !prize);

    return (
      <div
        ref='container'
        className='result'>
        <ReactCSSTransitionGroup
          component='div'
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <section
            key={showingResult}
            className='result__container'>
            <h1 className='result__title'>{exhibitName}</h1>

            <div className='result__prize'>
              <div className='result__prize__item'>
                <ResultWork work={prize1} />
              </div>

              {prize2.length === 1 && (
                <div className='result__prize__item'>
                  <ResultWork work={prize2[0]} />
                </div>
              )}
            </div>

            {prize2.length === 2 && (
              <div className='result__prize'>
                {prize2.map((prize, i) =>
                  <div
                    key={i}
                    className='result__prize__item'>
                    <ResultWork work={prize} />
                  </div>
                )}
              </div>
            )}

            <p className='result__title-entry'>入選作品</p>

            <div className='result__other'>
              {otherWorks.map((work, i) =>
                <div
                  key={i}
                  className='result__other__item'>
                  <ResultWork work={work} />
                </div>
              )}
            </div>
          </section>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
