import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import './App.css';

import AppRouter from './Config/Approuter';
import Home from './Screens/Home';
import SignUp from './Screens/Signup';
import AdminHome from './Screens/Aminscreens/Adminhome';

function App() {
  const [userType, setUserType] = useState('');

  const handleSignup = (selectedUserType) => {
    setUserType(selectedUserType);
  };

  return (
   <>
  
   <AppRouter/>
   
   </>
  );
}

export default App;
