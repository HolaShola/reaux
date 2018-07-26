import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyData } from '../actions';
import Tree from './Tree';
import Pagination from './Pagination/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  fetchData = () => {
    const { dispatch } = this.props;
    dispatch(fetchMyData(1));
  };

  render() {
    console.log('render method');
    return (
      <div>
        <button onClick={this.fetchData}>Fetch</button>
        <Tree films={this.props.films} />
        <Pagination total_pages={this.props.total_pages} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.myData.second.results,
    total_pages: state.myData.second.total_pages
  }
}

export default connect(mapStateToProps)(App);

