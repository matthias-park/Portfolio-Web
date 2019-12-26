import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import Index from './pages';
import history from './history';

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <div>
          <Index />
        </div>
      </Router>
    </div>
  );
}

export default App;
