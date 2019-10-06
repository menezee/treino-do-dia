import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import { navigate } from '@reach/router';
import base from "../../base.js";
import { AuthContext } from '../../AuthContext';

function Login() {
  const { currentUser } = useContext(AuthContext);

  const handleLogin =
    async event => {
      event.preventDefault();
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await base.auth().signInWithRedirect(provider);
        navigate('login');
      } catch (error) {
        alert(error);
      }
    };

  const handleSingOut =
    async event => {
      event.preventDefault();
      try {
        await base.auth().signOut()
        navigate('login');
      } catch (error) {
        alert(error);
      }
    };

  return (
    <div className="App">
      <header className="App-header">
        {
          currentUser
            ? <p>Hello, {currentUser.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          currentUser
            ? <button onClick={handleSingOut}>Sign out</button>
            : <button onClick={handleLogin}>Sign in with Google</button>
        }
      </header>
    </div>
  );
}

export {
  Login,
};