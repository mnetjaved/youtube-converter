import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-tagsinput/react-tagsinput.css';


import './App.css';

const App = () => { 
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // },[])

  return(
<Provider store={store}>
<Router>
 <Fragment>
   <Navbar/>
   <Route  exact path='/' component={Landing}/> 
  
   {/* <Route exact path="/success/:vid" component={Dashboard}/> */}
   <section className="container">
     <Alert/>
     
     <Switch>
     
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
    
       <Route exact path="/success" component={Dashboard}/> 
      <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
     </Switch>
   </section>
 </Fragment>
</Router>
</Provider>
)};
export default App;
