import React, { useEffect } from 'react';
import './App.css';
import Login from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ): (
          <Routes>
              <Route exact path="/" element={<HomeScreen/>}/>
              <Route exact path="/profile" element={<ProfileScreen/>}/>
          </Routes>
         )}
      </Router>

    </div>
  );
}

export default App;
