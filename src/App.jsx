import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom'
import PersonalDetails from './Pages/PersonalDetails'
import Templates from './Pages/Templates'
import Preview from './Pages/Preview'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentState, setCurrentState] = useState("Login");

  // authentication state and current user info
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // restore session from localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) {
      const user = JSON.parse(stored);
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
  }, []);

  // if already logged in and accidentally hit the root path, send to personal details
  React.useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      navigate("/personal-details", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const registerUser = ({ username, email, password }) => {
    const usersStr = localStorage.getItem("users") || "[]";
    const users = JSON.parse(usersStr);
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("An account with that email already exists");
      return false;
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // do not auto-login; ask the user to sign in
    alert("Account created. Please log in with your new credentials.");
    setCurrentState("Login");
    // keep the login modal open so they can enter credentials
    return true;
  };

  const loginUser = ({ email, password }) => {
    const usersStr = localStorage.getItem("users") || "[]";
    const users = JSON.parse(usersStr);
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      alert("Invalid email or password");
      return false;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthenticated(true);
    setShowLogin(false);
    navigate("/personal-details", { replace: true });
    return true;
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    // clear history entry by replacing
    navigate("/", { replace: true });
  };

  return (
    <>
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          currentState={currentState}
          setCurrentState={setCurrentState}
          registerUser={registerUser}
          loginUser={loginUser}
        />
      )}

      <Navbar
        setShowLogin={setShowLogin}
        setCurrentState={setCurrentState}
        isAuthenticated={isAuthenticated}
        logoutUser={logoutUser}
      />

      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShowLogin={setShowLogin}
                setCurrentState={setCurrentState}
                isAuthenticated={isAuthenticated}
              />
            }
          />

          <Route
            path="/personal-details"
            element={
              isAuthenticated ? (
                <PersonalDetails />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route path='/templates' element={<Templates />} />

          <Route path='/preview' element={<Preview />} />

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App