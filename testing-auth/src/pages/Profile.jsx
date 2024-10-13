import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AppContext } from "../App"

export default function Profile() {
  const { token } = useContext(AppContext)
  const [ posts, setPosts ] = useState([])

  useEffect(() => { 
    async function loadPosts(){
      try{
        const bearer_token = `Bearer ${token}`;

        const config = {
          headers: {
            Authorization: bearer_token
          }
        };

        const { data: posts } = await axios.get('http://localhost:3000/posts', config)
        
        setPosts(posts)
      }
      catch(err){
        console.error(err)
        alert('Could not fetch posts, check your logs')
      }
    }
    
    loadPosts()
  }, [token])
  
  return (
    <div>
        <h2>Your token</h2>
        <p>Your access token is  {token}</p>

        {posts.map(post=> 
          <>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </>
        )}
    </div>
  )
}
