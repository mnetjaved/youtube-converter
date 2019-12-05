import React, { Fragment, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {Link, Redirect} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const Register = ({ setAlert , register , isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isChecked: true,
    
  
  });
  
  const { name, email, password , isChecked} = formData;

  const onChange = e =>  setFormData({
    ...formData,
     [e.target.name]: e.target.value,
  
     
  });
  const onToggle = e =>  setFormData({
    ...formData,
    
     isChecked: !isChecked,
     
  });

 
 

  const onSubmit = async e => {
    e.preventDefault();
  
    register({name,email,password,isChecked});
  
   
  };
    // redirect
    if(isAuthenticated){
      return <Redirect to="/dashboard"></Redirect>
    }

    return (
    <Fragment>

<div  className="signup-form">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={e => onSubmit(e)}>
                  <p className="h4 text-center py-4">Sign up</p>
                  
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
                      type="text"
                      label={isChecked ? 'Company Name': 'Student Name'}
                      name="name" 
                      required 
                      value={name}
                      onChange={e => onChange(e)}
                      icon="user"
                      group
                      validate
                      error="wrong"
                      success="right"
                    
                    />
                   
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      name="email"
                      validate
                      error="wrong"
                      success="right"
                      required
                      value={email}
                      onChange={e => onChange(e) }
                    />
  
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      validate
                      required
                      minLength="8"
                      value={password}
                      onChange={e => onChange(e) }
                      
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>

    </Fragment>
    );
};

Register.prototype = {
setAlert: PropTypes.element.isRequired,
register: PropTypes.element.isRequired,
isAuthenticated:PropTypes.bool,
}; 

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

});

export default connect(
  mapStateToProps,
  { setAlert, register }
  ) (Register);
