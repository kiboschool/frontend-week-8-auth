import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";

export default function NavBar() {
  const { token , setToken} = useContext(AppContext)

  // what do we need to do to to logout the user?
  const logout  = () => { 
  }

  return (
    <ul>
        {!token && <li><NavLink to='/'>Home</NavLink></li>}
        {!token && <li><NavLink to='login'>Login</NavLink></li>}
        {token && <li><NavLink to='profile'>My Profile</NavLink></li>}
        {token && <button onClick={logout}>Logout</button>}
    </ul>
  )
}
