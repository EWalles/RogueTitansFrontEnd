import './App.css';
import Index from './pages/Index';
import Loginform from './components/LoginForm';
import Header from './components/Header';
import Footer from "./components/Footer"
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from "react-router-dom";
import CharacterForm from './components/CharacterForm';
// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';



function App() {
  const [app, setApp] = useState (null);
  const URL = 'https://roguetitanp3.herokuapp.com/character';
  const getApp = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setApp(data);
  };

  const createApp = async (data) => {
    // make post request to create app
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    // update list of apps
    getApp();
  };
  useEffect(() => 
  {getApp()}, []);
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name:"", email:""})
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
  
   if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in")
    setUser({
    name: details.name,
    email: details.email
    });
  } else {
    console.log('Details do not match');
    setError('Details do not match!');
}


  }
  const Logout = () => {
    setUser({name:"", email:""});
  }
  return (
    <div className="App">

      <Navbar/>
      {(user.email !="") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <Loginform Login={Login} error={error}/>
      )}
        <Switch>
          <Route path='/home'>
            <Index character={app} createCharacter={createApp} />

          </Route>
        </Switch>
    </div>
    
  );
}


export default App;