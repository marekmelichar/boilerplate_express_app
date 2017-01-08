import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import IconMail from '../icons/IconMail.js';
import IconLock from '../icons/IconLock.js';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <input {...email} className="form-control" placeholder="Email" />
          <div className="icon-wrapper"><IconMail fill="#707680" /></div>
        </fieldset>
        <fieldset className="form-group">
          <input {...password} type="password" className="form-control" placeholder="Heslo" />
          <div className="icon-wrapper"><IconLock fill="#707680" /></div>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Přihlásit se</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
