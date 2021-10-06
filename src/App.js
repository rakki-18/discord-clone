import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { login, selectUser,logout } from './features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Login from './Login';
function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ",authUser);
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
          dispatch(logout());
      }
    });
    
  }, [dispatch]);
  return (
    <div className="app">
    {user ? (
      <>
        <Sidebar />
        <Chat />
      </>
    ): (
      
      <>
        <Login />
        
      </>
    )}
    
    </div>
  );
}

export default App;
