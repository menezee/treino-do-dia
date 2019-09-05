import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Create, List } from './containers';
import { Header } from './components';
import commonStyles from './common.module.css';
import { ContextProvider } from './context';

function App() {
  return (
    <div className={commonStyles['default-padding']}>
      <Header/>
      <ContextProvider>
        <Router>
          <Redirect noThrow from='/' to='list'/>
          <Create path='create'/>
          <List path='list'/>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
