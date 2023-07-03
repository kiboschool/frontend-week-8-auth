import { useContext, useState } from "react";
import axios from 'axios'
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setToken } = useContext(AppContext)
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    /** THINGS TO DO IN THIS FUNCTION
     * 1. Sent POST request to /session, send email and password as body request
     * 2. API will return JWT token if email/password exists
     * 3. Store that token (only the token) using setToken function (it uses react context)
     * 4. Navigate to /profile (using useNavigate() from react-router-dom) (it's a private route)
     */
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Log in</button>
    </form>
  )
}