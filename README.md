## Project: Implementing JWT Authentication in a React App

This project will put your understanding of JWT and React Context into practice. We are going to simulate a complete JWT authentication flow. You will be responsible for creating the login logic, understanding and implementing a private route system, managing global context, and understanding the structure of JWT. Finally, you will fetch user-specific posts and implement a logout feature.

### Milestones:

#### 1. Creating Login Logic

    Open the `LoginForm.jsx` component. Pay particular attention to the `handleSubmit` function.

    You'll need to update this function to send a POST request with the email and password from your form. The API will only respond to these two sets of credentials:

    ```
    email: coolemail@gmail.com
    password: 123123

    email: anotheremail@gmail.com
    password: 098098
    ```

#### 2. Understanding Private Route System

    Inspect `PrivateRoute.jsx` (specifically Line 10) and then `App.js` (Line 31). This is how private routing works.

    Answer the following questions:
    
    - Why do we need to detect the token?
    - What does return children mean?

#### 3. Understanding Global Context

    You will notice we are using React Context for handling global state (in this case, the JWT token). 
    
    Answer the question:
    
    - Why are we using React Context to manage our token?

#### 4. Understanding JWT Structure

    Take the JWT from the login request and parse it into the [JWT Debugger](https://jwt.io/). Examine its contents. 

    Answer the question:
    
    - What is the hidden payload in the JWT?

#### 5. Fetching User Posts

    Open `Profile.jsx` and look at Line 20. Follow the instructions to fetch and display user-specific posts.

#### 6. Logout

    Check `NavBar.jsx` at Line 8. Follow the instructions to implement the logout feature, which should remove the JWT token and un-authenticate the user.

By the end of this project, you should have a good understanding of how JWT and React Context can be used together to manage user authentication and state in a React application. Make sure to test your application thoroughly to ensure everything is working as expected.
