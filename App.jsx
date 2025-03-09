import React from 'react'

import { Home, Login } from './screens';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/slice/auth.slice';



const App = () => {
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
 
  

  return (
//     <div>
     
// <button onClick={()=> {dispatch(login())}}>Log In</button>

//     </div>

    <div>
     
     {isLoggedIn ? <Home/> : <Login/>}

     <button onClick={()=> {
      isLoggedIn ? dispatch(logout()) : dispatch(login())
      }}>
      
        {isLoggedIn ? "Logout" : "Login"}
      
      
      </button>
     
    </div>

  )
}

export default App