import React from 'react';
import './App.css';
import FooterComponent from './FooterComponent';
import ContactForm from './ContactForm';
import HeaderComponent from './HeaderComponent';
import HomePage from './HomePage';
import AllRequests from './AllRequests';
import { RequestProvider } from '../contexts/RequestContext';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <RequestProvider>
    <div className="App">
      <div className='header'>
        <HeaderComponent />
      </div>
      <Routes>
      
        <Route path='/' element={<HomePage />}/>
        <Route path='/allrequests' element={<AllRequests />}/>
        <Route path='/contactform' element= {<ContactForm />}/>
      
      </Routes>
      <div className='footer'>
        <FooterComponent/>
      </div>
    </div>
    </RequestProvider>
  );
}

export default App;
