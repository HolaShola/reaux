import React from 'react';
import './Item.css';
import { constantPartOfURL } from '../../config';

const Item = props => (
  <div className="wrapperItem">
    <div>
      <img
        alt="posterUrl"
        src={props.filmInfo.poster_path
          ? `${constantPartOfURL}${props.filmInfo.poster_path}`
          : null
        }
        width="200"
        height="240"
      />
    </div>
    <div className="film_description">
      <div className="show_title">
        <p>{props.filmInfo.title}</p>
      </div>
    </div>
  </div>
);

export default Item;
