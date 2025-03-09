import React from 'react'
import {Home, Login} from './Store/screens';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Store/slices/auth.slice';

// store= global state - accessible everywhere;
// actions= functions jis mei hum apni logic likhein;
// 

const App = () => {
  const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn) ;
console.log(isLoggedIn)
const dispatch= useDispatch();

  return (
    <div>
      <Home   />
      <Login />

      <button onClick={()=> {dispatch(login())}}>Log In</button>    </div>
  )
}

export default App
