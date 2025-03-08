import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleToggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <Header />
      <div className="absolute insert-0">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg" />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-10 rounded-lg backdrop-blur-md bg-black/3 shadow-xl border border-black/20">
        <h1 className="text-white text-3xl font-semibold mb-6 text-center">
          {!isSignedIn ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-300"
        />
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition">
          Sign In
        </button>

        {!isSignedIn && 
          <div className="flex justify-between text-gray-300 text-sm mt-3">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        }

        <p className="text-gray-400 text-sm mt-5 text-center">
          {!isSignedIn ? "Already Registered! " : "New to Netflix?"}{" "}
          <a
            href="#"
            className="text-white hover:underline"
            onClick={handleToggleSignInForm}
          >
            {}Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
