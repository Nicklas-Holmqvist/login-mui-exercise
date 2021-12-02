import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/Logout';
import "./css/basic.css";

// import Form from './testform/Form';
// testform is a method Brian Design have an video on for validation of all inputfields
// link to video: https://www.youtube.com/watch?v=KGFG-yQD7Dw

function App() {

  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  function logout(value:boolean) {
    setLoggedIn(value)
  }

  return (
    <div className="App h-100">
      
      {!loggedIn ? <Login loggedIn={logout}/> : <Logout loggedIn={logout}/>}

    </div>
  );
}

export default App;
