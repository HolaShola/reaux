import React from 'react';
import Item from './Item/Item';

const Tree = props => (
  <div>
    <ul>
      {props.films && props.films.map(
        film => <Item title={film.title} key={film.id} />
      )}
    </ul>
  </div>
);

export default Tree;
