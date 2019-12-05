import React, {Fragment, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
        title:'',
        location:'',
        job_type:'',
        job_length:'',
        level:'',
        budget:'',
        skills: [],
        description:'' 
    });
    const {
        title,
        location,
        job_type,
        job_length,
        level,
        budget,
        skills,
        description,
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
      
    const onhandle = e => setFormData({
      ...formData,
      skills:e
    });
    const onSubmit = e => {
      e.preventDefault();
      createProfile(formData, history);
    }

    return (
        <div>
            <h2>Job Post</h2>
          <form onSubmit={e => onSubmit(e)} >
        
            <label for="fname">Job Title</label>
            <input type="text" required id="fname" name="title" value={title} onChange={e => onChange(e)}  placeholder='Job Title..'/>
        
            {/* <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> */}
        
            <label for="country" >Country</label>
            <select id="country" value={location} onChange={e => onChange(e)} name="location">
              <option value="australia">Pakistan</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label for="country">Job Type</label>
            <select id="country" name="job_type" value={job_type} onChange={e => onChange(e)} >
              <option value="Fixed">Fixed</option>
              <option value="OnGoing">OnGoing</option>
             
            </select>
            <label for="country">Job Length</label>
            <select id="country" name="job_length" value={job_length} onChange={e => onChange(e)}>
              <option value="1-2 Week">1-2 Week</option>
              <option value="1-3 Month">1-3 Month</option>
              <option value="3 Month +">3 Month +</option>
              <option value="1 Year">1 Year</option>
              <option value="1 Year +">1 Year +</option>

             
            </select>
           
            <label for="country">Level</label>
            <select id="country" name="level" value={level} onChange={e => onChange(e)}>
              <option value="Biggener">Biggener</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>     
            </select>
            <label for="fname">Budget:$ &nbsp; </label>
            <input type="number" required id="fname"value={budget} onChange={e => onChange(e)}  name="budget" placeholder="Your Budget.." />
            <br/>
            <label for="fname">Skills &nbsp; </label>
            <TagsInput name="skills" value={skills} onChange={e => onhandle(e)}   />
            <br/>
            <label for="subject">Description</label>
            <textarea id="subject" required value={description} onChange={e => onChange(e)}  name="description" placeholder="Write something.." className="posttextarea" ></textarea>
        
            <input type="submit" value="Submit"/>
        
          </form>
        </div>
    )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}

export default connect(null, {createProfile})(withRouter(CreateProfile));
