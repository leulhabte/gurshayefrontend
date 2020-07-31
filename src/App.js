import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageTip from './Components/Manage';
import ManageUser from './Components/User/Manage'
import ViewTips from './Components/ViewTips';
import Home from './Components/Home2';
import Statistics from './Components/Statistics';
import Incorrect from './Components/Incorrect';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import LogIn from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import PageNotfound from './Components/PageNotfound';
import Cookies from 'js-cookie';
import AuthApi from './AuthApi';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './styling.css';
import useStyles from './Styling';
import SlideDrawer from './Components/SideDrawer';
import InsertTip from './Components/Partials/InsertTips';
import './App.css'


function App() {

  const [auth, setAuth] = useState(false);
  const [userData, setData] = useState('User Name');
  const [userId, setId] = useState('');
  const classes = useStyles();


  const handleLogin = (data)=>{
    setAuth(true);
    setData(data.data.name);
    setId(data.data._id);
    console.log(userId);
    Cookies.set('jwt', data.token)
  }

  const handleLogOut = ()=>{
    setAuth(false);
    setData('User Name');
    Cookies.remove('jwt');
  }

  const readCookie = ()=>{
    const user = Cookies.get('jwt');
    if(user){
      setAuth(true)
    }else{
      setAuth(false)
    }
  }

  useEffect(()=>{
    readCookie();
  },[])
    
    return (
      <AuthApi.Provider value={{auth, setAuth}}>
      <BrowserRouter>
          <div className={classes.root}>
            <SlideDrawer handleLogout={handleLogOut} data={userData}/>
            <div className={classes.content}>
              <div className={classes.toolbar}/>
              <Switch>
                <ProtectedRoute path="/" exact component={Home} auth={auth}/>
                <ProtectedRoute path="/about" component={About} auth={auth} />
                <ProtectedRoute path="/contact" component={ContactUs} auth={auth}/>
                <ProtectedRoute path="/add" component={InsertTip} auth={auth}/>
                <ProtectedRoute path="/view" component={ViewTips} auth={auth}/>
                <ProtectedRoute path="/manage" component={ManageTip} auth={auth}/>
                <ProtectedRoute path="/stats" component={Statistics} auth={auth}/>
                <ProtectedRoute path="/fill" component={Incorrect} auth={auth}/>
                <ProtectedUpdateProfile path="/edit" component={ManageUser} handleLogOut={handleLogOut} auth={auth} userId={userId}/>
                <ProtectedLogin path="/login" component={LogIn} handleLogin={handleLogin} auth={auth}/>
                <Route path="/signup" component={SignUp} auth={auth}/>
                <Route path="*" component={PageNotfound}/>
              </Switch>
            </div>
          </div>    
      </BrowserRouter>
      </AuthApi.Provider>
                  
    );
}

const ProtectedRoute = ({auth, component: Component, ...rest})=>{
  return(
    <Route
    {...rest}

    render={()=>auth?(
      <Component />
    ):(
      <Redirect
        to="/login"
      />
    )}
    />
  );
}


const ProtectedLogin = ({auth, handleLogin, component: Component, ...rest})=>{
  return(
    <Route
    {...rest}

    render={(props)=>!auth ? (
      <Component handleLogin = {handleLogin}/>
    ):(
      <Redirect
        to={{
          pathname:"/"
        }}
      />
    )}
    />
  );
}

const ProtectedUpdateProfile = ({auth, handleLogOut, component: Component, ...rest})=>{
  return(
    <Route
      {...rest}

      render = {()=>auth?(
        <Component handleLogOut={handleLogOut}/>
      ):(
        <Redirect
          to={{
            pathname:"/login"
          }}
        />
      )}
    />
  );
}

export default App;
