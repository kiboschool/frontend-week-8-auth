import { useContext, useState } from "react";
import axios from 'axios'
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setToken } = useContext(AppContext)
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('coolemail@gmail.com');
  const [password, setPassword] = useState('123123');

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const { data } = await axios.post('http://localhost:3000/session',  { email, password } );
      setToken(data.token)
      navigate('/profile')
    }
    catch(err){
      console.error(err)
      alert('some thing went wrong, check your console logs request/response')
    }
    
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