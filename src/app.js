import React, { useState, useCallback } from 'react'
import { Router, navigate } from '@reach/router'
import { Create, List } from './containers';
import { Header } from './components';
import commonStyles from './common.module.css';
import { ContextProvider } from './context';

// auth
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdn_n0I7TdQlGHHAg2whfDKi7vsoLolgA",
  authDomain: "treino-do-dia.firebaseapp.com",
  databaseURL: "https://treino-do-dia.firebaseio.com",
  projectId: "treino-do-dia",
  storageBucket: "treino-do-dia.appspot.com",
  messagingSenderId: "389820844220",
  appId: "1:389820844220:web:e47898c0af6820aa7ce8b9",
  measurementId: "G-H0CMMD6M7H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

var provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

firebase.auth().useDeviceLanguage();


function Login() {
  const [user, setUser] = useState(false)

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebaseApp
          .auth().signInWithRedirect(provider);
        navigate('list');
      } catch (error) {
        alert(error);
      }
    },
  );


  const signOut = () => {
    setUser(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={handleLogin}>Sign in with Google</button>
        }
      </header>
    </div>
  );
}

function Auth() {
  const [currentUser, isLogged] = useState(false)

  if (!currentUser) {
    navigate("login")
  }

  return (
    <Login></Login>
  );
}

// end auth

function App() {
  return (
    <div className={commonStyles['default-padding']}>
      <Header />
      <ContextProvider>
        <Router>
          <Login path='login' />
          <Auth path="/" default>
            <List path='list' default />
            <Create path='create' />
          </Auth>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
