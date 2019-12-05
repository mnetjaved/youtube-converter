import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import  { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import Landing from '../layout/Landing';
import FileSaver from 'file-saver';


import mp3 from '../../icons/audio-icon/mp3.png';
import aac from '../../icons/audio-icon/aac.png';
import ogg from '../../icons/audio-icon/ogg.png';
import m4a from '../../icons/audio-icon/m4a.png';
import wma from '../../icons/audio-icon/wma.png';
import flac from '../../icons/audio-icon/flac.png';
import wav from '../../icons/audio-icon/wav.png';

/* Video icons Link */
import mp4 from '../../icons/video-icon/mp4.png';
import m4v from '../../icons/video-icon/m4v.png';
import mov from '../../icons/video-icon/mov.png';
import flv from '../../icons/video-icon/flv.png';
import avi from '../../icons/video-icon/avi.png';
import mpg from '../../icons/video-icon/mpg.png';
import wmv from '../../icons/video-icon/wmv.png';
import mkv from '../../icons/video-icon/mkv.png';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useHistory,
  } from "react-router-dom";
  const fs = require('fs');
  const ytdl = require('ytdl-core');
const Dashboard = ({ 
  
     getCurrentProfile,
     profile: { profile, loading} 
      
    }) => {
      const [formData, setFormData] = useState({
       ldr:true   
      });

      const {ldr} = formData;

// useEffect(() => {
// getCurrentProfile();
// }, []);
 
 const audio_download = (e) => {
   let name = e.target.name;
   const server = `http://localhost:5000/`;
    let url = server+`api/v1/audio/yt-audio-${name}/${profile.videoid}`
    const link = document.createElement('a');
     link.href = url;  
      document.body.appendChild(link);
      link.click();
    
      setTimeout(() => { 
         const lk = document.createElement('a');
            lk.href = '/';
            document.body.appendChild(lk);
            lk.click();
       }, 3000);
  }

const video_download = (e) => {
  let name = e.target.name;
  const server = `http://localhost:5000/`;
   let url = server+`api/v1/video/yt-video-${name}/${profile.videoid}`
   const link = document.createElement('a');
    link.href = url;  
     document.body.appendChild(link);
     link.click();
     
     setTimeout(() => { 
      const lk = document.createElement('a');
         lk.href = '/';
         document.body.appendChild(lk);
         lk.click();
    }, 3000);
}

// loading ? <Spinner />:
return loading ? <Spinner/> : <Fragment>
            
            <div className="card-5">
              <div className="card-first">
              <div className="img-withicon">
                <img src={profile.thumbnail}/>
                <i className="fa fa-play-circle"></i>
                </div>
              <div className="datashow">
               <h3><span>{profile.videoName}</span></h3>
              
               <label><b>Views: </b>{profile.viewCount}</label>
              <br/>
               <label><b>Channel: </b>{profile.author}</label>
              </div>
              </div>
              <div className="download-type">
             
                <ul>
                  <h2>Audio</h2>
                 
                  <li ><img src={mp3} name='mp3' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={aac} name='aac' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={ogg} name='ogg' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={m4a} name='m4a' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={wma} name='wma' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={flac} name='flac' onClick={(e)=>audio_download(e)} /></li>
                  <li><img src={wav} name='wav' onClick={(e)=>audio_download(e)} /></li>
                </ul>
                <ul>
                  <h2>Video</h2>
                  <li><img src={mp4} name='mp4' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={m4v} name='m4v' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={mov} name='mov' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={flv} name='flv' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={avi} name='avi' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={mpg} name='mpg' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={wmv} name='wmv' onClick={(e)=>video_download(e)}/></li>
                  <li><img src={mkv} name='mkv' onClick={(e)=>video_download(e)}/></li>

                </ul>
                </div>
              </div>
           

</Fragment>
  
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    profile: state.profile
});

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);
