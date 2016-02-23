'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';

export default class Exhibit extends Component {
  static propTypes = {
    exhibits: PropTypes.array.isRequired
  };
  state = {
    focusing: null
  };
  handleMouseEnter = target => {
    this.setState({focusing: target});
  };
  handleMouseLeave = focusing => {
    this.setState({focusing: null});
  };
  render() {
    const {exhibits} = this.props;
    const {focusing} = this.state;

    return (
      <ul className='exhibit'>
        {exhibits.map(({id, name_ja, name_en}) => {
          const isFocusing = focusing === id;

          return (
            <li key={id}>
              <div className='exhibit-panel'>
                <svg className='exhibit-panel__bg'>
                  <g className='exhibit-panel__clipped'>
                    <image
                      xlinkHref={`/img/exhibit_${id}.png`}
                      width='100%'
                      height='100%' />
                    <rect
                      className='exhibit-panel__overlay'
                      width='100%'
                      height='100%'
                      style={isFocusing ? {opacity: 0} : null}
                      onMouseEnter={this.handleMouseEnter.bind(this, id)}
                      onMouseLeave={this.handleMouseLeave.bind(this, id)} />
                  </g>
                </svg>
                <div
                  className='exhibit-panel__name grow'
                  style={isFocusing ? {opacity: 0} : null}>
                  {name_ja}
                  <small>{name_en}</small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
