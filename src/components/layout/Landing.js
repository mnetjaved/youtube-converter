import React, { Fragment,useState } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../dashboard/Dashboard';

//import { getCurrentProfile } from '../../actions/profile';
import { getCurrentProfile } from '../../actions/profile';

const Landing = ({getCurrentProfile,history}) => {
  const [formData, setFormData] = useState({
    videoUrl: '',
    isChecked: true ,
    data:'',

  });
  
  const { videoUrl,data } = formData;

  const onChange = e =>  setFormData({
    ...formData,
     [e.target.name]: e.target.value,   
  });

  
  
  const onSubmit = async e => {
    e.preventDefault();
 
    // history.push('/success');
    getCurrentProfile(videoUrl);
  
    setFormData({
      ...formData,
       data:<Dashboard/>
    });

  };

 
  // let data = <Dashboard/>
    return (
<Fragment>
<div>   
    <div class="search">   
          <div class="bar">        
               <div class="icon">        
                        <i></i>             
                </div>         
          </div>        
          <form onSubmit={e => onSubmit(e)}>             
            <input type="text" name="videoUrl" value={videoUrl} onChange={e => onChange(e) } placeholder="https://www.youtube.com/watch?v=JVSshOFPJBk"/>
          </form>    
     
      
              </div>      
              
                  </div> 
             {data}
              
</Fragment>

      //   <section className="landing">
      //   <div className="dark-overlay">
      //     <div className="landing-inner">
      //       <h1 className="x-large">Developer Connector</h1>
      //       <p className="lead">
      //         Create a developer profile/portfolio, share posts and get help from
      //         other developers
      //       </p>
      //       <div className="buttons">
      //         <a href="register.html" className="btn btn-primary">Sign Up</a>
      //         <a href="login.html" className="btn btn-light">Login</a>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    )
}
Landing.propTypes = {
  createProfile: PropTypes.func.isRequired,
}


export default connect(null, {getCurrentProfile})(Landing);
