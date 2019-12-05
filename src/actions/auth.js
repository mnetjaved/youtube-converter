import axios from 'axios';
import { setAlert } from './alert';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT

} from './types';

import setAuthToken from '../utils/setAuthToken';

// load user
export const loadUser = (videoUrl) => async dispatch =>{
    console.log("uu43");
    const params = {
        videoUrl: "https://www.youtube.com/watch?v=rkOakcMqJ-8",
    };
    
    try {

        // api missing

        const res = await axios.get('http://localhost:5000/api/v1/data/ytgetdata',{params});
        console.log("auth ok")
        dispatch({
            payload: res.data,
            type: USER_LOADED
            
        });
        
    } catch (error) {
        console.log("auth err")
        dispatch({
            type: AUTH_ERROR
        });
       
    }
}

export const register = ({videoUrl, name, email, password, isChecked}) => async dispatch => {
    console.log("dad",videoUrl);
    if(isChecked){
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({name,email,password});
        try {
            const res = await axios.post('http://localhost:5000/api/v1/company/register',body,config);
    
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(setAlert(res.data.message,'success'));
        } catch (err) {
            const errors = err.response.data;
            console.log(err.response.data.message);
    
            if(errors){
                dispatch(setAlert(errors.message,'danger'));
               
            }
            dispatch({
                type: REGISTER_FAIL
            });
        }
    }
    else{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({name,email,password});
        try {
            const res = await axios.post('http://localhost:5000/api/v1/student/register',body,config);
    
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(setAlert(res.data.message,'success'));
        } catch (err) {
            const errors = err.response.data;
            console.log(err.response.data.message);
    
            if(errors){
                dispatch(setAlert(errors.message,'danger'));
               
            }
            dispatch({
                type: REGISTER_FAIL
            });
        }
    }
    
}
// login
export const login = ({ email, password, isChecked}) => async dispatch => {
    if (isChecked) {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email,password});
    
    try {
        const res = await axios.post('http://localhost:5000/api/v1/company/login',body,config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
        
        dispatch(loadUser());
        //dispatch(setAlert("Login Success",'success'));
    } catch (err) {
        const errors = err.response;
        console.log(errors)
        

        if(errors){
            dispatch(setAlert(errors.message,'danger'));
           
        }
        dispatch({ 
            type: LOGIN_FAIL
        });
    }
}
    else{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email,password});
        
        try {
            const res = await axios.post('http://localhost:5000/api/v1/student/login',body,config);
    
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            
            
            dispatch(loadUser());
            //dispatch(setAlert("Login Success",'success'));
        } catch (err) {
            const errors = err.response.data;
            
    
            if(errors){
                dispatch(setAlert(errors.message,'danger'));
               
            }
            dispatch({ 
                type: LOGIN_FAIL
            });
        }
    }
};

// Logout

export const logout = () => dispatch =>{
    dispatch({
        type : LOGOUT
    })
}
