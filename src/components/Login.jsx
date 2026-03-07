import React from 'react'
import close from "../assets/cross_icon.png"

const Login = ({
  setShowLogin,
  currentState,
  setCurrentState,
  registerUser,
  loginUser,
}) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Register") {
      const success = registerUser({ username, email, password });
      if (success) {
        // reset fields
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } else {
      const success = loginUser({ email, password });
      if (success) {
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black/60 grid">
      <form
        onSubmit={handleSubmit}
        className="place-self-center w-[max(23vw,330px)] bg-white text-gray-500 flex flex-col gap-6 p-6 rounded-lg text-sm animate-[fadeIn_0.5s]"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-bold text-orange-600">
            {currentState}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={close}
            alt="close"
            className="w-4 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5">
          {currentState === "Login" ? null : (
            <div className="flex flex-col">
              <label className="text-black mb-1">Username</label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none border border-gray-400 p-2.5 rounded"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border border-gray-400 p-2.5 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border border-gray-400 p-2.5 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="border-none p-2.5 rounded text-white bg-orange-600 text-[15px] cursor-pointer hover:bg-orange-700 transition"
        >
          {currentState === "Register" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-start gap-2 -mt-3">
          <input type="checkbox" required className="mt-1" />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setCurrentState("Register")}
              className="text-orange-600 font-medium cursor-pointer"
            >
              Register here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setCurrentState("Login")}
              className="text-orange-600 font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login