import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyData } from '../actions';
import Tree from './Tree/Tree';
import Pagination from './Pagination/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { pageNumber: 1 };
    this.childListWrapper = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    const { dispatch } = this.props;
    dispatch(fetchMyData(this.state.pageNumber));
    this.setState((prevState) => {
      return { pageNumber: prevState.pageNumber + 1 }
    });
  }

  onWheelling = (event) => {
    const { dispatch } = this.props;
    // display height
    const displayHeight = document.documentElement.clientHeight;
    const delta = event.deltaY;
    if (event.preventDefault) event.preventDefault();
      if (Math.abs(delta) > 3) {
        window.scrollBy(0, delta / 6);
      }
      // for firefox event.deltaY = 3
    
    if (this.childListWrapper.current.scrollHeight - displayHeight - window.scrollY < 210) {
      dispatch(fetchMyData(this.state.pageNumber));
      this.setState((prevState) => {
        return { pageNumber: prevState.pageNumber + 1 }
      });
    }
  }

  render() {
    console.log('render method');
    return (
      <div
        onWheel={this.onWheelling}
        ref={this.childListWrapper}  
      >
        <Tree films={this.props.films} />
        {/* <Pagination total_pages={this.props.total_pages} dispatch={this.props.dispatch}/> */}
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

