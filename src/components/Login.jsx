import React from 'react'

const Login = ({ setShowLogin, currentState, setCurrentState }) => {

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black/60 grid">

      <form
        className="place-self-center w-[max(23vw,330px)] bg-white text-gray-500 flex flex-col gap-6 p-6 rounded-lg text-sm animate-[fadeIn_0.5s]"
      >

        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-bold text-orange-600">
            {currentState}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            src=""
            alt="close"
            className="w-4 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5">

          {currentState === "Login" ? null : (
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-gray-300 p-2.5 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-gray-300 p-2.5 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-gray-300 p-2.5 rounded"
          />

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
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Register")}
              className="text-orange-600 font-medium cursor-pointer"
            >
              Register here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
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
  )
}

export default Login