import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './partials/header';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  componentDidMount() {
    document.body.classList.remove('main-page');
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Posts);
