import React, { Fragment, useState, useCallback, useEffect, createContext, useContext } from 'react'
import { Router, navigate } from '@reach/router'
import { Create, List } from './containers';
import { Header } from './components';
import commonStyles from './common.module.css';
import { ContextProvider } from './context';

// auth specific code
// auth specific code
// auth specific code

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

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().useDeviceLanguage();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function Login() {
  const { currentUser } = useContext(AuthContext);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebaseApp
          .auth().signInWithRedirect(provider);
        navigate('login');
      } catch (error) {
        alert(error);
      }
    },
  );

  const handleSingOut = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebaseApp.auth().signOut()
        navigate('login');
      } catch (error) {
        alert(error);
      }
    },
  );

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

function Auth(props) {
  const { currentUser } = useContext(AuthContext);
  const { children } = props;

  return (
    <Fragment>
      {currentUser ? children : navigate('login')}
    </Fragment>
  );
}

// end auth specific code
// end auth specific code
// end auth specific code

function App() {
  return (
    <div className={commonStyles['default-padding']}>
      <Header />
      <AuthProvider>
        <ContextProvider>
          <Router>
            <Login path='login' />
            <Auth path="/" default>
              <List path='list' default />
              <Create path='create' />
            </Auth>
          </Router>
        </ContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
