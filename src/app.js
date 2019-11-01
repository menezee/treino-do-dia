import React from 'react'
import { Router } from '@reach/router'
import { Create, List, Login } from './containers';
import { Header, Auth } from './components';
import commonStyles from './common.module.css';
import { ContextProvider } from './context';
import { AuthProvider } from './AuthContext';

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
