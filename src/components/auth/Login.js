import React, { Fragment, useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



const Login = ({ login,isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isChecked: true,
  });
  const { email, password, isChecked} = formData;

  const onChange = e =>  setFormData({
    ...formData,
     [e.target.name]: e.target.value
     
  });
  const onToggle = e =>  setFormData({
    ...formData,
    
     isChecked: !isChecked,
     
  });

  const onSubmit = async e => {
    e.preventDefault();
    login({email,password,isChecked});
    
  };

  // redirect
  if(isAuthenticated){
    return <Redirect to="/dashboard"></Redirect>
  }

    return <Fragment>

<div className="sign-in-form">
    <MDBContainer className="sign-in-form-container">
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={e => onSubmit(e)}>
            <h1 className="h5 text-center mb-4">Log in</h1>
            <h5>Account Type</h5>
                  
                  <div className="switch-signup">
                    <label className="student-toggle">Student </label>
                  <input type="checkbox" id="switch" checked={formData.isChecked}
                  onChange={onToggle}
           /><label className="toggle-label" for="switch">Toggle</label>
                    <label className="company-toggle"> Company</label>
                  </div>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                name="email"
                value={email}
                onChange={e => onChange(e) }
                validate
                error="wrong"
                success="right"
                required
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                required
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e) }
              />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>

    </Fragment>
    
}
Login.prototype = {
  login : PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

});
export default connect(
  mapStateToProps,
   {login})(Login);
