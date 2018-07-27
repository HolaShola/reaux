import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyData } from '../actions';
import Tree from './Tree/Tree';
import Pagination from './Pagination/Pagination';

class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { pageNumber: 1 };
    this.childListWrapper = React.createRef();
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  fetchData = () => {
    const { dispatch } = this.props;
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber++
    }));
    
    dispatch(fetchMyData(this.state.pageNumber));
  };

  onWheelling = (event) => {
    const { dispatch } = this.props;
    // Высота экрана
    const displayHeight = document.documentElement.clientHeight;
    const delta = event.deltaY;
    if (event.preventDefault) event.preventDefault();
      if (Math.abs(delta) > 3) {
      // this.childListWrapper.current.scrollTop += delta / 10;
        window.scrollBy(0, delta / 10);
      }
      // for firefox event.deltaY = 3
      //this.listRef.scrollTop += delta * 4;
  
    if (this.childListWrapper.current.scrollHeight - displayHeight - window.scrollY < 210) {
      dispatch(fetchMyData(this.state.pageNumber));
      this.setState({ pageNumber: this.state.pageNumber++ });
      // this.setState((prevState) => ({
      //   pageNumber: prevState.pageNumber++
      // }));
    }
  }

  render() {
    console.log('render method');
    return (
      <div
        onWheel={this.onWheelling}
        ref={this.childListWrapper}  
      >
        <button onClick={this.fetchData}>Fetch</button>
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

