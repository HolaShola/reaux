import React from 'react';
import Item from '../Item/Item';
import './Tree.css';

const Tree = props => (
  <div className="TreeWrapper">
    {props.films && props.films.map(
      film => <Item filmInfo={film} key={film.id} />
    )}
  </div>
);

export default Tree;
