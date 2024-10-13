import axios from 'axios';
import { redirect } from "react-router-dom";


export async function login(username, password) {
  try {
    
    // Store the token (see step 3)
    // localStorage.setItem('token', token);
    localStorage.setItem('token', Date.now());
    redirect('profile')
  } catch (error) {
    console.error('Failed to log in', error);
    // Handle login error
  }
}