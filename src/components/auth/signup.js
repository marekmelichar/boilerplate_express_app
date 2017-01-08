import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import IconMail from '../icons/IconMail.js';
import IconLock from '../icons/IconLock.js';
import { Link } from 'react-router';

class Signup extends Component {
  componentWillMount() {
    document.body.classList.toggle('main-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('main-page');
  }

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
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
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    // if (this.props.route.path === "/signup") {
    //     document.body.classList.toggle('main-page');
    // }

    return (
      <div className="row">
        <div className="column size_100">
          <h1 className="margin-top-2">Registrace</h1>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <input {...email} className="form-control" placeholder="Email" />
              <div className="icon-wrapper"><IconMail fill="#707680" /></div>
              {email.touched && email.error && <div className="error">{email.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <input {...password} type="password" className="form-control" placeholder="Heslo" />
              <div className="icon-wrapper"><IconLock fill="#707680" /></div>
              {password.touched && password.error && <div className="error">{password.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <input {...passwordConfirm} type="password" className="form-control" placeholder="Potvrdit heslo" />
              <div className="icon-wrapper"><IconLock fill="#707680" /></div>
              {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-primary">Registrovat se</button>
          </form>
          <div className="margin-bottom-1">nebo</div>
          <Link className="margin-bottom-1" to="/">Přihlásit se</Link>
        </div>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
