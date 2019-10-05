import React, { useState } from 'react'
import { Router, Redirect, navigate } from '@reach/router'
import { Create, List } from './containers';
import { Header } from './components';
import commonStyles from './common.module.css';
import { ContextProvider } from './context';

function Login() {
  return (
    <div className={commonStyles['default-padding']}>Faça o login</div>
  );
}

function Auth() {
  const [currentUser, isLogged] = useState(false)

  if (!currentUser) {
    navigate("login")
  }

  return (
    <div></div>
  );
}

function App() {
  return (
    <div className={commonStyles['default-padding']}>
      <Header />
      <ContextProvider>
        <Router>
          <Redirect noThrow from='/' to='list' />
          <Login path='login' />
          <Auth path="/">
            <List path='list' />
            <Create path='create' />
          </Auth>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
