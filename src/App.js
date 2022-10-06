import './App.css';
import Loginform from './components/LoginForm';
import Header from './components/Header';
import Footer from "./components/Footer"
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from "react-router-dom";
import CharacterForm from './components/CharacterForm';
// import React, { Component } from 'react';
import React, { useState } from 'react';
import { logout } from './services/firebase';


function App() {
  const URL = "https://roguetitanp3.herokuapp.com/";
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
      <Header className="App-header">
        
      </Header>
      {/* <Switch>
        <Route exact path="/"/>
          <App/>
        </Route>
        <Route exact path="/character">

        </Route>
      </Switch> */}
      <Footer />
      <body>
      <p>
        Gaming has been around for as long as humans have been alive. Tabletop roleplaying games... not so much. The first commercially available role-playing game, Dungeons and Dragons DnD, was published in 1974 by Gygax's TSR which marketed the game as a niche product. It was a mix of war-games and roleplaying.
        </p>
        <p>     
        A tabletop role-playing game typically abbreviated as TRPG or TTRPG, also known as a pen-and-paper role-playing game, is a form of role-playing game RPG in which the participants describe their characters' actions through speech. Participants determine the actions of their characters based on their characterization, and the actions succeed or fail according to a set formal system of rules and guidelines. Within the rules, players have the freedom to improvise; their choices shape the direction and outcome of the game.
        </p>
        <p>
        This program starts with 5th edition Dungeons and Dragons for a base component. At the top you can click the link and create a character with the SRD rules available. You will need the books for some of the specialties that can not be listed.
        </p>
        <CharacterForm/>
        <input class="btn btn-info" type="button" value="DND 101"
            onclick="location.href= 'https://blizzardwatch.com/2020/06/05/off-topic-dungeons-dragons-101-beginners-guide/'"/>
        {/* <button type="button" class="btn btn-info"><a href="/character/create">Create Your DND Master</a></button> */}
      </body>
        <CharacterForm/>
    </div>
    
  );
}


export default App;