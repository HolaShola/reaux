import React from 'react';
import './Pagination.css';
import { fetchMyData } from '../../actions';

const Pagination = props => (
  <div className="pagination">
    {Array.from({ length: props.total_pages },
      (v, k) => (
        <button
          key={k}
          onClick={() => props.dispatch(fetchMyData(k))}
        >
          {k}
        </button>))}
  </div>
);

export default Pagination;

// <a href="#">&laquo;</a>

//     <a href="#">&raquo;</a>