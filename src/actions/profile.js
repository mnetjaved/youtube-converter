import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';



export const getCurrentProfile = (videoUrl) => async dispatch => {
 
    const Server = "https://youtubeonlinevideoconverter.herokuapp.com/"
    
    const params = {
        videoUrl: videoUrl,
    };
    
    try{
        const res = await axios.get(`${Server}api/v1/data/ytgetdata`,{params});
        console.log("prf ok",res.data)
        dispatch({
            type : GET_PROFILE,
            payload:res.data
        })
       

    } catch (err){
        console.log("prf err")
        dispatch({
            type : PROFILE_ERROR,
            payload:{msg: err, status: err}
        });
    }
}


/// profile update create

export const createProfile = (formData,history,edit=false) => async dispatch =>{
 
    try {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post('http://localhost:5000/api/v1/job/create-job',formData,config);
        dispatch({
            type : GET_PROFILE,
            payload:res.data
        })
        

        dispatch(history.push('/dashboard'))
    } catch (err) {
        console.log("er",err)
        const errors = err.response;
        console.log(err.response);
        if(errors){
            dispatch(setAlert(errors.message,'danger'));
            dispatch({
                type : PROFILE_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status}
            })
        }
        
    }
}