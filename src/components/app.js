import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

// import { connect } from 'react-redux';
// import * as actions from '../actions';
import Signin from './auth/signin';
import IconNotes from './icons/IconNotes';

// import Header from './partials/header';

export default class App extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.authenticated === true) {
  //     console.log(nextProps.authenticated);
  //     this.props.signoutUser();
  //   }
  // }
  // componentDidMount() {
  //   this.props.signoutUser();
  // }

  // componentDidMount() {
  //   document.body.classList.toggle('main-page');
  // }

  componentWillMount() {
    document.body.classList.toggle('main-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('main-page');
  }

  render() {
    // console.log(this.props.params);
    // let { location:{pathname, params, query} } = this.props; // router props
    // console.log(this.props.route.path);
    // if (this.props.route.path === "/") {
    //     document.body.classList.toggle('main-page');
    // }
    return (
      // <div>
        <div className="row">
          <div className="column size_100">
            <div className="icon-wrapper"><IconNotes fill="#2DB5CF" /></div>
            <h1 className="margin-top-0_5">epoznamky.cz</h1>
            <Signin />
            <div className="margin-bottom-1">nebo</div>
            {/* <a className="margin-bottom-1" href="signup">Registrovat se</a> */}
            <Link className="margin-bottom-1" to="/signup">Registrovat se</Link>
          </div>
        </div>
      // </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     authenticated: state.auth.authenticated
//   };
// }
//
// export default connect(mapStateToProps, actions)(App);
