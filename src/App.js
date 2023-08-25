import React from 'react';
import LoginPage from '../src/components/login-and-signup/login-page-md-devices/LoginPage';
import LoginPageForSmallDevice from './components/login-and-signup/login-page-sm-devices/LoginPageForSmallDevice';


const App = () => {
  return (
    <>
         <LoginPage />
         <LoginPageForSmallDevice />
    </>
  );
};

export default App;


