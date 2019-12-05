import React, { Fragment } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';



const Navbar = () => {
  
    return(
      <Fragment>
       <div class="header-container">

        <ul className="navbar-left">
        <li>
            <a href="https://www.facebook.com/MrMalikJaved" target="_blank">
           <i class="fab fa-facebook-f icon"></i>    
           </a>
      </li>
        <li>
            <a href="https://www.linkedin.com/in/muhammad-javed-b19991119/" target="_blank">
              <i class="fab fa-linkedin icon"></i>
              </a>
        </li>
          <li>
            <a href="https://github.com/muhammad-javed" target="_blank">
              <i class="fab fa-github icon"></i>
              </a>
              </li>
        </ul>
        <ul className="navbar-center">
          <li><Link className="navbar-lnk" to="/">Home</Link></li>
          <img className="navbar-logo" src="https://startcrack.com/wp-content/uploads/2018/09/AVS-Audio-Converter-with-Activation-Code.png"/>
          <li>FAQ</li>
        </ul>
        <ul className="navbar-right">
          <li onClick={(e)=>{alert("This Service Isn't Available!")}}><i className="fas fa-hand-holding-usd" >Donate</i></li>
          
    
        </ul>
        
       
		   
		    
		  </div>
     </Fragment>
    );

};
export default Navbar;
