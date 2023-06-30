import { useState, createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export const AppContext = createContext()

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <AppContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
