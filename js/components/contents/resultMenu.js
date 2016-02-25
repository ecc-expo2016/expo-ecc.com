'use strict';
import React, {PropTypes} from 'react';
import {Component} from 'flumpt';
import classNames from 'classnames';

export default class ResultMenu extends Component {
  static propTypes = {
    exhibits: PropTypes.array.isRequired,
    showingResult: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };
  handleClick = target => {
    this.props.onClick(target);
  };
  render() {
    const {exhibits, showingResult} = this.props;

    return (
      <div className='result-menu'>
        <p className='result-menu__title'>部門を選択してください</p>

        <ul className='result-menu__list'>
          {exhibits.map(({id, name_ja, name_en}) => {
            const classes = {
              'result-menu__btn': true,
              'is-active': id === showingResult
            };

            return (
              <li
                key={id}
                className='result-menu__item'>
                <button
                  className={classNames(classes)}
                  onClick={this.handleClick.bind(this, id)}>
                  {name_ja}
                  <small>{name_en}</small>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
